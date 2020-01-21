import { IUser } from '../interfaces/iuser';
import { userFsResource } from '../resources/user.resources/user.fs.resource';

const userResourse = userFsResource;

async function getAllUsers() {
  const users = await userResourse.getAllUsers();
  return users;
}

async function getUserById(id: string): Promise<IUser> {
  const user = await userResourse.getUserById(id);
  return user;
}

export const userService = {
  getAllUsers,
  getUserById,
};
