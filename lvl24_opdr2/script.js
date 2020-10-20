const base = "https://pokeapi.co/api/v2/";
const all = "?offset=0&limit=1050";
const charizard = document.getElementById("charizard");
const pokemonInfo = document.querySelector(".pokemon-info");

const getData = async (poke) => {
  const pokemon = poke;
  try {
    const result = await fetch(`${base}pokemon/${pokemon}`);
    const json = await result.json();
    return json;
  } catch (error) {
    console.error();
  }
};

const getLocationData = async (poke) => {
  const pokemon = poke;
  try {
    const result = await fetch(`${base}location/${pokemon}`);
    const json = await result.json();
    return json;
  } catch (error) {
    console.error();
  }
};

const displayPokemon = (poke) => {
  const pokemon = `
    <ul>
        <li>Name: ${poke.name}</li>
        <li>Type: ${poke.types[0].type.name}</li>
        <li>Height: ${poke.height}</li>
        <li>Weight: ${poke.weight}</li>
    </ul>
    `;
  return pokemon;
};

const displayPokemonLocation = (poke) => {
  const pokemon = `
    <ul>
    <li> - - - - - - - - - - - - </li>
        <li>Location: ${poke.name}</li>
    </ul>
    `;
  console.log(poke);
  return pokemon;
};

const showDetails = async () => {
  const pokemonId = 6;
  const pokemonName = await getData(pokemonId);
  const pokemonLocation = await getLocationData(pokemonId);
  pokemonInfo.innerHTML =
    displayPokemon(pokemonName) + displayPokemonLocation(pokemonLocation);
};

charizard.addEventListener("click", showDetails);
