import { Router } from "express";
import { Advertisement } from "../../../../database/Schema/announce";
import { createMethodForDispatch } from "../../../validators";

import { methodContentAdvertisement } from "../../../validators/utils/methodContent";
const router = Router();

router.use("/advertisementTeam", async (req, res, next): Promise<void> => {
  createMethodForDispatch(req, res, next, methodContentAdvertisement);
});
router.get("/advertisementTeam", async (req, res) => {
  const id = req.query.id;
  try {
    const result = await Advertisement.find({ team_id: id });
    return res.status(200).send(result);
  } catch (err) {
    return res.status(501).send(err);
  }
});

export const getAdvertisementTeam = {
  router,
};
