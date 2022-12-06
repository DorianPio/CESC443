import { useEffect, useState } from "react";
import { makeGETRequest, makePOSTRequest } from "../../request/rawRequest";
import { Cards } from "../genericCard/Cards";
import { Table } from "../home/table/tableGenerate";
import { NavBarComponent } from "../sidebar/SideBar";

export const AdsComponent = () => {
  const [teamId, setTeamId] = useState<string>("");
  const [endpoint, setEndpoint] = useState<string>("");
  const [add, setAdd] = useState<boolean>(false);
  const [style, styleSet] = useState<string>("");
  const [credentials, setCredentials] = useState({
    name: "",
    description: "",
    picture_Url: "",
  });

  const handleInputChange = (evt: any) => {
    evt.persist();
    setCredentials((credentials) => ({
      ...credentials,
      [evt.target.id]: evt.target.value,
    }));
  };

  const fetchUser = async () => {
    await makeGETRequest("/me").then((response) => {
      if (!response.team) {
        window.location.href = "/team";
      }
      setTeamId(response.team.id_team);
      if (localStorage.getItem("type") === "developper") {
        setEndpoint("/virtualTeam?id=" + response.team.id_team);
      } else {
        setEndpoint("/advertisementTeam?id=" + response.team.id_team);
      }
    });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const createAd = async () => {
    const postEndpoint =
      localStorage.getItem("type") === "developper"
        ? "/virtual"
        : "/advertisement";
    await makePOSTRequest(postEndpoint, {
      name: credentials.name,
      description: credentials.description,
      picture_Url: credentials.picture_Url,
      team_id: teamId,
    }).then(() => {
      window.location.reload();
    });
  };

  // let style: string = add ? "backdrop-blur-sm" : "";

  return (
    <div className={style}>
      <div className="parent">
        <div className="div1 other-content">
          <NavBarComponent />
        </div>
        <div className="div2 bg-gray-800 pt-9 pb-9">
          {endpoint.length > 0 && teamId.length > 0 ? (
            <Cards
              endpoint={endpoint}
              title={
                localStorage.getItem("type") === "advertiser"
                  ? "Nombres d'annonces"
                  : "Nombres d'esapces"
              }
              description={
                localStorage.getItem("type") === "advertiser"
                  ? "Il s'agit de toute les annonces proposées"
                  : "Il s'agit de toute les espaces proposés"
              }
            />
          ) : null}
        </div>
        <div className="div3">
          <div className="w-full text-center">
            {add ? (
              <div className="mt-20">
                <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none mx-60">
                  <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                      <h5
                        className="text-xl font-medium leading-normal text-gray-800"
                        id="exampleModalScrollableLabel"
                      >
                        Modal title
                      </h5>
                      <button
                        type="button"
                        className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body relative p-4">
                      <input
                        type="text"
                        className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                        id="name"
                        placeholder="An ad"
                        value={credentials.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="modal-body relative p-4">
                      <input
                        type="text"
                        className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                        id="picture_Url"
                        placeholder="https://randomwordgenerator.com/img/picture-generator/train-1728537_640.jpg"
                        value={credentials.picture_Url}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="modal-body relative p-4">
                      <input
                        type="text"
                        className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                        id="description"
                        placeholder="A description"
                        value={credentials.description}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                      <button
                        onClick={(e) => setAdd(!add)}
                        type="button"
                        className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        onClick={() => createAd()}
                        type="button"
                        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                      >
                        Create add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <button
                  onClick={() => setAdd(!add)}
                  className="bg-gray-200 hover:bg-gray-300 px-4 py-2.5 rounded mt-4"
                >
                  {localStorage.getItem("type") === "advertiser"
                    ? "Create Add"
                    : "Create Space"}
                </button>
              </div>
            )}
          </div>
          {endpoint.length > 0 && teamId.length > 0 ? (
            <Table endpoint={endpoint} team={true} />
          ) : null}
        </div>
      </div>
    </div>
  );
};
