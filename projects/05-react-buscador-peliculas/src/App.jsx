import { useRef } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

function App() {
  const { movies } = useMovies();
  const inputRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const fields = Object.fromEntries(new window.FormData(event.target));
    console.log(fields);
  };
  return (
    <div className="page">
      <h1>Buscador peliculas</h1>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            name="query" /*Se le pone un nombre cuando se guarda con query*/
            type="text"
            placeholder="Avengers, Star Wars..."
          />
          <button type="submit">Buscar</button>
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
