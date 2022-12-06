import { validRequestParameterMiddleware } from "../../middlewares/request/validatorParameters";

const PATCHValidatorRequestParameters = (req, res, next) => {
  validRequestParameterMiddleware.validRequestParameter(req, res, next);
};

const GETValidatorRequestParameters = (req, res, next) => {
  const id = req.query.id;
  validRequestParameterMiddleware.validRequestParameter(req, res, next, id);
};

const POSTValidatorRequestParameters = (req, res, next) => {
  const { name, type } = req.body;
  validRequestParameterMiddleware.validRequestParameter(
    req,
    res,
    next,
    name,
    type
  );
};

const DELETEValidatorRequestParameters = (req, res, next) => {
  const id = req.query.id;
  validRequestParameterMiddleware.validRequestParameter(req, res, next, id);
};

const PUTValidatorRequestParameters = (req, res, next) => {
  validRequestParameterMiddleware.validRequestParameter(req, res, next);
};

export const TeamValidatorRequestParameters = {
  PATCHValidatorRequestParameters,
  GETValidatorRequestParameters,
  POSTValidatorRequestParameters,
  DELETEValidatorRequestParameters,
  PUTValidatorRequestParameters,
};
