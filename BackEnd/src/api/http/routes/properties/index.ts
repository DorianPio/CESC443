import { app } from "../../../..";
import { deleteProperties } from "./deleteProperties";
import { getProperties } from "./getProperties";
import { getProperty } from "./getProperty";

const PropertiesRoutes = (): void => {
  app.use("/api", getProperties.router);
  app.use("/api", getProperty.router);
  app.use("/api", deleteProperties.router);
};

export const PropertiesInterface = {
  PropertiesRoutes,
};
