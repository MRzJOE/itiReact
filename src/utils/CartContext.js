import React, { createContext, useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems((prev) => {
      const found = prev.find((item) => item.sku === product.sku);
      if (found) {
        return prev.map((item) =>
          item.sku === product.sku
            ? { ...item, Quantity: item.Quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, Quantity: 1 }];
      }
    });
  };
  const updateQuantity = (sku, amount) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.sku === sku ? { ...item, Quantity: item.Quantity + amount } : item
      )
    );
  };

  const removeItem = (sku) => {
    setCartItems((prev) => prev.filter((item) => item.sku !== sku));
  };
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeItem, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
