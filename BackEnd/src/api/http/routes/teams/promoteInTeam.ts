import { Router } from "express";
import { Team } from "../../../../database/Schema/teams";
import { UserInTeam } from "../../../../database/Schema/userInTeam";
import { checkAdminTeam } from "../../../middlewares/teams/checkAdminTeam";
import { createMethodForDispatch } from "../../../validators";

import { methodContentUserInTeam } from "../../../validators/utils/methodContent";
const router = Router();

router.use("/team", async (req, res, next): Promise<void> => {
  createMethodForDispatch(req, res, next, methodContentUserInTeam);
  checkAdminTeam(req, res, next);
});
router.patch("/team", async (req, res) => {
  const { email, id_team } = req.body;
  try {
    const user = await UserInTeam.findOne({ email: email });
    if (user && user.id_team === id_team) {
      const result = await Team.findOneAndUpdate(
        { _id: id_team },
        { admin: email },
        { new: true }
      );
      return res.status(200).send(result);
    } else {
      return res
        .status(501)
        .send({ error: "User does not exist in this team." });
    }
  } catch (err) {
    return res.status(501).send(err);
  }
});

export const promoteSomeOneInTeam = {
  router,
};
