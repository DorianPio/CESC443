import { Team } from "../../../database/Schema/teams";
import { getEmailByToken } from "../../validators/utils/getEmailByToken";

export const checkAdminTeam = async (req, res, next) => {
  // const email = await getEmailByToken(req.get("Authorization"));
  // const id = req.query.id;
  // const adminTeam = await Team.findOne({ _id: id });
  // if (adminTeam.admin !== email) {
  //   return res.status(400).send({ permissionError: "Only admin can do that" });
  // } else {
  //   next();
  // }
};
