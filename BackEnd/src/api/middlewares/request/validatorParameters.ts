import { manageErrors } from "../../errors/checkEmpty";

// This function use emptyValidator to check if all arguments are string if its false

//It's return an error cause parameters cannot be other than string

const validRequestParameter = (req, res, next, ...args) => {
  const error: { error: string } = manageErrors.emptyValidator(...args);

  if (error !== undefined) {
    return res.status(400).send(error);
  }
  next();
};
export const validRequestParameterMiddleware = {
  validRequestParameter,
};
