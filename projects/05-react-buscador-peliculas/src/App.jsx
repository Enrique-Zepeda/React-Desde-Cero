import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

function App() {
  const { movies } = useMovies();
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ query });
  };

  const handleChange = (event) => {
    const newQuery = event.target.value;
    if (newQuery.startsWith(" ")) return;
    setQuery(newQuery);
    if (newQuery === "") {
      setError("no se puede buscar una pelicula si el input esta vacio");
      return;
    }
    if (newQuery.match(/^\d+$/)) {
      setError("no se puede buscar una pelicula con un numero");
      return;
    }
    if (newQuery.length < 3) {
      setError("La pelicula debe tener almenos 3 caracteres");
      return;
    }
    setError(null);
  };
  return (
    <div className="page">
      <h1>Buscador peliculas</h1>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={query}
            name="query" /*Se le pone un nombre cuando se guarda con query*/
            type="text"
            placeholder="Avengers, Star Wars..."
          />
          <button type="submit">Buscar</button>
          {/*Siempre el boton de un formulario es tipo submit*/}
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
