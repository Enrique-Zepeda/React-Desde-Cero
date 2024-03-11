export const ListOfMovies = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.Title} />
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
