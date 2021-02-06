let userName = prompt("Welkom, wat is je naam?");
if (userName == null || userName == "") {
  userName = "John Doe";
}

alert("Hallo, " + userName);

alert(
  "We gaan een spelletje spelen waarin je een nummer moet raden tussen twee waardes die je zelf mag invullen (eerst een lage dan een hoge). Succes!"
);

let lowestValue = parseInt(prompt("Vul een nummer in (startwaarde)"));
let highestValue = parseInt(prompt("Vul een nummer in (eindwaarde)"));

if (lowestValue != Number.isInteger(lowestValue)) {
  lowestValue = 0;
}
if (highestValue != Number.isInteger(highestValue)) {
  highestValue = 25;
}

let numberToGuess = Math.floor(Math.random() * highestValue + lowestValue);

let number = parseInt(
  prompt(
    "Voer een nummer tussen de " +
      lowestValue +
      " en " +
      highestValue +
      " om te beginnen met raden."
  )
);

let tries = 4;

while (tries > 0) {
  if (Number.isInteger(number)) {
    if (number < lowestValue || number > highestValue) {
      alert("Dit nummer ligt niet tussen de opgegeven range.");
    }
    if (number > numberToGuess) {
      number = parseInt(
        prompt(
          "Dat is niet correct. Het getal dat we zoeken ligt LAGER. Je hebt nog " +
            tries +
            " kansen."
        )
      );
    } else if (number < numberToGuess) {
      number = parseInt(
        prompt(
          "Dat is niet correct. Het getal dat we zoeken ligt HOGER. Je hebt nog " +
            tries +
            " kansen."
        )
      );
    }
    if (number == numberToGuess) {
      alert("Gefeliciteerd je hebt gewonnen!");
      break;
    }
    tries--;
    if (number != numberToGuess && tries == 0) {
      alert(
        "Het is je helaas niet gelukt, ververs de pagina om het nog eens te proberen."
      );
    }
  } else {
    alert("Dat is geen nummer. We hebben 0 voor je ingevuld, gemiste kans!");
    number = 0;
  }
}
alert("Dag " + userName + ", tot de volgende keer.");
