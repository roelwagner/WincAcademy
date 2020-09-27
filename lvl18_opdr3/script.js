let addTheWordCool = (a) => {
  a.push("cool");
  return a;
};

console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]

let amountOfElementsInArray = (array) => {
  return array.length;
};
console.log(amountOfElementsInArray(["appels", "peren", "citroenen"]));
// resultaat: 3

let selectBelgiumFromBenelux = (array) => {
  return array[0];
};
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));
// resultaat: "Belgie"

let lastElementInArray = (array) => {
  return array[array.length - 1];
};
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));
// resultaat: "Schildpad"

const presidents = ["Trump", "Obama", "Bush", "Clinton"];
const impeachTrumpSlice = function (array) {
  let x = array.slice(1, 4);
  return x;
};
const impeachTrumpSplice = function (array) {
  array.splice(0, 1);
  return array;
};
console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

let stringsTogether = (array) => {
  let x = array.join(" ");
  return x;
};
console.log(stringsTogether(["Winc", "Academy", "is", "leuk", ";-}"]));
//resultaat: "Winc Academy is leuk ;-}"

let combineArrays = (array1, array2) => {
  let together = array1.concat(array2);
  return together;
};
console.log(combineArrays([1, 2, 3], [4, 5, 6]));
// resultaat: [1,2,3,4,5,6]
