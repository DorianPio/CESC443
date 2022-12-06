import { validRequestParameterMiddleware } from "../../middlewares/request/validatorParameters";

const PATCHValidatorRequestParameters = (req, res, next) => {
  const { free, id, id_team, name } = req.body;

  validRequestParameterMiddleware.validRequestParameter(
    req,
    res,
    next,
    free,
    id,
    id_team,
    name
  );
};

const GETValidatorRequestParameters = (req, res, next) => {
  const id = req.query.id;

  validRequestParameterMiddleware.validRequestParameter(req, res, next, id);
};

const POSTValidatorRequestParameters = (req, res, next) => {
  const { picture_Url, name, description, team_id } = req.body;

  validRequestParameterMiddleware.validRequestParameter(
    req,
    res,
    next,
    picture_Url,
    name,
    description,
    team_id
  );
};

const DELETEValidatorRequestParameters = (req, res, next) => {
  const { id } = req.body;

  validRequestParameterMiddleware.validRequestParameter(req, res, next, id);
};

const PUTValidatorRequestParameters = (req, res, next) => {
  validRequestParameterMiddleware.validRequestParameter(req, res, next);
};

export const AdvertisementValidatorRequestParameters = {
  PATCHValidatorRequestParameters,
  GETValidatorRequestParameters,
  POSTValidatorRequestParameters,
  DELETEValidatorRequestParameters,
  PUTValidatorRequestParameters,
};
