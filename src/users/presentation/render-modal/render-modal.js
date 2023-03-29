import modalHTML from "./render-modal.html?raw";
import "./render-modal.css";

let modal, form;

// TODO Cargar usuario por ID
export const showModal = () => {
  modal?.classList.remove("hide-modal");
};

export const hideModal = () => {
  modal?.classList.add("hide-modal");
  form?.reset();
};

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
    const userLike = {};

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
