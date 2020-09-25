let favoriteMovie = {
  title: "Shawshank Redemption",
  duration: 144,
  stars: ["Tim Robbins", " Morgan Freeman"],
};

let printMovieData = function (a, b, c) {
  let output = a + " lasts for " + b + ". Stars: " + c + ".";
  console.log(output);
};

printMovieData(
  favoriteMovie.title,
  favoriteMovie.duration,
  favoriteMovie.stars
);
