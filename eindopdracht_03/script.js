// Variables
let menu = document.querySelector(".fa-bars");
let menuList = document.querySelector(".list");
let listItem = document.querySelector(".list__item");
let check = Array.from(menuList.children);
let backGround = document.querySelector("#background");
let grey = document.querySelector(".grey");
let red = document.querySelector(".red");
let orange = document.querySelector(".orange");
let purple = document.querySelector(".purple");
let green = document.querySelector(".green");
let text = document.querySelector(".background__color__text");
let radioGrey = document.querySelector("#grey");
let radioRed = document.querySelector("#red");
let radioOrange = document.querySelector("#orange");
let radioPurple = document.querySelector("#purple");
let radioGreen = document.querySelector("#green");

// Functions
let showMenu = () => {
  check.forEach(function (listItem) {
    listItem.classList.add("list__item--active");
  });
};
let hideMenu = () => {
  check.forEach(function (listItem) {
    listItem.classList.remove("list__item--active");
  });
};

let changeGrey = () => {
  backGround.className = "";
  backGround.classList.add("grey");
  menu.addEventListener("click", hideMenu);
  text.innerHTML = "Grijs";
  radioGrey.checked = true;
};
let changeRed = () => {
  backGround.className = "";
  backGround.classList.add("red");
  menu.addEventListener("click", hideMenu);
  text.innerHTML = "Rood";
  radioRed.checked = true;
};
let changeOrange = () => {
  backGround.className = "";
  backGround.classList.add("orange");
  menu.addEventListener("click", hideMenu);
  text.innerHTML = "Oranje";
  radioOrange.checked = true;
};
let changePurple = () => {
  backGround.className = "";
  backGround.classList.add("purple");
  menu.addEventListener("click", hideMenu);
  text.innerHTML = "Paars";
  radioPurple.checked = true;
};
let changeGreen = () => {
  backGround.className = "";
  backGround.classList.add("green");
  menu.addEventListener("click", hideMenu);
  text.innerHTML = "Groen";
  radioGreen.checked = true;
};
let checkWhichKey = (key) => {
  // Voorgaande functies werken niet, hier zou ik graag meer info over willen.

  if (key.keyCode == 49) {
    backGround.className = "";
    backGround.classList.add("grey");
    text.innerHTML = "Grijs";
    radioGrey.checked = true;
  } else if (key.keyCode == 50) {
    backGround.className = "";
    backGround.classList.add("red");
    text.innerHTML = "Rood";
    radioRed.checked = true;
  } else if (key.keyCode == 51) {
    backGround.className = "";
    backGround.classList.add("orange");
    text.innerHTML = "Oranje";
    radioOrange.checked = true;
  } else if (key.keyCode == 52) {
    backGround.className = "";
    backGround.classList.add("purple");
    text.innerHTML = "Paars";
    radioPurple.checked = true;
  } else if (key.keyCode == 53) {
    backGround.className = "";
    backGround.classList.add("green");
    text.innerHTML = "Groen";
    radioGreen.checked = true;
  }
};

// EventListeners
menu.addEventListener("mouseover", showMenu);
menu.addEventListener("mouseout", hideMenu);
listItem.addEventListener("click", hideMenu);
grey.addEventListener("click", changeGrey);
red.addEventListener("click", changeRed);
orange.addEventListener("click", changeOrange);
purple.addEventListener("click", changePurple);
green.addEventListener("click", changeGreen);
radioGrey.addEventListener("click", changeGrey);
radioRed.addEventListener("click", changeRed);
radioOrange.addEventListener("click", changeOrange);
radioPurple.addEventListener("click", changePurple);
radioGreen.addEventListener("click", changeGreen);
document.addEventListener("keydown", checkWhichKey);
