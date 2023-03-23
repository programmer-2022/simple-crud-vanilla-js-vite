import { User } from "../models/user-model";

/**
 *
 * @param {Like<User>} localHostUser
 * @returns User
 */
export const localHostUserToModel = (localHostUser) => {
  const { id, email, isActive, first_name, last_name, gender } = localHostUser;

  return new User({
    id,
    email,
    isActive,
    firstName: first_name,
    lastName: last_name,
    gender,
  });
};
