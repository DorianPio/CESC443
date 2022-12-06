import { validRequestParameterMiddleware } from "../../middlewares/request/validatorParameters";

const PATCHValidatorRequestParameters = (req, res, next) => {
  validRequestParameterMiddleware.validRequestParameter(req, res, next);
};

const GETValidatorRequestParameters = (req, res, next) => {
  const id = req.query.id;
  validRequestParameterMiddleware.validRequestParameter(req, res, next, id);
};

const POSTValidatorRequestParameters = (req, res, next) => {
  validRequestParameterMiddleware.validRequestParameter(req, res, next);
};

const DELETEValidatorRequestParameters = (req, res, next) => {
  const { id, role } = req.body;

  validRequestParameterMiddleware.validRequestParameter(
    req,
    res,
    next,
    id,
    role
  );
};

const PUTValidatorRequestParameters = (req, res, next) => {
  validRequestParameterMiddleware.validRequestParameter(req, res, next);
};

export const PropertiesValidatorRequestParameters = {
  PATCHValidatorRequestParameters,
  GETValidatorRequestParameters,
  POSTValidatorRequestParameters,
  DELETEValidatorRequestParameters,
  PUTValidatorRequestParameters,
};
