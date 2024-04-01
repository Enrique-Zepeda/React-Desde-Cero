import { useId } from "react";
import "../styles/Filters.css";
import { useFilters } from "../hooks/useFilters.js";

export const Filters = () => {
  const { setFilters, filters } = useFilters();

  const minPriceFilterId = useId();
  const minCategoryFilterId = useId();

  const handleRango = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };
  const handleChangeCategory = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Precio Minimo:</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1500"
          onChange={handleRango}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={minCategoryFilterId}>Categoria</label>
        <select id={minCategoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todo</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Celulares</option>
          <option value="fragrances">Perfumes</option>
          <option value="skincare">Cremas Faciales</option>
          <option value="groceries">Comestibles</option>
          <option value="home-decoration">Decoracion del hogar</option>
        </select>
      </div>
    </section>
  );
};
