import { manageErrors } from "../../errors/checkEmpty";
const validator = require("validator");

const registerValidator = (req, res, next): boolean => {
  const { email, password, role } = req.body;
  const error: { error: string } = manageErrors.emptyValidator(
    email,
    password,
    role
  );
  if (error !== undefined) {
    return res.status(400).send(error);
  } else {
    const emailLowerCase = email.toLowerCase();
    if (!validator.isEmail(emailLowerCase)) {
      return res.status(400).send({ error: "Invalid email format" });
    }
  }
  next();
};
export const registerValidatorMiddleware = {
  registerValidator,
};
