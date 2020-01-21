import { NextFunction, Request, Response } from 'express';

import { userService } from '../services/user.service';

async function getAllUsers(req: Request, res: Response, next: NextFunction) {
  try {
    const users = await userService.getAllUsers();
    res.json({ users });
  } catch (err) {
    next(err);
  }
}

export const userController = {
  getAllUsers,
};
