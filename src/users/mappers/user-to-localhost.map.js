import { User } from "../models/user-model";

/**
 *
 * @param { User } user
 */
export const userModelToLocalhost = async (user) => {
  const { id, email, isActive, firstName, lastName, gender } = user;
  return {
    id,
    email,
    isActive: isActive === "on" ? true : false,
    first_name: firstName,
    last_name: lastName,
    gender,
  };
};
