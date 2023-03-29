import usersStore from "../../store/users-store";
import { showModal } from "../render-modal/render-modal";
import "./render-table.css";

let table;

/**
 *
 * @returns { HtmlTable }
 */
const createTable = () => {
  const table = document.createElement("table");
  const tableHeaders = document.createElement("thead");
  tableHeaders.innerHTML = `
    <tr>
      <th>ID</th>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Email</th>
      <th>Gender</th>
      <th>Active</th>
      <th>Actions</th>
    </tr>  
  `;

  const tableBody = document.createElement("tbody");
  table.append(tableHeaders, tableBody);
  return table;
};

/**
 *
 * @param { MouseEvent } event
 */
const tableSelectListeners = (event) => {
  const element = event.target.closest(".select-user");
  if (!element) return;
  const id = element.getAttribute("data-id");
  showModal(id);
};

/**
 *
 * @param { HTMLDivElement } element
 */
export const renderTable = (element) => {
  const users = usersStore.getUsers();

  if (!table) {
    table = createTable();
    element.append(table);

    table.addEventListener("click", tableSelectListeners);
  }
  let tableHTML = "";
  users.forEach((user) => {
    tableHTML += `
      <tr>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        <td>${user.gender}</td>
        <td>${user.isActive ? "Activo" : "Inactivo"}</td>
        <td>
          <a href="#/" class="select-user" data-id=${user.id}>Select</a>
          |
          <a href="#/" class="delete-user" data-id=${
            user.id
          }>Delete</a>          
        </td>
      </tr> 
    `;
  });

  table.querySelector("tbody").innerHTML = tableHTML;
};
