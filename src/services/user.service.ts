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

async function getUserInfo(id: string) {
  const user = await userResourse.getUserById(id);
  const userInfo = {
    age: user.age,
    company: user.company,
    email: user.email,
    id: user.id,
    name: `${user.name.first} ${user.name.last}`,
  };
  return userInfo;
}

export const userService = {
  getAllUsers,
  getUserById,
  getUserInfo,
};
