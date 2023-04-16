/**
 * @param { String|Number } id
 */
export const deleteUserById = async (id) => {
  const url = `${import.meta.env.VITE_SERVER_BASE_URL}/users/${user.id}`;
  const res = await fetch(url, {
    method: "DELETE",
  });
  const deleteResult = await res.json();
  return true;
};
