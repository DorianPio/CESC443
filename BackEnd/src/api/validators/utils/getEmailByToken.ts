const jwt = require("jsonwebtoken");

export const getEmailByToken = async (token: string) => {
  try {
    const verified = await jwt.verify(token, process.env.JWT_SECRET);
    return verified.email;
  } catch (err) {
    return undefined;
  }
};
