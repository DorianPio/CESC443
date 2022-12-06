import { Router } from "express";
import { Advertisement } from "../../../../database/Schema/announce";
import { createMethodForDispatch } from "../../../validators";
import { checkAdminTeam } from "../../../middlewares/teams/checkAdminTeam";

import { methodContentAdvertisement } from "../../../validators/utils/methodContent";
import { VirtualSlot } from "../../../../database/Schema/slot";
const router = Router();

router.use("/virtual", async (req, res, next): Promise<void> => {
  createMethodForDispatch(req, res, next, methodContentAdvertisement);
  checkAdminTeam(req, res, next);
});
router.post("/virtual", async (req, res) => {
  const { picture_Url, name, description, team_id, type } = req.body;
  try {
    const result = await VirtualSlot.create({
      name: name,
      description: description,
      picture_Url: picture_Url,
      team_id: team_id,
      type: type,
    });
    return res.status(200).send(result);
  } catch (err) {
    return res.status(501).send(err);
  }
});

export const addVirtualSlot = {
  router,
};
