import "./render-add-button.css";

/**
 *
 * @param { HtmlDivElement } element
 */
export const renderAddButton = (element) => {
  const fabButton = document.createElement("button");
  fabButton.innerText = "+";
  fabButton.classList.add("fab-button");

  element.append(fabButton);
  fabButton.addEventListener("click", () => {
    // TODO Implementar funcion modal
    console.log("Abriendo Modal");
  });
};
