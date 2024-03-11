import React from "react";

export const ListOfMovies = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} />
        </li>
      ))}
    </ul>
  );
};

export const NoMoviesResults = () => {
  return <p>No se encontraron peliculas para esta busqueda</p>;
};

export const Movies = ({ movies }) => {
  const hasMovies = movies?.length > 0; //verifico si tiene peliculas
  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />;
};
