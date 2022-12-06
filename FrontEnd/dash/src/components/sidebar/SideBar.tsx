import { useEffect, useState } from "react";
import { makeGETRequest } from "../../request/rawRequest";
import { User } from "../../type/types";

export const NavBarComponent = () => {
  const [userInformations, setUserInformations] = useState<any>(null);
  const [isRequested, setRequested] = useState(false);

  const trucs = ["DashBoard", "Profs", "Elèves"];

  useEffect(() => {
    if (!isRequested) {
      makeGETRequest("/me").then((response) => {
        const user: User = response;
        setUserInformations(user);
        setRequested(true);
      });
    }
  });

  const styleLoading = { height: 0, opacity: 0 };

  return (
    <div className="h-full shadow-md bg-white" id="sidenavSecExample">
      <div className="pt-4 pb-2 px-6">
        <a href="#!">
          <div className="flex items-center">
            <div className="shrink-0">
              <img
                src={"https://i.ibb.co/dJpvY17/logo-200x200.png"}
                className="rounded-full w-10"
                alt="Avatar"
              />
            </div>
            <div className="grow ml-3">
              <p className="text-sm font-semibold text-blue-600">
                {userInformations ? userInformations.email : ""}{" "}
                {userInformations ? userInformations.role : ""}
              </p>
            </div>
          </div>
        </a>
      </div>
      <div>
        <hr className="my-2" />
        <ul className="relative px-1">
          <li className="relative">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
              href="/"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
            >
              <span>Dashboard</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <hr className="my-2" />
        <ul className="relative px-1">
          <li className="relative">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
              href="/team"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
            >
              <span>Team</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <hr className="my-2" />
        <ul className="relative px-1">
          <li className="relative">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
              href="/properties"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
            >
              <span>Properties</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <hr className="my-2" />
        <ul className="relative px-1">
          <li className="relative">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
              href="/ads"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
            >
              <span>
                {localStorage.getItem("type") === "advertiser"
                  ? "My Ads"
                  : "My Spaces"}
              </span>
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-2" />

      <ul className="relative px-1">
        <li className="relative">
          <a
            className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-red-700 text-ellipsis whitespace-nowrap rounded hover:text-red-600 hover:bg-blue-50 transition duration-300 ease-in-out"
            onClick={(e) => {
              localStorage.clear();
              localStorage.clear();
              window.location.href = "/login";
            }}
            data-mdb-ripple="true"
            data-mdb-ripple-color="primary"
          >
            <span>Logout</span>
          </a>
        </li>
      </ul>
      <hr className="my-2" />
    </div>
  );
};
