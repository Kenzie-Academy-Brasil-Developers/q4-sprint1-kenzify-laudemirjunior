import { NextFunction, Request, Response } from "express";

export const verifyRequestUserMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body;

  if (!username) {
    return res.status(400).json({ errors: ["fieldName is a required field"] });
  }

  if (!password) {
    return res.status(400).json({ errors: ["password is a required field"] });
  }

  return next();
};
