import { User } from "../../../database/Schema/users";
import { getEmailByToken } from "../../validators/utils/getEmailByToken";

export const userPermissions = async (req, res, next) => {
  const email = await getEmailByToken(req.get("Authorization"));
  try {
    const result = await User.findOne({ email: email }, { _id: 0, role: 1 });
    if (result.role === "admin") {
      return next();
    } else {
      return res.status(403).send({ error: "Invalid permissions" });
    }
  } catch (err) {
    return res.status(501).send(err);
  }
};

export const userPermissionsMethod = async (req) => {
  const email = await getEmailByToken(req.get("Authorization"));
  try {
    const result = await User.findOne({ email: email }, { _id: 0, role: 1 });
    if (result.role === "admin") {
      return "allow";
    } else {
      return { error: "Invalid permissions" };
    }
  } catch (err) {
    return err;
  }
};
