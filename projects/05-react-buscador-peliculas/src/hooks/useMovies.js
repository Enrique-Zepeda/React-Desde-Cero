import { useState } from "react";
import { searchMovies } from "../services/movies.js";

export const useMovies = ({ search }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const getMovies = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (error) {
      setError(error.message);
    } finally {
      //tanto si se ejecuta el try o el catch el finally siempre se va a ejecutar
      setIsLoading(false);
    }
  };

  return { movies, getMovies };
};
