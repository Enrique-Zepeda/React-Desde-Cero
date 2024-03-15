import { useRef, useState, useMemo } from "react";
import { searchMovies } from "../services/movies.js";

export const useMovies = ({ search, sort }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(search);

  const getMovies = useMemo(() => {
    return async ({ search }) => {
      if (search === previousSearch.current) return;
      try {
        setIsLoading(true);
        setError(null);
        previousSearch.current = search;
        const newMovies = await searchMovies({ search });
        setMovies(newMovies);
      } catch (error) {
        setError(error.message);
      } finally {
        //tanto si se ejecuta el try o el catch el finally siempre se va a ejecutar
        setIsLoading(false);
      }
    };
  }, []);

  const sortedMovies = useMemo(() => {
    console.log("memo sorted movies");
    return sort
      ? [...movies].sort((a, b) => a.year.localeCompare(b.year))
      : movies;
  }, [sort, movies]);

  return { movies: sortedMovies, getMovies, isLoading };
};
