const getGenres = async () => {
  const data = await getData();
  const genres = data.genres;
  return genres;
};

const getGenre = async (arr) => {
  arr.map((genre) => {
    console.log(`${genre.name} is een fantastisch genre!`);
  });
};

getGenres()
  .then((data) => getGenre(data))
  .catch((er) => console.log(er));
