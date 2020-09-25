let colors = ["yellow", "blue", "red", "orange"];
let i = 0;
while (i < +colors.length) {
  console.log(colors[i]);
  i++;
}

console.log(" ");

for (j = 0; j < colors.length; j++) {
  console.log(colors[j]);
}

console.log(" ");

colors.forEach((Element) => console.log(Element));

/*
1.  while loop met declaratie van variabele 5 regels
    for loop 3 regels
    
2.  forEach loop 1 regel

3.  Bij de array method hoef je geen begin en eind aan te geven dat maakt het aanzienlijk eenvoudiger om door alle items te itereren.

4.  for..in loop kan over een object loopen.
    Ja dit lijkt erg op itereren
*/
const user = {
  name: "Roel",
  email: "roel@roel.nl",
  age: 32,
  status: "in opleiding",
  bestInTheBusiness: "YES!",
};

for (const key in user) {
  console.log(key + ": " + user[key]);
}
