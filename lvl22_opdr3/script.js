// /*
// Exercise 1:
// Write a function testNum that takes a number as an argument and
// returns a Promise that tests if the value is less than or greater than the value 10.
// Log the result to the console.
// */

const testNum = (num) => {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(num + " is greater then 10. Yeah!");
    } else {
      reject(num + " is not greater then 10! Helaas peanutbutter!");
    }
  });
};

testNum(4)
  .then((good) => console.log(good))
  .catch((bad) => console.log(bad));

testNum(14)
  .then((good) => console.log(good))
  .catch((bad) => console.log(bad));

// /*
// Exercise 2:
// Write two functions that use Promises that you can chain!
// The first function, makeAllCaps(), will take in an array of words and capitalize them,
// and then the second function, sortWords(), will sort the words in alphabetical order.
// If the array contains anything but strings, it should throw an error.
// Then call these functions by *chaining* the promises
// */

const makeAllCaps = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr[1] === "tomatos") {
      resolve(
        sortWords(
          arr.map((element) => {
            return element.toUpperCase();
          })
        )
      );
    } else {
      reject("Fatale error! Sluit ramen en deuren!");
    }
  });
};
const sortWords = (array1) => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve(array1.sort());
    } else {
      reject("Error, array may contain only strings");
    }
  });
};

const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

// call both functions, chain them together and log the result to the console

makeAllCaps(arrayOfWords)
  .then(sortWords(arrayOfWords))
  .then((good) => console.log(good))
  .catch((bad) => console.log(bad));

makeAllCaps(complicatedArray)
  .then(sortWords(complicatedArray))
  .then((good) => console.log(good))
  .catch((bad) => console.log(bad));
