import "./App.css";
import { Movies } from "./components/Movies";
import withoutResponse from "./mocks/no-results.json";
import responseMovie from "./mocks/with-results.json";

function App() {
  const movies = responseMovie.Search;

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
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
