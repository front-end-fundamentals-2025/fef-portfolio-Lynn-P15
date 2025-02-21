const darkModeButton = document.getElementById("dark-mode-button");
const lightModeButton = document.getElementById("light-mode-button");

const bodyElement = document.querySelector("body");

darkModeButton.addEventListener("click", function (event) {
  bodyElement.style.backgroundColor = "#000000";
  bodyElement.style.color = "#ffffff";
});
lightModeButton.addEventListener("click", function (event) {
  bodyElement.style.backgroundColor = "#ffffff";
  bodyElement.style.color = "#000000";
});
