import "./App.css";
import withoutResponse from "./mocks/no-results.json";
import responseMovie from "./mocks/with-results.json";
function App() {
  const movies = responseMovie.Search; //guardo el arreglo en movies
  const hasMovies = movies?.length > 0; //verifico si tiene peliculas
  return (
    <div className="page">
      <h1>Buscador peliculas</h1>
      <header>
        <form>
          <input type="text" placeholder="Avengers, Star Wars..." />
          <button type="submit">Buscar</button>{" "}
          {/*Siempre el boton de un formulario es tipo submit*/}
        </form>
      </header>
      <main>
        {hasMovies ? (
          <ul>
            {movies.map((movie) => (
              <li key={movie.imdbID}>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                <img src={movie.Poster} alt={movie.Title} />
              </li>
            ))}
          </ul>
        ) : (
          <p>No existe la pelicula buscada</p>
        )}
      </main>
    </div>
  );
}

export default App;
