import withoutResponse from "../mocks/no-results.json";
import withResult from "../mocks/with-results.json";
import { useState } from "react";

export const useMovies = ({ search }) => {
  const [responseMovie, setResponseMovie] = useState([]);
  const movies = responseMovie.Search;

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    image: movie.Poster,
  }));

  const getMovies = () => {
    if (search) {
      setResponseMovie(withResult);
    } else {
      setResponseMovie(withoutResponse);
    }
  };

  return { movies: mappedMovies, getMovies };
};
