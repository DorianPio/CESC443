import { Router } from "express";
import { Advertisement } from "../../../../database/Schema/announce";
import { createMethodForDispatch } from "../../../validators";

import { methodContentAdvertisement } from "../../../validators/utils/methodContent";
const router = Router();

router.use("/advertisement", async (req, res, next): Promise<void> => {
  createMethodForDispatch(req, res, next, methodContentAdvertisement);
});
router.get("/advertisement", async (req, res) => {
  const id = req.query.id;
  try {
    const result = await Advertisement.findOneAndUpdate(
      { _id: id },
      { $inc: { stats: 1 } },
      { new: true }
    );
    return res.status(200).send(result);
  } catch (err) {
    return res.status(501).send(err);
  }
});

export const getAdvertisement = {
  router,
};
