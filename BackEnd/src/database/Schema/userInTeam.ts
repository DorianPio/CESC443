import { Model, Schema, model } from "mongoose";

interface IUserInTeam {
  email: String;
  id_team: Schema.Types.ObjectId;
}

interface IUserInTeamMethods {}

type UserInTeamModel = Model<IUserInTeam, {}, IUserInTeamMethods>;

const schema = new Schema<IUserInTeam, UserInTeamModel, IUserInTeamMethods>({
  email: { type: String, required: true },
  id_team: { type: Schema.Types.ObjectId, required: true },
});

export const UserInTeam = model<IUserInTeam, UserInTeamModel>(
  "UserInTeam",
  schema
);
