import { useId } from "react";
import { ClearCartIcon, CartIcon } from "../components/Icons";
import "../styles/Cart.css";
export const Cart = () => {
  const cartCheckBoxId = useId();
  return (
    <>
      <label htmlFor={cartCheckBoxId} className="cart-button">
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckBoxId} hidden />
      <aside className="cart">
        <ul>
          <li>
            <img
              src="https://cdn.dummyjson.com/product-images/1/1.jpg"
              alt="compra"
            />
            <div>
              <strong>iPhone</strong> - $1499
            </div>
            <footer>
              <small>Qty: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>
        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};
