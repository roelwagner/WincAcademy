let calculateSupply = function (age, dailyAmount) {
  const maxYears = 85;
  const amountNeeded = Math.round((maxYears - age) * dailyAmount);
  let output =
    "You will need " +
    amountNeeded +
    " to last you until the ripe old age of " +
    maxYears;
  console.log(output);
};

calculateSupply(80, 2.7);
calculateSupply(32, 1.5);
calculateSupply(45, 45.45);
