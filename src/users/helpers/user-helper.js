import { User } from "../models/user-model";
import { TITLE_MSG, ICONS } from "../../utils/notifications/notification";
import { validationUserForm } from "../use-cases/validation-user-form";

export const USER_NOTIFICATION = {
  SAVE_SUCCESS: "User saved successfully",
  FAILED_TO_SAVE: "Error saving a user",
};

/**
 *
 * @param { User } user
 */
export const hasUser = (user) => {
  if (user) {
    return {
      title: TITLE_MSG.SUCCESS,
      text: USER_NOTIFICATION.SAVE_SUCCESS,
      icon: ICONS.SUCCESS,
    };
  }
};

/**
 *
 * @param { User } user
 */
export const userFormAlerts = (user) => {
  let text = validationUserForm(user);
  return {
    title: TITLE_MSG.ERROR,
    text,
    icon: ICONS.ERROR,
  };
};
