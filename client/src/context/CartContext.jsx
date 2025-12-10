import React, { createContext, useContext } from "react";
import { initialProducts } from "../data/product";

// 1. Create the context (shared data container)
const CartContext = createContext();

// 2. Provider component (wraps your whole app)
export const CartProvider = ({ children }) => {
  const products = initialProducts; // products data available to all children

  return (
    <CartContext.Provider value={{ products }}>
      {/* children = any components wrapped inside CartProvider */}
      {children}
    </CartContext.Provider>
  );
};

// 3. Custom hook to use the context in any component
export const useCart = () => {
  return useContext(CartContext);
};
