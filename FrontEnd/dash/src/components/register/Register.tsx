import { SetStateAction, useEffect, useState } from "react";
import { doNothings, returnToSomewhere } from "../../App";
import { makeGETRequest, makePOSTRequest } from "../../request/rawRequest";

interface IContainer {
  role: string;
}

const Register: React.FC<IContainer> = ({ role }) => {
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
    await makePOSTRequest("/register", {
      email: credentials.email,
      password: credentials.password,
      role: role,
    })
      .then(async (response) => {
        localStorage.setItem("authTokenSoftwareManagement", response.authToken);
        localStorage.setItem("type", response.role);
        // console.log(response);
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
          Inscrivez vous au Dashboard{" "}
          {role === "adviser"
            ? " pour les annonceurs"
            : "pour les developpeurs"}
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
          <label htmlFor="password">Mot de passe</label>
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
            Register
          </button>
        </div>
        <div
          onClick={() => {
            window.location.href = "/login";
          }}
          className="text-sm italic underline mt-3"
        >
          I already have an account
        </div>
      </div>
    </div>
  );
};

export default Register;
