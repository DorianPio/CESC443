import { NavBarComponent } from "../sidebar/SideBar";
import { Cards } from "../genericCard/Cards";
import "./TeamComponent.css";
import { useEffect, useState } from "react";
import { makeGETRequest, makePOSTRequest } from "../../request/rawRequest";
import { TableMembers } from "./members/Members";

export const TeamComponent = () => {
  const [hasTeam, setHasTeam] = useState<boolean>(false);
  const [teamId, setTeamId] = useState<string>("");
  const [teamName, setTeamName] = useState<string>("");

  const fetchHasTeam = async () => {
    await makeGETRequest("/me").then((response) => {
      if (response.team !== null) {
        setHasTeam(true);
        setTeamId(`/manage/team?id_team=${response.team.id_team}`);
      }
    });
  };

  useEffect(() => {
    fetchHasTeam();
  }, []);

  const createTeam = async () => {
    const type =
      localStorage.getItem("type") === "advertiser"
        ? "advertiser"
        : "developper";
    await makePOSTRequest("/team", {
      name: teamName,
      type: type,
    }).then((response) => {
      window.location.reload();
    });
  };

  let style: string = hasTeam ? "" : "flex justify-center";
  return (
    <div className={style}>
      {hasTeam ? (
        <div className="parent">
          <div className="div1 other-content">
            <NavBarComponent />
          </div>
          <div className="div2 bg-gray-800 pt-9 pb-9 h-full">
            <Cards
              endpoint={teamId}
              title="Nombres de membres"
              description="Il s'agit du nombre de membres présent dans votre team"
            />
          </div>
          <div className="div3">
            <TableMembers team_id={teamId} />
          </div>
        </div>
      ) : (
        <div className="w-full max-w-xs mt-64">
          <div className="text-center text-xl mb-5"> Create my team</div>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Team Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Team Name"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value!)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={(e) => createTeam()}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
