import { Request, Response } from "express";
import * as UserService from "./user.service";

export const getUsers = async (req: Request, res: Response) => {
  const users = await UserService.getAllUsers();
  res.status(200).json({ success: true, data: users });
};

export const createUser = async (req: Request, res: Response) => {
  const newUser = await UserService.createUser(req.body);
  res.status(201).json({ success: true, data: newUser });
};
