import Swal from "sweetalert2";

const TITLE_MSG = {
  ERROR: "Error message",
  SUCCESS: "Success message",
};

const ICONS = {
  ERROR: "error",
  SUCCESS: "success",
};

const showAlert = (params) => {
  const { title, text, icon } = params;
  Swal.fire({
    title,
    text,
    icon,
    showConfirmButton: false,
    timer: 1500,
  });
};

export { TITLE_MSG, ICONS, showAlert };
