const telWillekeurigeHoeveelheidOp = (...cijfers) => {
  const somVan = cijfers.reduce((cijfer, huidigTotaal) => {
    return cijfer + huidigTotaal;
  }, 0);
  return somVan;
};
console.log(telWillekeurigeHoeveelheidOp(1, 2, 3, 4, 5, 6));

const telArrayWaardenOp = (num1, num2, num3) => {
  const sum = num1 + num2 + num3;
  return sum;
};

const arr = [2, 3, 4];

console.log(telArrayWaardenOp(...arr));
