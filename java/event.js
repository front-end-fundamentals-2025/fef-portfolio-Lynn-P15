const darkModeButton = document.getElementById("dark-mode-button");
const lightModeButton = document.getElementById("light-mode-button");

const bodyElement = document.querySelector("body");

if (localStorage.bColour) {
  bodyElement.style.backgroundColor = localStorage.bColour;
} else {
  bodyElement.style.backgroundColor = "#000000";
}
if (localStorage.tColour) {
  bodyElement.style.color = localStorage.tColour;
} else {
  bodyElement.style.color = "#ffffff";
}

darkModeButton.addEventListener("click", function (event) {
  let bColour = "#000000";
  let tColour = "#ffffff";
  bodyElement.style.backgroundColor = bColour;
  bodyElement.style.color = tColour;
  localStorage.bColour = bColour;
  localStorage.tColour = tColour;
});
lightModeButton.addEventListener("click", function (event) {
  let bColour = "#ffffff";
  let tColour = "#000000";
  bodyElement.style.backgroundColor = bColour;
  bodyElement.style.color = tColour;
  localStorage.bColour = bColour;
  localStorage.tColour = tColour;
});
