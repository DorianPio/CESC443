import { SetStateAction, useEffect, useState } from "react";
import { doNothings, returnToSomewhere } from "../../App";
import { makeGETRequest, makePOSTRequest } from "../../request/rawRequest";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<any>("");

  useEffect(() => {
    localStorage.getItem("authTokenSoftwareManagement")
      ? returnToSomewhere("/")
      : doNothings();
  }, []);

  const handleInputChange = (evt: any) => {
    evt.persist();
    setCredentials((credentials) => ({
      ...credentials,
      [evt.target.id]: evt.target.value,
    }));
  };

  const submit = async () => {
    await makePOSTRequest("/login", credentials)
      .then(async (response) => {
        localStorage.setItem("authTokenSoftwareManagement", response.authToken);
        localStorage.setItem("type", response.role);
        window.location.href = "/";
      })
      .catch((error) => {
        console.error(error.response.status);
        const errorDisplay: SetStateAction<string> = error.response.data.error;
        setError(errorDisplay);
      });
  };

  return (
    <div className="h-screen flex bg-gray-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Login to the Dashboard
        </h1>

        {error && (
          <div
            className="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 mb-3"
            role="alert"
          >
            {error}
          </div>
        )}
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
            id="email"
            placeholder="admin@admin.com"
            value={credentials.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input
            type="password"
            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
            id="password"
            placeholder="password"
            value={credentials.password}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex justify-center items-center mt-6">
          <button
            className={`bg-black py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
            onClick={submit}
          >
            Login
          </button>
        </div>
        <div
          className="mt-2 underline italic"
          onClick={(e) => {
            window.location.href = "/registerad";
          }}
        >
          Not registered ? Advertiser
        </div>
        <div
          className="mt-2 underline italic"
          onClick={(e) => {
            window.location.href = "/registerdev";
          }}
        >
          Not registered ? Developper
        </div>
      </div>
    </div>
  );
};

export default Login;
