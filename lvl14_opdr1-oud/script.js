/*
makeBroodjeKaas
    pak broodje
    snijdt broodje open
    pak kaas
    doe kaas tussen broodje
 */

function makeBroodjeKaas() {
  console.log("pak broodje");
  console.log("snijdt broodje open");
  console.log("pak kaas");
  console.log("doe kaas tussen broodje");
}

makeBroodjeKaas();

//Hier declareer ik de functie
function makeSandwich(topping) {
  console.log("There you go, a sandwich with " + topping);
}

//Hier roep ik hem aan
makeSandwich("ham");
makeSandwich("Salami");

const calculateDiscountedPrice = function (totalAmount, discount) {
  console.log(Math.round(totalAmount - discount));
};

calculateDiscountedPrice(5, 1.25);

const calculateDiscountedPriceIfPermitted = function (totalAmount, discount) {
  if (totalAmount >= 25) {
    console.log(Math.round(totalAmount - discount));
  } else {
    console.log(totalAmount);
  }
};

calculateDiscountedPriceIfPermitted(8, 2.5);
calculateDiscountedPriceIfPermitted(26, 4.83);
