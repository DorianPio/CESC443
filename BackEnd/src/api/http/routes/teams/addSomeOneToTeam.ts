import { Router } from "express";
import { UserInTeam } from "../../../../database/Schema/userInTeam";
import { User } from "../../../../database/Schema/users";
import { checkAdminTeam } from "../../../middlewares/teams/checkAdminTeam";
import { createMethodForDispatch } from "../../../validators";

import { getEmailByToken } from "../../../validators/utils/getEmailByToken";
import { methodContentUserInTeam } from "../../../validators/utils/methodContent";
const router = Router();

router.use("/team", async (req, res, next): Promise<void> => {
  createMethodForDispatch(req, res, next, methodContentUserInTeam);
  checkAdminTeam(req, res, next);
});
router.post("/team", async (req, res) => {
  const { email, id_team } = req.body;
  try {
    const result = await UserInTeam.create({ email: email, id_team: id_team });
    return res.status(200).send({ status: "success" });
  } catch (err) {
    return res.status(501).send(err);
  }
});

export const addSomeOneToTeam = {
  router,
};
