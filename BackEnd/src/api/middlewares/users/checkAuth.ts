import { freeStrictPath, freeIncludedPath } from "./paths";
const jwt = require("jsonwebtoken");

const checkBasingPath = async (pathOfTheRoute: string): Promise<boolean> => {
  for (const path in freeStrictPath) {
    if (pathOfTheRoute === freeStrictPath[path]) {
      return true;
    }
  }
  for (const path of freeIncludedPath) {
    if (path.includes(freeIncludedPath[path])) {
      return true;
    }
  }
  return false;
};

export const userAuthorization = async (req, res, next) => {
  if (req.path.includes("/api-docs/")) {
    next();
  }
  const tested = await checkBasingPath(req.path).then((response) => {
    if (response === true) {
      next();
    } else {
      const authorization = req.get("Authorization");
      try {
        const verified = jwt.verify(authorization, process.env.JWT_SECRET);
        if (verified) {
          next();
        } else {
          return res.status(511).send({ error: "Token empty or invalid" });
        }
      } catch (e: any) {
        return res.status(511).send({ error: "Token empty or invalid" });
      }
    }
  });
};
