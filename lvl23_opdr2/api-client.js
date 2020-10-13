const API_KEY = "";

const getData = async () => {
  try {
    const apiUrl = "https://api.themoviedb.org/3/genre/movie/list";
    const res = await fetch(`${apiUrl}?api_key=${API_KEY}`, { method: "GET" });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
