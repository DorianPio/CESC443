import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { baseUrl, makeGETRequest } from "../../request/rawRequest";
import "./Stats.css";

export const Stats = () => {
  const locationL = useLocation();
  const params = new URLSearchParams(locationL.search);
  const [stats, setStats] = useState<Number>(0);
  const [link, setViewLink] = useState<Boolean>(false);

  const fetchStats = async (id: string) => {
    await makeGETRequest(
      "/stats?id=" + id + "&type=" + localStorage.getItem("type")
    ).then((response) => {
      setStats(response.stats);
    });
  };

  useEffect(() => {
    fetchStats(String(params.get("id_thing")));
  }, []);

  console.log(stats);
  return (
    <div style={{ height: "100vh" }} className="parentStats">
      <div className="div2Stats bg-gray-200 py-4 px-8 mb-40">
        <button
          className="hover:bg-gray-300 scale-100 hover:scale-150 ease-in duration-100"
          onClick={(e) => {
            window.location.href = "/properties";
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
      <div className="div1Stats bg-white rounded-2xl drop-shadow-2xl px-5">
        <div className="text-center mt-10 font-mono text-2xl">
          {params.get("name")}
        </div>
        <div className="flex flex-line">
          <img
            className="scale-50 hover:scale-75 ease-in duration-500 rounded-lg"
            src={String(params.get("picture_Url"))}
          />
          <div className="mt-32 font-sans text-lg underline">
            description: {params.get("description")}
          </div>
        </div>
        <div className="text-center">Stats: {String(stats)}</div>

        {localStorage.getItem("type") !== "advertiser" ? (
          <div className="flex flex-col">
            <div className="text-center">
              <button
                onClick={(e) => {
                  setViewLink(!link);
                }}
                className="bg-blue-400 px-5 py-1.5 rounded text-white"
              >
                Get link
              </button>
              {link ? (
                <div>
                  {baseUrl + "/advertisement?id=" + params.get("id_thing")}
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
