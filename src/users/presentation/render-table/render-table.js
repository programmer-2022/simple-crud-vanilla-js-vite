import usersStore from "../../store/users-store";
import "./render-table.css";

let table;

const createTable = () => {};

/**
 *
 * @param {HTMLDivElement} element
 */
export const renderTable = (element) => {
  const users = usersStore.getUsers();
};
