import { app } from "../../../..";
import { me } from "./me";

const userRoutes = (): void => {
  app.use("/api", me.router);
};

export const userInterface = { userRoutes };
