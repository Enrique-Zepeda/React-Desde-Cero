import { useContext } from "react";
import { CartContext } from "../contexts/cart";

export const useCart = () => {
  const cart = useContext(CartContext);

  if (cart === undefined) {
    throw new Error(
      "estas usando este custom hook(useCart.js) en un sitio que no puede"
    );
  }

  return cart;
};
