import { Router } from "express";
import { Advertisement } from "../../../../database/Schema/announce";
import { VirtualSlot } from "../../../../database/Schema/slot";
import { createMethodForDispatch } from "../../../validators";

import { methodContentAdvertisement } from "../../../validators/utils/methodContent";
const router = Router();

router.use("/virtual", async (req, res, next): Promise<void> => {
  createMethodForDispatch(req, res, next, methodContentAdvertisement);
});
router.get("/virtual", async (req, res) => {
  const id = req.query.id;
  try {
    const result = await VirtualSlot.findOneAndUpdate(
      { _id: id },
      { $inc: { stats: 1 } },
      { new: true }
    );
    return res.status(200).send(result);
  } catch (err) {
    return res.status(501).send(err);
  }
});

export const getVirtual = {
  router,
};
