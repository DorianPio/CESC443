import { useState } from "react";
import { useLocation } from "react-router-dom";
import { makeGETRequest, makePATCHRequest } from "../../request/rawRequest";
import "./AdDetail.css";

export const AdDetails = () => {
  const locationL = useLocation();
  const params = new URLSearchParams(locationL.search);
  const pictureUrl: string = String(params.get("picture_Url"));
  const team: Boolean = params.get("team") === "false" ? false : true;

  const saveDetail = async () => {
    await makeGETRequest("/me").then(async (result) => {
      const endpoint =
        localStorage.getItem("type") === "developper"
          ? "/advertisement"
          : "/virtual";

      await makePATCHRequest(endpoint, {
        id: params.get("id"),
        name: params.get("name"),
        id_team: result.team.id_team,
        free: false,
      }).then((response) => {
        window.location.href = "/";
      });
    });
  };

  return (
    <>
      <div className="parentAd">
        <div className="div1Ad  bg-gray-200 h-20">
          <div className="mx-5 my-5">
            <button
              className="hover:bg-gray-300"
              onClick={(e) => {
                window.location.href = "/";
              }}
            >
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
                  d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="div2Ad">
          <img className="mt-20 rounded" src={pictureUrl} />
        </div>
        <div className="div3Ad">
          <div className="mx-4">
            <div className="text-2xl underline">{params.get("name")}</div>
            <div className="text-sm italic">
              description: {params.get("description")}
            </div>
          </div>
        </div>
        <div className="div4Ad">
          {!team ? (
            <button
              className="px-20 py-2.5 bg-blue-500 text-white font-bold rounded-lg"
              onClick={saveDetail}
            >
              {localStorage.getItem("type") === "advertiser"
                ? "Get the space"
                : "Get the ad"}
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};
