import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

function useSearch() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (search === "") {
      setError("no se puede buscar una pelicula si el input esta vacio");
      return;
    }
    if (search.match(/^\d+$/)) {
      setError("no se puede buscar una pelicula con un numero");
      return;
    }
    if (search.length < 3) {
      setError("La pelicula debe tener almenos 3 caracteres");
      return;
    }
    setError(null);
  }, [search]);

  return { search, setSearch, error };
}

function App() {
  const { movies } = useMovies();
  const { search, setSearch, error } = useSearch();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ search });
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className="page">
      <h1>Buscador peliculas</h1>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={search}
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
