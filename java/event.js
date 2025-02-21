const darkModeButton = document.getElementById("dark-mode-button");
const bodyElement = document.querySelector("body");

darkModeButton.addEventListener("click", function (event) {
  bodyElement.style.backgroundColor = "#000000";
  bodyElement.style.color = "#ffffff";
});

// work in progress

// const darkModeButtonWork = document.getElementById("dark-mode-button-work");

// darkModeButtonWork.addEventListener("click", function (event) {
//   bodyElement.style.backgroundColor = "#000000";
//   bodyElement.style.color = "#ffffff";
// });
