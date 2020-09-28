let superheroes = [
  {
    name: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: "210",
  },
  {
    name: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: "220",
  },
  {
    name: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: "195",
  },
  {
    name: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: "186",
  },
  {
    name: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: "195",
  },
  {
    name: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: "165",
  },
  {
    name: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: "145",
  },
  {
    name: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: "167",
  },
  {
    name: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: "220",
  },
  {
    name: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: "250",
  },
  {
    name: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: "200",
  },
  {
    name: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: "1400",
  },
  {
    name: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: "200",
  },
  {
    name: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: "200",
  },
  {
    name: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: "unknown",
  },
];

// vraag 1
const superheroeNames = superheroes.map((hero) => hero.name);
// vraag 2
const lightHeroes = superheroes.filter((hero) => parseInt(hero.weight) < 190);
// vraag 3
const twohunderdPoundNames = superheroes
  .filter((hero) => parseInt(hero.weight) == 200)
  .map((hero) => hero.name);
// vraag 4
const firstAppearance = superheroes.map((hero) => hero.first_appearance);
// vraag 5
const heroesFromDC = superheroes.filter(
  (hero) => hero.publisher === "DC Comics"
);
const heroesFromMarvel = superheroes.filter(
  (hero) => hero.publisher === "Marvel Comics"
);
// vraag 6
const weightDCTogether = heroesFromDC.reduce((currentTotal, hero) => {
  let weight = parseInt(hero.weight);
  return currentTotal + weight;
}, 0);
// vraag 7 exlusief Silver Surfer
const weightMarvelTogether = heroesFromMarvel.reduce((currentTotal, hero) => {
  if (hero.weight === "unknown") {
    hero.weight = 0;
  }
  const weight = parseInt(hero.weight);
  return currentTotal + weight;
}, 0);
// vraag 8
const heaviestHero = superheroes.reduce((heavierHero, hero) => {
  if (heavierHero < parseInt(hero.weight)) {
    heavierHero = parseInt(hero.weight);
  }
  return heavierHero;
}, 0);
console.log(heaviestHero);
