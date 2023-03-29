import { User } from "../models/user-model";

/**
 *
 * @param { User } user
 * @returns void
 */
export const validationUserForm = (user) => {
  const { firstName, lastName, email, gender, isActive } = user;
  let errorMsg = {};

  if (!firstName) errorMsg["FirstName"] = "Firstname";
  if (!lastName) errorMsg["LastName"] = "Lastname";
  if (!email) errorMsg["Email"] = "Email";
  if (!gender) errorMsg["Gender"] = "Gender";
  if (!isActive) errorMsg["isActive"] = "Active";

  const msg = Object.values(errorMsg);
  if (msg.length) {
    const errorFields = msg
      .join(", ")
      .concat(` ${msg.length > 1 ? "are" : "is"} [REQUIRED]`);
    return {
      status: "error",
      message: errorFields,
    };
  }
  return {
    status: "success",
  };
};
