import { useState } from "react";
import "../styles/Filters.css";

export const Filters = () => {
  const [rango, setRango] = useState(0);

  const handleRango = (e) => {
    console.log(e.target.value);
    const data = e.target.value;
    setRango(data);
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Precio</label>
        <input
          type="range"
          id="price"
          min="0"
          max="2000"
          onChange={handleRango}
        />
        <p>{rango}</p>
      </div>

      <div>
        <label htmlFor="category">Categoria</label>
        <select id="category">
          <option value="all">ALL</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  );
};
