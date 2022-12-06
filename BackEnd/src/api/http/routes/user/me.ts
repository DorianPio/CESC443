import { Router } from "express";
import { UserInTeam } from "../../../../database/Schema/userInTeam";
import { User } from "../../../../database/Schema/users";
import { createMethodForDispatch } from "../../../validators";

import { getEmailByToken } from "../../../validators/utils/getEmailByToken";
import { methodContentUser } from "../../../validators/utils/methodContent";
const router = Router();

router.use("/me", async (req, res, next): Promise<void> => {
  createMethodForDispatch(req, res, next, methodContentUser);
});
router.get("/me", async (req, res) => {
  const email = await getEmailByToken(req.get("Authorization"));
  try {
    const result = await User.findOne({ email: email }, { password: 0 });
    const team = await UserInTeam.findOne({ email: email });
    return res.status(200).send({ result: result, team: team });
  } catch (err) {
    return res.status(501).send(err);
  }
});

export const me = {
  router,
};
