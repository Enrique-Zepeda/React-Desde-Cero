//para crear el contexto ocupamos importar createContext
import { createContext, useState } from "react";
//creamos el contexto
// este es el que tenemos que consumir FiltersContext
export const FiltersContext = createContext();

//crearmos el provider para proveer el contexto
// este nos prove el acesso tenemos que envolver la parte de la app que queramos usar el contexto
//<FiltersProvider>
//  <App />
//</FiltersProvider>;

export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 1,
  });
  return (
    <FiltersContext.Provider
      value={{
        // Es informacion a la que vamos querer aceder
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
