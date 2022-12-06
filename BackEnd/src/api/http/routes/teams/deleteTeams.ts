import { Router } from "express";
import { Team } from "../../../../database/Schema/teams";
import { User } from "../../../../database/Schema/users";
import { checkAdminTeam } from "../../../middlewares/teams/checkAdminTeam";
import { createMethodForDispatch } from "../../../validators";

import { getEmailByToken } from "../../../validators/utils/getEmailByToken";
import { methodContentTeam } from "../../../validators/utils/methodContent";
const router = Router();

router.use("/team", async (req, res, next): Promise<void> => {
  createMethodForDispatch(req, res, next, methodContentTeam);
  checkAdminTeam(req, res, next);
});
router.delete("/team", async (req, res) => {
  const id = req.query.id;

  try {
    const result = await Team.deleteOne({ _id: id });
    return res.status(200).send({ status: "success" });
  } catch (err) {
    return res.status(501).send(err);
  }
});

export const deleteTeam = {
  router,
};
