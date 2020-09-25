// zet de functie om naar een arrow functie
const ikRockArrowFunctions = () =>
  console.log("Joe, ik rock de arrow functions!");

ikRockArrowFunctions();
let fivePlusSeven = () => 5 + 7;
console.log(fivePlusSeven());
let myFunction = (a, b) => a + b;
console.log(myFunction(2, 3));
let addFive = (a) => a + 5;
console.log(addFive(3));
let createObject = () => (person = { greeting: "hoi" });
createObject();
console.log(person.greeting);
