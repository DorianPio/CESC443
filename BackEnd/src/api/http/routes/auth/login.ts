import { Router } from "express";
import { User } from "../../../../database/Schema/users";
import { loginValidatorMiddleware } from "../../../validators/auth/loginValidator";
const hash = require("object-hash");
const jwt = require("jsonwebtoken");
const router = Router();

router.use("/login", async (req, res, next): Promise<void> => {
  loginValidatorMiddleware.loginValidator(req, res, next);
});

router.post("/login", async (req, res) => {
  const email: string = req.body.email.toLowerCase();
  const password: string = hash(req.body.password);
  const user = new User({
    email: email,
    password: password,
  });

  const userExist = await user.findOneUserByEmail().then((user) => {
    if (!user) {
      return res.status(501).send({ error: "User doesn't exist" });
    } else {
      if (password === user.password) {
        return res.status(200).send({
          authToken: jwt.sign({ email: email }, process.env.JWT_SECRET),
          role: user.role,
        });
      } else {
        return res.status(501).send({ error: "Password is incorrect" });
      }
    }
  });
});

export const login = {
  router,
};
