import { Router } from "express";
import { UserInTeam } from "../../../../database/Schema/userInTeam";
import { checkAdminTeam } from "../../../middlewares/teams/checkAdminTeam";
import { createMethodForDispatch } from "../../../validators";

import { methodContentUserInTeam } from "../../../validators/utils/methodContent";
const router = Router();

router.use("/team", async (req, res, next): Promise<void> => {
  createMethodForDispatch(req, res, next, methodContentUserInTeam);
  checkAdminTeam(req, res, next);
});
router.delete("/team", async (req, res) => {
  const { email, id_team } = req.body;
  try {
    const result = await UserInTeam.deleteMany({
      email: email,
      id_team: id_team,
    });
    return res.status(200).send({ status: "success" });
  } catch (err) {
    return res.status(501).send(err);
  }
});

export const deleteSomeOneToTeam = {
  router,
};
