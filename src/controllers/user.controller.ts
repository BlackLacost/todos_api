import { userService } from '../services/user.service';
import { makeController } from './utils.controller';

export const userController = {
  getAllUsers: makeController(userService.getAllUsers, (req) => req),
  getUserById: makeController(userService.getUserById, (req) => req.params.id),
  getUserInfo: makeController(userService.getUserInfo, (req) => req.params.id),
};
