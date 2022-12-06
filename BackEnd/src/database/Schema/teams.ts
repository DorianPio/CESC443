import { Model, Schema, model } from "mongoose";

interface ITeam {
  name: String;
  admin: String;
  type: String;
}

interface ITeamMethods {}

type TeamModel = Model<ITeam, {}, ITeamMethods>;

const schema = new Schema<ITeam, TeamModel, ITeamMethods>({
  name: { type: String, required: true },
  admin: { type: String, required: true },
  type: { type: String, required: true },
});

export const Team = model<ITeam, TeamModel>("Team", schema);
