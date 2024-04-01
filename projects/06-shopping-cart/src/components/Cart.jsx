import "../styles/Cart.css";
import { useId } from "react";
import { ClearCartIcon, CartIcon } from "../components/Icons";
import { useCart } from "../hooks/useCart";
export const Cart = () => {
  const cartCheckBoxId = useId();
  const { cart, clearCart, addCart } = useCart();

  const CartItem = ({ thumbnail, price, title, quantity, addCart }) => {
    return (
      <li>
        <img src={thumbnail} alt={title} />
        <div>
          <strong>{title}</strong> - ${price}
        </div>
        <footer>
          <small>Cantidad: {quantity}</small>
          <button onClick={addCart}>+</button>
        </footer>
      </li>
    );
  };

  return (
    <>
      <label htmlFor={cartCheckBoxId} className="cart-button">
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckBoxId} hidden />
      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addCart={() => addCart(product)}
              {...product}
            />
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};
