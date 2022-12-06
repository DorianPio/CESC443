import axios from "axios";
import { checkFakeToken } from "./checkFakeToken";

export const baseUrl: string = "http://localhost:3000/api";

const makeRAWRequest = async (
  endpoint: string,
  method: string,
  body?: any
): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    await axios({
      method: method,
      url: baseUrl + endpoint,
      headers: {
        Authorization:
          localStorage.getItem("authTokenSoftwareManagement") ?? "nullToken",
      },
      data: body,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        // checkFakeToken(error);
        reject(error);
      });
  });
};

export const makeGETRequest = async (endpoint: string): Promise<any> => {
  const response: Promise<any> = await makeRAWRequest(endpoint, "GET");
  return response;
};

export const makePOSTRequest = async (
  endpoint: string,
  body?: any
): Promise<any> => {
  const response: Promise<any> = makeRAWRequest(endpoint, "POST", body);
  return response;
};

export const makePATCHRequest = async (
  endpoint: string,
  body?: any
): Promise<any> => {
  const response: Promise<any> = makeRAWRequest(endpoint, "PATCH", body);
  return response;
};

export const makePUTRequest = async (endpoint: string): Promise<any> => {
  const response: Promise<any> = makeRAWRequest(endpoint, "PUT");
  return response;
};

export const makeDELETERequest = async (
  endpoint: string,
  body?: any
): Promise<any> => {
  const response: Promise<any> = makeRAWRequest(endpoint, "DELETE", body);
  return response;
};
