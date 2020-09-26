const array = [
  { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
  { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
  { name: "A. Curry", profession: "kikvorsman", age: 32 },
  { name: "F. Vonk", profession: "slangenmelker", age: 36 },
  { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
  { name: "Dr.Evil", profession: "digital overlord", age: 56 },
];

for (let person of array) {
  // Log alle objecten in de array
  console.log("Dit is de gehele persoon:", person);
}
for (let person of array) {
  // Log alle namen van de objecten in de array
  console.log("Dit is: ", person.name);
}

for (let person of array) {
  // Log de geboorte jaren van de objecten
  let birthJear = 2020 - person.age;
  console.log(person.name, "is geboren in jaar:", birthJear);
}

for (let person of array) {
  // Log de namen en de beroepen van de objecten
  console.log(person.name, "is een", person.profession);
}

for (let person of array) {
  // Log of obect.age hoger is dan 50
  if (person.age > 50) {
    console.log(person.name, " is ouder dan 50 jaar.");
  } else if (person.age < 50) {
    console.log(person.name, " is jonger dan 50 jaar.");
  } else {
    console.log(person.name, " is 50 jaar.");
  }
}
