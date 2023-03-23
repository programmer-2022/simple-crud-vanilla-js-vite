import usersStore from "../../store/users-store";
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
 * @param { HTMLDivElement } element
 */
export const renderTable = (element) => {
  const users = usersStore.getUsers();

  if (!table) {
    table = createTable();
    element.append(table);
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
        <td>${user.active}</td>
        <td>
          <a href="#/" data-id=${user.id}>Select</a>
          |
          <a href="#/" data-id=${user.id}>Delete</a>          
        </td>
      </tr> 
    `;
  });

  table.querySelector("tbody").innerHTML = tableHTML;

  // TODO table - listeners
};
