import { Router } from "express";
import { Advertisement } from "../../../../database/Schema/announce";

const router = Router();

router.use("/advertisements", async (req, res, next): Promise<void> => {
  next();
});

router.get("/advertisements", async (req, res) => {
  try {
    const result = await Advertisement.find({ free: true });
    return res.status(200).send(result);
  } catch (err) {
    return res.status(501).send(err);
  }
});

export const getAllAdvertisement = {
  router,
};
