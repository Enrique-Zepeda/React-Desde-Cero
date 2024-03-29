import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import debounce from "just-debounce-it";

function useSearch() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const isFirstInput = useRef(true);
  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }
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
  const [sort, setSort] = useState(false);
  const { search, setSearch, error } = useSearch();
  const { movies, getMovies, isLoading } = useMovies({ search, sort });

  const handleSort = () => {
    setSort(!sort);
  };

  const debounceGetMovies = useCallback(
    debounce((search) => {
      console.log("search", search);
      getMovies({ search });
    }, 300),
    [getMovies]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  };

  const handleChange = (event) => {
    const newMovies = event.target.value;
    setSearch(newMovies);
    debounceGetMovies(newMovies);
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
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
          {/*Siempre el boton de un formulario es tipo submit*/}
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
      <main>{isLoading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
