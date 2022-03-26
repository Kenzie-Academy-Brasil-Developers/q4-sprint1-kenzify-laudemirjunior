import { data } from "./../services/index";
import jwt from "jsonwebtoken";
import { Response, NextFunction } from "express";
import { config } from "../configs";

export const verifyAuthenticatedUserMiddleware = (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers.authorization) {
    return res.status(400).json({ message: "missing header authorization." });
  }

  const token = req.headers.authorization.split(" ")[1];

  jwt.verify(token, config.secret, (err: any, decoded: any) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    const userAuthenticated = data.find(
      (usr) => usr.username === decoded.username
    );

    req.userAuthenticated = userAuthenticated;
  });
  return next();
};
