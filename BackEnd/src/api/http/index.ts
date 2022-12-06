import { serviceInterfaces } from "./routes";

export const apiRoutes = (): void => {
  serviceInterfaces.authInterface.authRoutes();
  serviceInterfaces.userInterface.userRoutes();
  serviceInterfaces.teamInterface.teamRoutes();
  serviceInterfaces.advertisementInterface.advertisementRoutes();
  serviceInterfaces.VirtualInterface.VirtualRoutes();
  serviceInterfaces.PropertiesInterface.PropertiesRoutes();
};
