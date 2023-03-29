import { User } from "../models/user-model";
import { userModelToLocalhost } from "../mappers/user-to-localhost.map";
import { validationUserForm } from "./validation-user-form";

/**
 *
 * @param { Like<User> } userLike
 */
export const saveUser = async (userLike) => {
  const user = new User(userLike);

  validationUserForm(user); // TODO Validar para que no continue

  // const userToSave = await userModelToLocalhost(user);

  // if (user.id) {
  //   throw "no implementada";
  //   return;
  // }
  // const updateUser = await createUser(userToSave);
  // return updateUser;
};

/**
 * @param { Like<User> } user
 */
const createUser = async (user) => {
  const url = `${import.meta.env.VITE_BASE_URL}/users`;
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json" },
  });
  const newUser = await res.json();
  return newUser;
};
