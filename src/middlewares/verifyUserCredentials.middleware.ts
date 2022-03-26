import { data } from "../services/index";
import { NextFunction, Request, Response } from "express";

export const verifyUserCredentials = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { password, username } = req.body;

  const user = data.find((item) => item.username === username);

  if (!user || user.password !== password) {
    return res.status(401).json({ message: "wrong credentials" });
  }

  return next();
};
