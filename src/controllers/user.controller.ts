import { NextFunction, Request, Response } from 'express';

import { userService } from '../services/user.service';

async function getAllUsers(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await userService.getAllUsers());
  } catch (err) {
    next(err);
  }
}

async function getUserById(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await userService.getUserById(req.params.id));
  } catch (err) {
    next(err);
  }
}

async function getUserInfo(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await userService.getUserInfo(req.params.id));
  } catch (err) {
    next(err);
  }
}

export const userController = {
  getAllUsers,
  getUserById,
  getUserInfo,
};
