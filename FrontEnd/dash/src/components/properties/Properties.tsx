import { NavBarComponent } from "../sidebar/SideBar";
import { Cards } from "../genericCard/Cards";
import { useEffect, useState } from "react";
import { makeGETRequest } from "../../request/rawRequest";
import { Table } from "../home/table/tableGenerate";

export const Properties = () => {
  const [teamId, setTeamId] = useState<string>("");
  const [endpoint, setEndpoint] = useState<string>("");

  const getTeamId = async () => {
    await makeGETRequest("/me").then((response) => {
      setEndpoint("/properties?id=" + response.team.id_team);
    });
  };

  useEffect(() => {
    getTeamId();
  }, []);

  return (
    <>
      <div className="parent">
        <div className="div1 other-content">
          <NavBarComponent />
        </div>
        <div className="div2 bg-gray-800 pt-9 pb-9 h-full">
          {endpoint.length > 0 ? (
            <Cards
              endpoint={endpoint}
              title={"Nombre d'espace ou d'annonce que vous possédez"}
              description={"Il s'agit de toutes vos possessions"}
            />
          ) : null}
        </div>
        <div className="div3">
          {endpoint.length > 0 ? (
            <Table endpoint={endpoint} team={false} stats={true} />
          ) : null}
        </div>
      </div>
    </>
  );
};
