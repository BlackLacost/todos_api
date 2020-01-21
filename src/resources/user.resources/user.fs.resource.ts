import { config } from '../../config';
import { IUser } from '../../interfaces/iuser';
import { getData } from '../fs.utils';

const usersData = config.FS_DATA_USERS_PATH;

async function getAllUsers(): Promise<IUser[]> {
  const users = (await getData(usersData)) as IUser[];
  return users;
}

async function getUserById(id: string): Promise<IUser> {
  const users = (await getData(usersData)) as IUser[];
  const user = users.find((u) => u.id === id);
  return user;
}

export const userFsResource = {
  getAllUsers,
  getUserById,
};
