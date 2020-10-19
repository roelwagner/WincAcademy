// Takes in array of objects ==> creates list item for each object
const addMoviesToDom = (arr) => {
  const ul = document.getElementById("movie__list");
  ul.innerHTML = "";
  arr.map((movie) => {
    const li = document.createElement("li");
    const movieLi = ul.appendChild(li);
    const link = `<a target="_blank" href="http://imdb.com/title/${movie.imdbID}/">`;
    const img = `<img src="${movie.Poster}" alt="${movie.Title}"/>`;
    const endTags = `</a>`;
    movieLi.classList.add("film");
    movieLi.innerHTML = link + img + endTags;
  });
};
addMoviesToDom(movies);

// Takes in array of objects ==> filters by name or date
const filterMovies = (wordInMovieTitle) => {
  const filteredFilms = movies.filter((film) => {
    return film.Title.includes(wordInMovieTitle);
  });
  addMoviesToDom(filteredFilms);
};

const filterNewMovies = () => {
  const latest = movies.filter((film) => {
    return film.Year > 2013;
  });
  addMoviesToDom(latest);
};

// Checks for filter values and passes it on to filter functions
const handleOnChangeEvent = (event) => {
  switch (event.target.value) {
    case "Latest":
      filterNewMovies();
      break;
    default:
      filterMovies(event.target.value);
      break;
  }
};
const addEventListeners = () => {
  const radioButtons = document.querySelectorAll('input[name="filter"]');
  radioButtons.forEach((button) => {
    button.addEventListener("change", handleOnChangeEvent);
  });
};
addEventListeners();

// searchbar and reset
const input = document.querySelector("#input");
const search = () => {
  const test = input.value.toLowerCase();
  if (test.includes("ve")) {
    filterMovies("Avengers");
  } else if (test.includes("x")) {
    filterMovies("X-Men");
  } else if (test.includes("p")) {
    filterMovies("Princess");
  } else if (test.includes("at")) {
    filterMovies("Batman");
  } else if (test.includes("all")) {
    addMoviesToDom(movies);
  }
};
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    search();
  }
});
