import { app } from "../../../..";
import { addSomeOneToTeam } from "./addSomeOneToTeam";
import { createTeam } from "./createTeams";
import { deleteSomeOneToTeam } from "./deleteSomeOneToTeam";
import { deleteTeam } from "./deleteTeams";
import { getTeams } from "./getTeams";
import { getTeamsMember } from "./getTeamsMembers";
import { promoteSomeOneInTeam } from "./promoteInTeam";

const teamRoutes = (): void => {
  app.use("/api", deleteTeam.router);
  app.use("/api", createTeam.router);
  app.use("/api", getTeams.router);
  app.use("/api/manage", addSomeOneToTeam.router);
  app.use("/api/manage", deleteSomeOneToTeam.router);
  app.use("/api/manage", promoteSomeOneInTeam.router);
  app.use("/api/manage", getTeamsMember.router);
};

export const teamInterface = { teamRoutes };
