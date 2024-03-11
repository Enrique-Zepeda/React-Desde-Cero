import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

function App() {
  const { movies: mappedMovies } = useMovies();
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
