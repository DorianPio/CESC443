import { app } from "../../../..";
import { getStats } from "./getStats";

const StatsRoutes = (): void => {
  app.use("/api", getStats.router);
};

export const StatsInterface = {
  StatsRoutes,
};
