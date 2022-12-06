import { Router } from "express";
import { UserInTeam } from "../../../../database/Schema/userInTeam";
import { checkAdminTeam } from "../../../middlewares/teams/checkAdminTeam";
import { createMethodForDispatch } from "../../../validators";

import { methodContentUserInTeam } from "../../../validators/utils/methodContent";
const router = Router();

router.use("/team", async (req, res, next): Promise<void> => {
  // createMethodForDispatch(req, res, next, methodContentUserInTeam);
  next();
});
router.get("/team", async (req, res) => {
  const id_team = req.query.id_team;
  try {
    const result = await UserInTeam.find({
      id_team: id_team,
    });
    return res.status(200).send(result);
  } catch (err) {
    return res.status(501).send(err);
  }
});

export const getTeamsMember = {
  router,
};
