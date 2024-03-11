import "./App.css";
function App() {
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
      <main>Aqui iran los resultados</main>
    </div>
  );
}

export default App;
