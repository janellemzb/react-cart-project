import { useContext, useEffect, useState } from "react";
import { Grid } from "@chakra-ui/react";

import { ShopContext } from "./context";
import MenuItem from "./MenuItem";

export default function Cart() {
  const { cartItems } = useContext(ShopContext);

  const [total, setTotal] = useState(0);
  
  const handlePrice = () => {
    let ans = 0;
    cartItems.map((item) => {
      ans += item.price * item.amount;
    });
    setTotal(ans)
  };

  useEffect(() => {
    handlePrice();
  }, [cartItems]);

  return (
    <article>
      <Grid templateColumns="repeat(3, 1fr)" gap={10} marginTop={5}>
        {cartItems.map((item) => (
          <MenuItem item={item} key={item.id} />
        ))}
      </Grid>
        <h1>{total}</h1>
    </article>
  );
}
