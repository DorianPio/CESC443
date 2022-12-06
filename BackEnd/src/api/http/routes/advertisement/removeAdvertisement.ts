import { Router } from "express";
import { Advertisement } from "../../../../database/Schema/announce";
import { createMethodForDispatch } from "../../../validators";
import { checkAdminTeam } from "../../../middlewares/teams/checkAdminTeam";

import { methodContentAdvertisement } from "../../../validators/utils/methodContent";
const router = Router();

router.use("/advertisement", async (req, res, next): Promise<void> => {
  createMethodForDispatch(req, res, next, methodContentAdvertisement);
  checkAdminTeam(req, res, next);
});
router.delete("/advertisement", async (req, res) => {
  const { id } = req.body;
  try {
    const result = await Advertisement.deleteOne({
      _id: id,
    });
    return res.status(200).send(result);
  } catch (err) {
    return res.status(501).send(err);
  }
});

export const removeAdvertisement = {
  router,
};
