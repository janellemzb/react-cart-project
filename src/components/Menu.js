import { useContext } from "react";
import { Grid } from "@chakra-ui/react";

import { ShopContext } from "./context";
import MenuItem from "./MenuItem.js";
import Category from "./Category";
import "../styles.css";

const Menu = () => {
  const { addToCart, products } = useContext(ShopContext);

  return (
    <div>
      <Category />
      <div className="container d-flex justify-content-center ">
        <Grid templateColumns="repeat(3, 1fr)" gap={10}>
          {products.map((menuItem) => (
            <MenuItem key={menuItem.id} item={menuItem} addToCart={addToCart} />
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Menu;
