import { AddToCartIcon } from "./Icons";
import "../styles/Products.css";
import { useCart } from "../hooks/useCart";
export const Products = ({ products }) => {
  const { addCart } = useCart();
  return (
    <main className="products">
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <div>
              <button onClick={() => addCart(product)}>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};
