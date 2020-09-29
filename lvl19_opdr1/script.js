//constants
const button = document.querySelectorAll(".big-five-button");
const spottedAnimalsList = document.querySelector("#spotted-animals-list");
const removeFirst = document.querySelector("#remove-first-item-button");
const removeAll = document.querySelector("#remove-all-button");

// functions
const addAnimal = (element) => {
  const addLastSeenAnimal = spottedAnimalsList.appendChild(
    document.createElement("li")
  );
  addLastSeenAnimal.classList.add("spotted-animals-list-item");
  addLastSeenAnimal.innerHTML = element.target.textContent;
};
const removeLastSeenAnimal = () => {
  const lastSeenAnimal = spottedAnimalsList.getElementsByTagName("li")[0];
  spottedAnimalsList.removeChild(lastSeenAnimal);
};
const removeAllSeenAnimals = () => {
  let goners = Array.from(spottedAnimalsList.getElementsByTagName("li"));
  goners.forEach((e) => {
    spottedAnimalsList.removeChild(e);
  });
};

// eventlistners
button.forEach((item) => {
  item.addEventListener("click", addAnimal);
});
removeFirst.addEventListener("click", removeLastSeenAnimal);
removeAll.addEventListener("click", removeAllSeenAnimals);
