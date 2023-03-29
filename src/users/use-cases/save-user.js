import { User } from "../models/user-model";
import { userModelToLocalhost } from "../mappers/user-to-localhost.map";
import { localHostUserToModel } from "../mappers/localhost-user.map";
import { validationUserForm } from "./validation-user-form";
import {
  TITLE_MSG,
  ICONS,
  showAlert,
} from "../../utils/notifications/notification";

/**
 *
 * @param { Like<User> } userLike
 */
export const saveUser = async (userLike) => {
  const user = new User(userLike);
  const validation = validationUserForm(user);
  if (validation.status === "error") {
    showAlert({
      title: TITLE_MSG.ERROR,
      text: validation.message,
      icon: ICONS.ERROR,
      timer: 2500,
    });
    return;
  }

  const userToSave = await userModelToLocalhost(user);
  let userUpdated;

  if (user.id) {
    userUpdated = await updateUser(userToSave);
  } else {
    userUpdated = await createUser(userToSave);
  }
  return localHostUserToModel(userUpdated);
};

/**
 * @param { Like<User> } user
 */
const createUser = async (user) => {
  const url = `${import.meta.env.VITE_SERVER_BASE_URL}/users`;
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json" },
  });
  const newUser = await res.json();
  return newUser;
};

/**
 * @param { Like<User> } user
 */
const updateUser = async (user) => {
  const url = `${import.meta.env.VITE_SERVER_BASE_URL}/users/${user.id}`;
  const res = await fetch(url, {
    method: "PATCH",
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json" },
  });
  const updatedUser = await res.json();
  return updatedUser;
};
