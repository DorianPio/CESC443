import { response, Router } from "express";
import { User } from "../../../../database/Schema/users";
import { registerValidatorMiddleware } from "../../../validators/auth/registerValidator";
const hash = require("object-hash");
const jwt = require("jsonwebtoken");
const router = Router();

router.use("/register", async (req, res, next): Promise<void> => {
  registerValidatorMiddleware.registerValidator(req, res, next);
});

router.post("/register", async (req, res) => {
  const email: string = req.body.email.toLowerCase();
  const password: string = hash(req.body.password);
  const { role } = req.body;
  const userCreated = new User({
    email: email,
    password: password,
    role: role,
  });

  const userExist = await userCreated.findOneUserByEmail().then((user) => {
    if (user) {
      return res.status(501).send({ error: "User already exist" });
    } else {
      userCreated.createUser().then((response) => {
        if (response === true) {
          return res.status(200).send({
            authToken: jwt.sign({ email: email }, process.env.JWT_SECRET),
            role: role,
          });
        } else {
          return res.status(401).send({ response });
        }
      });
    }
  });
});

export const register = {
  router,
};
