import { Router } from "express";
import { Advertisement } from "../../../../database/Schema/announce";
import { VirtualSlot } from "../../../../database/Schema/slot";
import { createMethodForDispatch } from "../../../validators";

import { methodContentStats } from "../../../validators/utils/methodContent";
const router = Router();

router.use("/stats", async (req, res, next): Promise<void> => {
  createMethodForDispatch(req, res, next, methodContentStats);
});
router.get("/stats", async (req, res) => {
  const id = req.query.id;
  const type = req.query.type;
  try {
    if (type === "advertiser") {
      const result = await VirtualSlot.findOne({ _id: id });
      return res.status(200).send(result);
    } else if (type === "developper") {
      const result = await Advertisement.findOne({ _id: id });
      return res.status(200).send(result);
    } else {
      return res.status(404).send({ error: "Type error" });
    }
  } catch (err) {
    return res.status(501).send(err);
  }
});

export const getStats = {
  router,
};
