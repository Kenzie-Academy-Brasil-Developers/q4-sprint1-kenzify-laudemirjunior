import jwt from "jsonwebtoken";
import { data } from "./../services/index";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { config } from "../configs";

export const loginUserController = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = data.find((item) => item.username === username);
  if (!user) {
    return res.status(401).json({ message: "Wrong credentials. Try again!" });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(401).json({ message: "Wrong credentials. Try again!" });
  }

  const token = jwt.sign({ username }, config.secret, {
    expiresIn: config.expiresIn,
  });

  return res.status(200).json({ accessToken: token });
};
