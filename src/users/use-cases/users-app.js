import usersStore from "../store/users-store";
import { renderTable } from "../presentation/render-table/render-table";
import { renderButtons } from "../presentation/render-buttons/render-buttons";
import { renderAddButton } from "../presentation/render-add-button/render-add-button";
import { renderModal } from "../presentation/render-modal/render-modal";

/**
 *
 * @param {HTMLDivElement} element
 */
export const UsersApp = async (element) => {
  await usersStore.loadNextPage();
  renderTable(element);
  renderButtons(element);
  renderAddButton(element);
  renderModal(element);
};
