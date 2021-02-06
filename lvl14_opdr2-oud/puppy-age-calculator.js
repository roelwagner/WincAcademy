let calculateDogAge = function (puppyAge) {
  let dogAge = puppyAge * 7;
  let humanToDog = dogAge * 7;
  let output1 = "Your doggie is " + dogAge + " years old in dog years!";
  let output2 = "To your dog you're " + humanToDog + " years old!!";
  console.log(output1);
  console.log(output2);
};

calculateDogAge(1);
calculateDogAge(3);
calculateDogAge(7);
