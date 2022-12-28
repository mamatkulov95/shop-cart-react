import { createContext, useState } from "react";
import { PRODUCTS } from "../products";
export const Context = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export default function ContextProvider(props) {
  const [cartItems, setCartItems] = useState(getDefaultCart);

  const addToCart = (id) => {
    setCartItems((prevItems) => ({ ...prevItems, [id]: prevItems[id] + 1 }));
  };

  const contextValue = {
    addToCart,
    cartItems,
  };

  return (
    <Context.Provider value={contextValue}> {props.children}</Context.Provider>
  );
}
