import { Router } from "express";
import { Advertisement } from "../../../../database/Schema/announce";
import { VirtualSlot } from "../../../../database/Schema/slot";

const router = Router();

router.use("/virtuals", async (req, res, next): Promise<void> => {
  next();
});

router.get("/virtuals", async (req, res) => {
  try {
    const result = await VirtualSlot.find({ free: true });
    return res.status(200).send(result);
  } catch (err) {
    return res.status(501).send(err);
  }
});

export const getAllVirtual = {
  router,
};
