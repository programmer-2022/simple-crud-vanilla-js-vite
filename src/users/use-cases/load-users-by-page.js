import { localHostUserToModel } from "../mappers/localhost-user.map";
import { User } from "../models/user-model";
/**
 *
 * @param {Number} page
 * @returns { Promise<User[]>}
 */
export const loadUsersByPage = async (page = 1) => {
  const url = `${import.meta.env.VITE_SERVER_BASE_URL}/users?_page=${page}`;
  const res = await fetch(url);
  const data = await res.json();
  const users = data.map(localHostUserToModel);
  return users;
};
