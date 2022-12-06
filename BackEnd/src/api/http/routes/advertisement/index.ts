import { app } from "../../../..";
import { addAdvertisement } from "./addAdvertisement";
import { getAdvertisement } from "./getAdvertisement";
import { getAdvertisementTeam } from "./getAdvertisementTeam";
import { getAllAdvertisement } from "./getAllAdvertisement";
import { modAdvertisement } from "./modAdvertisement";
import { removeAdvertisement } from "./removeAdvertisement";

const advertisementRoutes = (): void => {
  app.use("/api", addAdvertisement.router);
  app.use("/api", removeAdvertisement.router);
  app.use("/api", modAdvertisement.router);
  app.use("/api", getAdvertisement.router);
  app.use("/api", getAllAdvertisement.router);
  app.use("/api", getAdvertisementTeam.router);
};

export const advertisementInterface = { advertisementRoutes };
