import { Router } from "express";
import { Advertisement } from "../../../../database/Schema/announce";
import { createMethodForDispatch } from "../../../validators";
import { checkAdminTeam } from "../../../middlewares/teams/checkAdminTeam";

import { methodContentAdvertisement } from "../../../validators/utils/methodContent";
import { VirtualSlot } from "../../../../database/Schema/slot";
import { Properties } from "../../../../database/Schema/property";
const router = Router();

router.use("/virtual", async (req, res, next): Promise<void> => {
  createMethodForDispatch(req, res, next, methodContentAdvertisement);
  checkAdminTeam(req, res, next);
});
router.patch("/virtual", async (req, res) => {
  const { free, id, id_team, name } = req.body;
  try {
    const result = await VirtualSlot.findOneAndUpdate(
      { _id: id },
      {
        free: free,
      },
      { new: true }
    );

    await Properties.create({
      name: name,
      id_team: id_team,
      id_thing: id,
      picture_Url: result.picture_Url,
      description: result.description,
    });
    return res.status(200).send(result);
  } catch (err) {
    return res.status(501).send(err);
  }
});

export const modVirtual = {
  router,
};
