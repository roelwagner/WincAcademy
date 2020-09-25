const age = 32;
let restAge = 18 - age;
const isFemale = true;
const driverStatus = "bob";

if (age >= 18) {
  if (isFemale) {
    console.log("Welkom mevrouw");
  } else {
    console.log("Welkom meneer");
  }
} else {
  console.log(
    "Je bent helaas te jong, we zien je graag over " + restAge + " jaar"
  );
}

if (driverStatus == "bob") {
  console.log("Veilig thuis bob");
} else {
  console.log("Helaas, je kunt beter een taxi bellen");
}
