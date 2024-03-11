import "./App.css";
import { Movies } from "./components/Movies";
import withoutResponse from "./mocks/no-results.json";
import responseMovie from "./mocks/with-results.json";

const useMovie = () => {
  const movies = responseMovie.Search;

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));
  return { movies: mappedMovies };
};

function App() {
  const { movies: mappedMovies } = useMovie();
  return (
    <div className="page">
      <h1>Buscador peliculas</h1>
      <header>
        <form>
          <input type="text" placeholder="Avengers, Star Wars..." />
          <button type="submit">Buscar</button>
          {/*Siempre el boton de un formulario es tipo submit*/}
        </form>
      </header>
      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  );
}

export default App;
