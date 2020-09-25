let btnAlert = document.querySelector("#mybutton");
let alertButton = () => {
  alert("button clicked");
};
btnAlert.addEventListener("click", alertButton);

let button2 = document.querySelector("#button2");
let bkg = document.querySelector(".blue-background");
let toggleBackground = () => {
  bkg.classList.toggle("red-background");
};
button2.addEventListener("click", toggleBackground);
