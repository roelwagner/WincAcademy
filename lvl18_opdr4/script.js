/*
De console.log in de voorbeelden geven aan dat de functies voluit geschreven moet worden.
Ik kon even niks anders bedenken dus heb de arrow functies van de array methods maar in een andere functies gezet.
Zo klopt het in ieder geval met de console.log's uit de voorbeelden maar het lijkt me allemaal wat dubbel op.
*/

const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" },
];

function findSpiderMan(arr) {
  const spidy = superheroes.find((hero) => {
    return hero.name === "Spiderman";
  });
  return spidy;
}
console.log(findSpiderMan(superheroes));

function doubleArrayValues(array) {
  let newVar = [];
  let double = array.forEach((element) => {
    newVar.push(element * 2);
  });
  return newVar;
}

function doubledArray(array) {
  let doubled = array.map((x) => {
    return x * 2;
  });
  return doubled;
}
console.log(doubledArray([1, 2, 3]));
console.log(doubleArrayValues([1, 2, 3]));

function containsNumberBiggerThan10(arr) {
  const ten = arr.some((x) => {
    return x >= 10;
  });
  return ten;
}
console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));
// result should be true
console.log(containsNumberBiggerThan10([1, 2, 1, 2, 1, 2]));
// result should be false

function isItalyInTheGreat7(arr) {
  const italy = arr.some((x) => {
    return x === "Italy";
  });
  return italy;
}
console.log(
  isItalyInTheGreat7([
    "Canada",
    "France",
    "Germany",
    "Italy",
    "Japan",
    "United Kingdom",
    "United States",
  ])
);
// result should be true

function tenfold(array) {
  let timesTen = array.map((x) => {
    return x * 10;
  });
  return timesTen;
}
console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));
// result should be [10, 40, 30, 60, 90, 70, 110]

function isBelow100(array) {
  let underHundred = array.every((y) => {
    return y < 100;
  });
  return underHundred;
}
console.log(
  isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98])
);
// result should be: false

function bigSum(arr) {
  let alles = arr.reduce((huidigAlles, waarde) => {
    return waarde + huidigAlles;
  });
  return alles;
}
console.log(
  bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234])
);
// result should be 1118
