import { User } from "../models/user-model";
import {
  TITLE_MSG,
  ICONS,
  showAlert,
} from "../../utils/notifications/notification";

/**
 *
 * @param { User } user
 * @returns void
 */
export const validationUserForm = (user) => {
  const { firstName, lastName, email, gender, isActive } = user;
  let errorMsg = {};

  if (!firstName) errorMsg["FirstName"] = "Firstname is required";
  if (!lastName) errorMsg["LastName"] = "Lastname is required";
  if (!email) errorMsg["Email"] = "Email is required";
  if (!gender) errorMsg["Gender"] = "Gender is required";
  if (!isActive) errorMsg["isActive"] = "Active is required";

  console.table(errorMsg);
  if (Object.values(errorMsg).length) {
    showAlert({
      title: TITLE_MSG.ERROR,
      text: errorMsg,
      icon: ICONS.ERROR,
    });
  }
};
