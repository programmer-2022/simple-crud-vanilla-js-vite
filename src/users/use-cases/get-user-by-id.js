import { localHostUserToModel } from "../mappers/localhost-user.map";
import { User } from "../models/user-model";

/**
 *
 * @param {String|Number} id
 * @returns { Promise<User>}
 */
export const getUserById = async (id) => {
  const url = `${import.meta.env.VITE_SERVER_BASE_URL}/users/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  const users = localHostUserToModel(data);
  return users;
};
