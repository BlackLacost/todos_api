import { IUser } from '../interfaces/iuser';
import { userFsResource } from '../resources/user.resources/user.fs.resource';

const userResourse = userFsResource;

// TODO Вернуть только имя (firstname + lastname) и id
async function getAllUsers(): Promise<object> {
  const users = await userResourse.getAllUsers();
  return { users };
}

// TODO Вернуть только имя (firstname + lastname) и id
async function getUserById(id: string): Promise<object> {
  const user = await userResourse.getUserById(id);
  return { user };
}

async function getUserInfo(id: string): Promise<object> {
  const user = await userResourse.getUserById(id);
  const userInfo = {
    age: user.age,
    company: user.company,
    email: user.email,
    id: user.id,
    name: `${user.name.first} ${user.name.last}`,
  };
  return { user: userInfo };
}

export const userService = {
  getAllUsers,
  getUserById,
  getUserInfo,
};
