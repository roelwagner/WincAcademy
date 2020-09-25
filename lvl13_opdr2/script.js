const age = 23;
let restAge = 18 - age;
const isFemale = true;
const driverStatus = "bob";
const name = "Bram";
const totalAmount = 130;

if (age >= 18 && age <= 25) {
  console.log("Leuk dat je er bent. Je krijgt 50% korting");
} else if (age < 18) {
  console.log(
    "Je bent helaas te jong, we zien je graag over " + restAge + " jaar"
  );
} else {
  console.log("Welkom in mijn kroeg");
}
if (isFemale) {
  console.log("Welkom mevrouw");
} else {
  console.log("Welkom meneer");
}

if (driverStatus == "bob") {
  console.log("Veilig thuis bob");
} else {
  console.log("Helaas, je kunt beter een taxi bellen");
}

if (name === "Sarah" || name === "Bram") {
  console.log("Wat leuk, je krijgt een drankje van het huis");
}

if (totalAmount >= 25 && totalAmount < 50) {
  console.log("Je krijgt van ons een portie (vega)bitterballen.");
} else if (totalAmount >= 50 && totalAmount < 100) {
  console.log("Je krijgt van ons een portie nacho's.");
} else if (totalAmount >= 100) {
  console.log("Je krijgt van ons een fles champagne.");
} else {
  console.log("Met dit bedrag kunnen we je helaas niks gratis aanbieden");
}
