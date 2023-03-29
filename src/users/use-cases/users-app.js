import usersStore from "../store/users-store";
import { renderTable } from "../presentation/render-table/render-table";
import { renderButtons } from "../presentation/render-buttons/render-buttons";
import { renderAddButton } from "../presentation/render-add-button/render-add-button";
import { renderModal } from "../presentation/render-modal/render-modal";
import { saveUser } from "./save-user";
import { showAlert } from "../../utils/notifications/notification";
import { hasUser } from "../helpers/user-helper";

/**
 *
 * @param {HTMLDivElement} element
 */
export const UsersApp = async (element) => {
  await usersStore.loadNextPage();
  renderTable(element);
  renderButtons(element);
  renderAddButton(element);
  renderModal(element, async (userLike) => {
    const user = await saveUser(userLike);
    if(user) {
      showAlert(user(user));
      renderTable();
    } 
    //usersStore.onUserChanged(user);
  });
};
