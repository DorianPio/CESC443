import { UserValidatorRequestParameters } from "../user/callerValidator";
export const methodContentUser = {
  GET: UserValidatorRequestParameters.GETValidatorRequestParameters,
  PATCH: UserValidatorRequestParameters.PATCHValidatorRequestParameters,
  PUT: UserValidatorRequestParameters.PUTValidatorRequestParameters,
  DELETE: UserValidatorRequestParameters.DELETEValidatorRequestParameters,
  POST: UserValidatorRequestParameters.POSTValidatorRequestParameters,
};

import { TeamValidatorRequestParameters } from "../teams/callerValidator";
export const methodContentTeam = {
  GET: TeamValidatorRequestParameters.GETValidatorRequestParameters,
  PATCH: TeamValidatorRequestParameters.PATCHValidatorRequestParameters,
  PUT: TeamValidatorRequestParameters.PUTValidatorRequestParameters,
  DELETE: TeamValidatorRequestParameters.DELETEValidatorRequestParameters,
  POST: TeamValidatorRequestParameters.POSTValidatorRequestParameters,
};

import { UserInTeamValidatorRequestParameters } from "../teams/users/callerValidator";
export const methodContentUserInTeam = {
  GET: UserInTeamValidatorRequestParameters.GETValidatorRequestParameters,
  PATCH: UserInTeamValidatorRequestParameters.PATCHValidatorRequestParameters,
  PUT: UserInTeamValidatorRequestParameters.PUTValidatorRequestParameters,
  DELETE: UserInTeamValidatorRequestParameters.DELETEValidatorRequestParameters,
  POST: UserInTeamValidatorRequestParameters.POSTValidatorRequestParameters,
};

import { SlotValidatorRequestParameters } from "../slots/callerValidator";
export const methodContentSlot = {
  GET: SlotValidatorRequestParameters.GETValidatorRequestParameters,
  PATCH: SlotValidatorRequestParameters.PATCHValidatorRequestParameters,
  PUT: SlotValidatorRequestParameters.PUTValidatorRequestParameters,
  DELETE: SlotValidatorRequestParameters.DELETEValidatorRequestParameters,
  POST: SlotValidatorRequestParameters.POSTValidatorRequestParameters,
};

import { AdvertisementValidatorRequestParameters } from "../advertisment/callerValidator";
export const methodContentAdvertisement = {
  GET: AdvertisementValidatorRequestParameters.GETValidatorRequestParameters,
  PATCH:
    AdvertisementValidatorRequestParameters.PATCHValidatorRequestParameters,
  PUT: AdvertisementValidatorRequestParameters.PUTValidatorRequestParameters,
  DELETE:
    AdvertisementValidatorRequestParameters.DELETEValidatorRequestParameters,
  POST: AdvertisementValidatorRequestParameters.POSTValidatorRequestParameters,
};

import { PropertiesValidatorRequestParameters } from "../properties/callerValidator";
export const methodContentProperties = {
  GET: PropertiesValidatorRequestParameters.GETValidatorRequestParameters,
  PATCH: PropertiesValidatorRequestParameters.PATCHValidatorRequestParameters,
  PUT: PropertiesValidatorRequestParameters.PUTValidatorRequestParameters,
  DELETE: PropertiesValidatorRequestParameters.DELETEValidatorRequestParameters,
  POST: PropertiesValidatorRequestParameters.POSTValidatorRequestParameters,
};
