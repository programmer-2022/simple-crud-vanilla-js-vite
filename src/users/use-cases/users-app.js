import usersStore from "../store/users-store";
import { renderTable } from "../presentation/render-table/render-table";
import { renderButtons } from "../presentation/render-buttons/render-buttons";

/**
 *
 * @param {HTMLDivElement} element
 */
export const UsersApp = async (element) => {
  await usersStore.loadNextPage();
  renderTable(element);
  renderButtons(element);
};
