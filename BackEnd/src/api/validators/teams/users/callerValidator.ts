import { validRequestParameterMiddleware } from "../../../middlewares/request/validatorParameters";

const PATCHValidatorRequestParameters = (req, res, next) => {
  validRequestParameterMiddleware.validRequestParameter(req, res, next);
};

const GETValidatorRequestParameters = (req, res, next) => {
  const id_team = req.query.id_team;
  validRequestParameterMiddleware.validRequestParameter(
    req,
    res,
    next,
    id_team
  );
};

const POSTValidatorRequestParameters = (req, res, next) => {
  const { email, id_team } = req.body;
  validRequestParameterMiddleware.validRequestParameter(
    req,
    res,
    next,
    email,
    id_team
  );
};

const DELETEValidatorRequestParameters = (req, res, next) => {
  validRequestParameterMiddleware.validRequestParameter(req, res, next);
};

const PUTValidatorRequestParameters = (req, res, next) => {
  validRequestParameterMiddleware.validRequestParameter(req, res, next);
};

export const UserInTeamValidatorRequestParameters = {
  PATCHValidatorRequestParameters,
  GETValidatorRequestParameters,
  POSTValidatorRequestParameters,
  DELETEValidatorRequestParameters,
  PUTValidatorRequestParameters,
};
