import { User } from "../models/user-model";
import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
  currentPage: 0,
  users: [],
};

const loadNextPage = async () => {
  const users = await loadUsersByPage(state.currentPage + 1);
  if (users.length === 0) return;
  state.currentPage += 1;
  state.users = users;
};

const loadPreviousPage = async () => {
  if (state.currentPage === 1) return;
  const users = await loadUsersByPage(state.currentPage - 1);

  state.users = users;
  state.currentPage -= 1;
};

/**
 *
 * @param { User } updatedUser
 */
const onUserChanged = async (updatedUser) => {
  let wasFound = false;

  state.users = state.users.map((user) => {
    if (user.id === updatedUser.id) {
      return updatedUser;
    }
    return user;
  });

  if (state.users.length < 10 && !wasFound) {
    state.users.push(updatedUser);
  }
};

// TODO: Implementar
const reloadPage = async () => {
  throw new Error("No implementado");
};

export default {
  loadNextPage,
  loadPreviousPage,
  onUserChanged,
  reloadPage,
  /**
   *
   * @returns { User[] }
   */
  getUsers: () => [...state.users],
  /**
   *
   * @returns { Number }
   */
  getCurrentPage: () => state.currentPage,
};
