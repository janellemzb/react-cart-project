import React, { createContext, useState } from "react";

import menuItems from "./data.js";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState(menuItems);

  const addToCart = (newItem) => {
    if (cartItems.find((item) => item.id === newItem.id)) {
      return;
    }
    setCartItems((prev) => [...prev, { ...newItem, count: 0 }]);
  };

  const removeFromCart = (itemIdToRemove) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemIdToRemove);

    setCartItems(updatedCart);
  };

  const incrementCount = (id) => {
    setProducts((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count ? item.count + 1 : 1 };
        }
        return item;
      })
    );
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count ? item.count + 1 : 1 };
        }
        return item;
      })
    );
  };

  const decrementCount = (id) => {
    setProducts((prev) =>
      prev.map((item) => {
        if (item.id === id && item.count > 0) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      })
    );
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id && item.count > 0) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      })
    );
  };

  const filterProducts = (category) => {
    if (category === null || category === undefined) {
      return;
    }
    const filteredProducts = menuItems.filter(
      (product) => product.category === category
    );
    setProducts(filteredProducts);
  };

  const contextValue = {
    products,
    cartItems,
    addToCart,
    removeFromCart,
    filterProducts,
    setProducts,
    incrementCount,
    decrementCount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
