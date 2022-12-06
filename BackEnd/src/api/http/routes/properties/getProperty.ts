import { Router } from "express";
import { Properties } from "../../../../database/Schema/property";
import { User } from "../../../../database/Schema/users";
import { createMethodForDispatch } from "../../../validators";

import { getEmailByToken } from "../../../validators/utils/getEmailByToken";
const router = Router();

router.use("/property", async (req, res, next): Promise<void> => {
  if (!req.query.id) {
    res.status(400).send({ error: "Invalid id" });
  } else {
    next();
  }
});
router.get("/property", async (req, res) => {
  const id = req.query.id;
  try {
    const result = await Properties.findOne({ _id: id });
    return res.status(200).send(result);
  } catch (err) {
    return res.status(501).send(err);
  }
});

export const getProperty = {
  router,
};
