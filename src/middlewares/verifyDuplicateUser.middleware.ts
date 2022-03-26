import { data } from "./../services/index";
import { NextFunction, Request, Response } from "express";
import { userType } from "../types/user.type";

export const verifyDuplicateUserMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username } = req.body;
  const user = data.find((item: userType) => item.username === username);

  if (user) {
    return res.status(422).json({ message: "You can not use this username." });
  }

  return next();
};
