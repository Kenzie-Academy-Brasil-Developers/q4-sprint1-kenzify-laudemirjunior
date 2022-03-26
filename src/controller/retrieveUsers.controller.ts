import { data } from "./../services/index";
import { Request, Response } from "express";

export const retrieveUsersController = (_: Request, res: Response) => {
  const usersWithoutPassword: any = [];

  data.forEach((user) => {
    const { password, ...userWithoutPassword } = user;
    usersWithoutPassword.push(userWithoutPassword);
  });

  return res.status(200).json(usersWithoutPassword);
};
