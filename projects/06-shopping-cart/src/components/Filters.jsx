import { useState } from "react";
import "../styles/Filters.css";

export const Filters = ({ onChange }) => {
  const [minPrice, setMinPrice] = useState(0);

  const handleRango = (e) => {
    console.log(e.target.value);
    const data = e.target.value;
    setMinPrice(data);
    onChange((prevState) => ({
      ...prevState,
      minPrice: data,
    }));
  };
  const handleChangeCategory = (e) => {
    onChange((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Precio Minimo:</label>
        <input
          type="range"
          id="price"
          min="0"
          max="2000"
          onChange={handleRango}
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor="category">Categoria</label>
        <select id="category" onChange={handleChangeCategory}>
          <option value="all">ALL</option>
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
