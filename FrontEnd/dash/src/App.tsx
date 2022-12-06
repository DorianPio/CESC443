import Login from "./components/login/Login";
import { Routes, Route } from "react-router";
import { redirect } from "react-router-dom";
import { Home } from "./components/home/Home";
import Register from "./components/register/Register";
import { TeamComponent } from "./components/team/TeamComponent";
import { AdsComponent } from "./components/ads/AdsComponent";
import { AdDetails } from "./components/adPage/AdDetail";
import { Properties } from "./components/properties/Properties";
import { Stats } from "./components/stats/Stats";
import { ErrorComponent } from "./components/error/ErrorComponent";
import { Test } from "./components/test/Test";
export const returnToSomewhere = (route: string) => {
  window.location.href = route;
  return;
};

export const doNothings = () => {
  return;
};

const App = () => {
  const returnToLogin = () => {
    if (
      window.location.pathname !== "/registerad" &&
      window.location.pathname !== "/login" &&
      window.location.pathname !== "/registerdev"
    ) {
      window.location.href = "/login";
    }
    if (window.location.pathname === "/login") {
      return <Login />;
    }
    if (window.location.pathname === "/registerad") {
      return <Register role={"advertiser"} />;
    }
    if (window.location.pathname === "/registerdev") {
      return <Register role={"developper"} />;
    }
  };
  return (
    <>
      {localStorage.getItem("authTokenSoftwareManagement") && (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/registerad"
            element={<Register role={"advertiser"} />}
          />
          <Route
            path="/registerdev"
            element={<Register role={"developper"} />}
          />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<TeamComponent />} />
          <Route path="/ads" element={<AdsComponent />} />
          <Route path="/detailsAds" element={<AdDetails />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<ErrorComponent />} />
        </Routes>
      )}
      {!localStorage.getItem("authTokenSoftwareManagement") && returnToLogin()}
    </>
  );
};

export default App;
