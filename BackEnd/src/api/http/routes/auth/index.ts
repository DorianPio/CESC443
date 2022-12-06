import { app } from "../../../..";
import { login } from "./login";
import { register } from "./register";

const authRoutes = (): void => {
  app.use("/api", register.router);
  app.use("/api", login.router);
};

export const authInterface = { authRoutes };
