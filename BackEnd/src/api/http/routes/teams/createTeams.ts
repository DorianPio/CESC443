import { Router } from "express";
import { Team } from "../../../../database/Schema/teams";
import { UserInTeam } from "../../../../database/Schema/userInTeam";
import { User } from "../../../../database/Schema/users";
import { createMethodForDispatch } from "../../../validators";

import { getEmailByToken } from "../../../validators/utils/getEmailByToken";
import { methodContentTeam } from "../../../validators/utils/methodContent";
const router = Router();

router.use("/team", async (req, res, next): Promise<void> => {
  createMethodForDispatch(req, res, next, methodContentTeam);
});
router.post("/team", async (req, res) => {
  const email = await getEmailByToken(req.get("Authorization"));
  const { name, type } = req.body;

  if (type !== "advertiser" && type !== "developper") {
    return res
      .status(200)
      .send({ typeError: "It can be advertiser or developper" });
  }
  try {
    const result = await Team.create({ name: name, admin: email, type: type });
    await UserInTeam.create({ email: email, id_team: result._id });
    return res.status(200).send({ status: "success" });
  } catch (err) {
    return res.status(501).send(err);
  }
});

export const createTeam = {
  router,
};
