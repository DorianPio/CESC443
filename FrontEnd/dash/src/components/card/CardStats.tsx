import { useEffect } from "react";
import { makeDELETERequest, makeGETRequest } from "../../request/rawRequest";

interface IContainer {
  name: string;
  description: string;
  picture_Url: string;
  team_id: String;
  team: boolean;
  id: string;
}

export const CardStats: React.FC<IContainer> = ({
  name,
  description,
  picture_Url,
  team_id,
  team,
  id,
}) => {
  const fetchTeamName = async () => {
    // await makeGETRequest("/teams?id=" + team_id).then((response) => {
    //   setTeamName(response.name);
    // });
  };
  useEffect(() => {
    fetchTeamName();
  });

  const test = (e: any) => {
    window.location.href =
      `/stats?id=${id}&name=${name}&description=${description}&picture_Url=${picture_Url}&team_id=${team_id}&team=` +
      team;
  };

  const deleteProperties = async () => {
    await makeGETRequest("/property?id=" + id).then(async (response) => {
      await makeDELETERequest("/properties", {
        role: localStorage.getItem("type"),
        id: response.id_thing,
      }).then(() => {
        window.location.reload();
      });
    });
  };

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <button onClick={test}>
          <img
            className="w-full"
            src={picture_Url}
            alt="Sunset in the mountains"
          ></img>
        </button>

        <button onClick={deleteProperties}>
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
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #ad
          </span>
        </div>
      </div>
    </>
  );
};
