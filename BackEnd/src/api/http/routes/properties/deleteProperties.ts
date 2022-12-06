import { Router } from "express";
import { Advertisement } from "../../../../database/Schema/announce";
import { Properties } from "../../../../database/Schema/property";
import { VirtualSlot } from "../../../../database/Schema/slot";
import { createMethodForDispatch } from "../../../validators";

import { methodContentProperties } from "../../../validators/utils/methodContent";
const router = Router();

router.use("/properties", async (req, res, next): Promise<void> => {
  createMethodForDispatch(req, res, next, methodContentProperties);
});
router.delete("/properties", async (req, res) => {
  const { id, role } = req.body;
  try {
    const result = await Properties.deleteOne({ id_thing: id });

    console.log(role);
    if (role === "advertiser") {
      await VirtualSlot.findOneAndUpdate({ _id: id }, { free: true });
    } else if (role === "developper") {
      await Advertisement.findOneAndUpdate({ _id: id }, { free: true });
    }
    return res.status(200).send(result);
  } catch (err) {
    return res.status(501).send(err);
  }
});

export const deleteProperties = {
  router,
};
