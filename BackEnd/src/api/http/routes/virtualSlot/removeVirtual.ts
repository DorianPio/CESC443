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
router.delete("/virtual", async (req, res) => {
  const { id } = req.body;
  try {
    const result = await VirtualSlot.deleteOne({
      _id: id,
    });
    return res.status(200).send(result);
  } catch (err) {
    return res.status(501).send(err);
  }
});

export const removeVirtual = {
  router,
};
