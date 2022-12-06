import { useLocation } from "react-router-dom";
import "./Stats.css";

export const Stats = () => {
  const locationL = useLocation();
  const params = new URLSearchParams(locationL.search);

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
      </div>
    </div>
  );
};
