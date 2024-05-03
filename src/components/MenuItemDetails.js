import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "./context";

const MenuItemDetails = () => {
  const { id } = useParams();
  const { products, addToCart } = useContext(ShopContext);
  const menuItem = products.find((item) => item.id === parseInt(id));

  const handleAddToCart = () => {
    addToCart(menuItem);
  };

  return (
    <div>
      <h2>{menuItem.name}</h2>
      <p>{menuItem.description}</p>
      <p>${menuItem.price}</p>
      <img src={menuItem.image} alt={menuItem.name} />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default MenuItemDetails;
