import { NavBarComponent } from "../sidebar/SideBar";
import { Table } from "./table/tableGenerate";
import { Cards } from "../genericCard/Cards";
import "./Home.css";
import { useEffect, useState } from "react";
import { doNothings, returnToSomewhere } from "../../App";

export const Home = () => {
  const [endpoint, setEndpoint] = useState("");

  useEffect(() => {
    if (localStorage.getItem("type") === "developper") {
      setEndpoint("/advertisements");
    } else {
      setEndpoint("/virtuals");
    }
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
              title={
                localStorage.getItem("type") !== "advertiser"
                  ? "Nombres d'annonces disponibles"
                  : "Nombres d'espaces disponibles"
              }
              description={
                localStorage.getItem("type") !== "advertiser"
                  ? "Il s'agit de toute les annonces proposées et disponibles"
                  : "Il s'agit de toute les espaces proposés et disponibles"
              }
            />
          ) : null}
        </div>
        <div className="div3">
          {endpoint.length > 0 ? (
            <Table endpoint={endpoint} team={false} />
          ) : null}
        </div>
      </div>
    </>
  );
};
