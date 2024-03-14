const APIKEY = "4287ad07";
export const searchMovies = async ({ search }) => {
  if (search === "") return null;
  if (search) {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${APIKEY}&s=${search}`
      );
      const json = await response.json();
      const movies = json.Search;

      return movies?.map((movie) => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        image: movie.Poster,
      }));
    } catch (error) {
      throw new Error("Error searching movies");
    }
  }
};
