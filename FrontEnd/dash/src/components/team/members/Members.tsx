import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  makeDELETERequest,
  makeGETRequest,
  makePOSTRequest,
} from "../../../request/rawRequest";

interface IContainer {
  team_id: string;
}
export const TableMembers: React.FC<IContainer> = ({ team_id }) => {
  const [tableSchoolComponent, setTableSchoolComponent] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [credentials, setCredentials] = useState({
    name: "",
  });
  const [loadingToLong, setLoadingToLong] = useState(true);
  const teamIdFinal = team_id.split("=");
  const id = teamIdFinal[1];

  const fetchUser = async () => {
    await makeGETRequest(team_id)
      .then((response) => {
        setTableSchoolComponent(response);
        setLoading(false);
      })
      .catch((error) => {
      });
  };

  const handleInputChange = (evt: any) => {
    evt.persist();
    setCredentials((credentials) => ({
      ...credentials,
      [evt.target.id]: evt.target.value,
    }));
  };

  const handleClick = async (evt: any) => {
    await makePOSTRequest("/manage/team", {
      email: credentials.name,
      id_team: id,
    }).then((response) => {
      window.location.reload();
    });
  };

  const deleteThisOne = async (cap: any) => {
    await makeDELETERequest("/manage/team", {
      id_team: id,
      email: cap.email,
    })
      .then((res) => {
        window.location.reload();
      })
      .catch(() => {});
  };

  useEffect(() => {
    fetchUser();
    setTimeout(() => {
      setLoadingToLong(false);
    }, 10000);
  }, []);

  const reload = () => {
    if (loading) {
      window.location.reload();
    }
    return <></>;
  };

  return (
    <>
      {loading ? (
        <div role="status" className="flex justify-center mt-20">
          <svg
            aria-hidden="true"
            className="mr-2 w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div>
          {loadingToLong ? null : <div>{reload()}</div>}
          <div className="flex flex-row justify-center my-5">
            <div className="text-lg pt-1.5">Ajouter un membre:</div>
            <input
              id="name"
              placeholder="Adresse mail à ajouter"
              value={credentials.name}
              onChange={handleInputChange}
              className="border-2 border-gray-200 py-1.5 px-5 rounded-lg"
            ></input>
            <button onClick={handleClick}>
              <div className="hover:color-green-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                  />
                </svg>
              </div>
            </button>
          </div>
          <div className="flex flex-col w-full">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="bg-white border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Email
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableSchoolComponent.map((cap: any, index: any) => {
                        return (
                          <React.Fragment key={index}>
                            <tr className="bg-gray-100 border-b hover:bg-gray-300 cursor focus:cursor-auto">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {index}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {cap.email}
                              </td>

                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                <button
                                  onClick={(e) => {
                                    deleteThisOne(cap);
                                  }}
                                >
                                  <div className="text-red-400 hover:text-red-600">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      className="w-6 h-6"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                      />
                                    </svg>
                                  </div>
                                </button>
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"></td>
                            </tr>
                          </React.Fragment>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
