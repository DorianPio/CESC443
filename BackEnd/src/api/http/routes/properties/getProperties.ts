import { Router } from "express";
import { Properties } from "../../../../database/Schema/property";
import { createMethodForDispatch } from "../../../validators";

import { methodContentProperties } from "../../../validators/utils/methodContent";
const router = Router();

router.use("/properties", async (req, res, next): Promise<void> => {
  createMethodForDispatch(req, res, next, methodContentProperties);
});
router.get("/properties", async (req, res) => {
  const id = req.query.id;
  try {
    const result = await Properties.find({ id_team: id });
    return res.status(200).send(result);
  } catch (err) {
    return res.status(501).send(err);
  }
});

export const getProperties = {
  router,
};
