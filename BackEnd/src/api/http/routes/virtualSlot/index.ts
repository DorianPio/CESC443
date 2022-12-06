import { app } from "../../../..";
import { addVirtualSlot } from "./addVirtual";
import { getAllVirtual } from "./getAllVirtual";
import { getVirtual } from "./getVirtual";
import { getVirtualTeam } from "./getVirtualTeam";
import { modVirtual } from "./modVirtual";
import { removeVirtual } from "./removeVirtual";

const VirtualRoutes = (): void => {
  app.use("/api", addVirtualSlot.router);
  app.use("/api", removeVirtual.router);
  app.use("/api", modVirtual.router);
  app.use("/api", getVirtual.router);
  app.use("/api", getAllVirtual.router);
  app.use("/api", getVirtualTeam.router);
};

export const VirtualInterface = { VirtualRoutes };
