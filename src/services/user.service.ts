import { userFsResource } from '../resources/user.resources/user.fs.resource';

const userResourse = userFsResource;
async function getAllUsers() {
  const users = await userResourse.getAllUsers();
  return users;
}

export const userService = {
  getAllUsers,
};
