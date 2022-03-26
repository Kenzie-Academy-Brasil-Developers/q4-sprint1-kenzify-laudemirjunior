import bcrypt from "bcryptjs";
import { v4 } from "uuid";
import { data } from "./../services/index";
import { Request, Response } from "express";
import { userType } from "../types/user.type";

export const createUserController = async (req: Request, res: Response) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const user: userType = {
    id: v4(),
    ...req.body,
    password: hashedPassword,
    playlist: {},
  };

  const userWithoutPassword: any = JSON.parse(JSON.stringify(user));

  delete userWithoutPassword.password;

  data.push(user);

  return res.status(201).json(userWithoutPassword);
};
