import { Router } from "express";
import { Team } from "../../../../database/Schema/teams";
import { createMethodForDispatch } from "../../../validators";

import { methodContentTeam } from "../../../validators/utils/methodContent";
const router = Router();

router.use("/teams", async (req, res, next): Promise<void> => {
  createMethodForDispatch(req, res, next, methodContentTeam);
});
router.get("/teams", async (req, res) => {
  const id = req.query.id;
  try {
    const result = await Team.findOne({ _id: id });
    return res.status(200).send(result);
  } catch (err) {
    return res.status(501).send(err);
  }
});

export const getTeams = {
  router,
};
