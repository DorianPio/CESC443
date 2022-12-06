import { validRequestParameterMiddleware } from "../../middlewares/request/validatorParameters";

const PATCHValidatorRequestParameters = (req, res, next) => {
  const { id, owner, free } = req.body;

  validRequestParameterMiddleware.validRequestParameter(
    req,
    res,
    next,
    id,
    owner,
    free
  );
};

const GETValidatorRequestParameters = (req, res, next) => {
  validRequestParameterMiddleware.validRequestParameter(req, res, next);
};

const POSTValidatorRequestParameters = (req, res, next) => {
  const { creator, description, game } = req.body;

  validRequestParameterMiddleware.validRequestParameter(
    req,
    res,
    next,
    creator,
    description,
    game
  );
};

const DELETEValidatorRequestParameters = (req, res, next) => {
  const { id } = req.body;
  validRequestParameterMiddleware.validRequestParameter(req, res, next, id);
};

const PUTValidatorRequestParameters = (req, res, next) => {
  validRequestParameterMiddleware.validRequestParameter(req, res, next);
};

export const SlotValidatorRequestParameters = {
  PATCHValidatorRequestParameters,
  GETValidatorRequestParameters,
  POSTValidatorRequestParameters,
  DELETEValidatorRequestParameters,
  PUTValidatorRequestParameters,
};
