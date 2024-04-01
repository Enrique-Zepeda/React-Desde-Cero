import { createContext, useState } from "react";

// 1. crear contexto
export const CartContext = createContext();

//2. crear provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addCart = (product) => {
    //checar si el producto ya esta en el carro
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);
    if (productInCartIndex >= 0) {
      //una forma usando structureClone
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart[newCart];
    }
    //si el producto no esta en el carro
    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };
  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
