import { manageErrors } from "../../errors/checkEmpty";

const loginValidator = (req, res, next): boolean => {
  const { email, password } = req.body;
  const error: { error: string } = manageErrors.emptyValidator(email, password);
  if (error !== undefined) {
    return res.status(400).send(error);
  }
  next();
};
export const loginValidatorMiddleware = {
  loginValidator,
};
