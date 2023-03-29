import modalHTML from "./render-modal.html?raw";
import "./render-modal.css";
import { User } from "../../models/user-model";
import { getUserById } from "../../use-cases/get-user-by-id";

let modal, form;
let loadedUser = {};
/**
 * @param { String | number } id
 */
export const showModal = async (id) => {
  modal?.classList.remove("hide-modal");
  loadedUser = {};
  if (!id) return;
  const user = await getUserById(id);
  setFormValues(user);
};

export const hideModal = () => {
  modal?.classList.add("hide-modal");
  form?.reset();
};

/**
 *
 * @param { User } user
 */
const setFormValues = (user) => {
  form.querySelector('[name="firstName"]').value = user.firstName;
  form.querySelector('[name="lastName"]').value = user.lastName;
  form.querySelector('[name="email"]').value = user.email;
  form.querySelector('[name="isActive"]').checked = user.isActive;
  form.querySelector('[name="gender"]').value = user.gender;
  loadedUser = user;
};

/**
 *
 * @param { User } user
 */
const fnName = (user) => {};

/**
 *
 * @param { HTMLDivElement } element
 * @param { (userLike) => Promise<void> } callback
 */
export const renderModal = (element, callback) => {
  if (modal) return;

  modal = document.createElement("div");
  modal.innerHTML = modalHTML;
  modal.className = "modal-container hide-modal";

  form = modal.querySelector("form");

  modal.addEventListener("click", (event) => {
    if (event.target.className === "modal-container") {
      hideModal();
    }
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const userLike = { ...loadedUser };

    for (const [key, value] of formData) {
      if (key === "isActive") {
        userLike[key] = value === "on" ? true : false;
      }
      userLike[key] = value;
    }

    await callback(userLike);
    hideModal();
  });

  element.append(modal);
};
