import usersStore from "../store/users-store";
import { renderTable } from "../presentation/render-table/render-table";
import { renderButtons } from "../presentation/render-buttons/render-buttons";
import { renderAddButton } from "../presentation/render-add-button/render-add-button";
import { renderModal } from "../presentation/render-modal/render-modal";
import { saveUser } from "./save-user";
import {
  showAlert,
  TITLE_MSG,
  ICONS,
} from "../../utils/notifications/notification";
import { USER_NOTIFICATION } from "../helpers/user-helper";

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
    usersStore.onUserChanged(user);

    if (user) {
      showAlert({
        title: TITLE_MSG.SUCCESS,
        text: USER_NOTIFICATION.SAVE_SUCCESS,
        icon: ICONS.SUCCESS,
      });
    }
    renderTable();
  });
};
