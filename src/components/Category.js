import React, { useContext } from "react";
import { Box, Button, ButtonGroup, Stack } from "@chakra-ui/react";

import { ShopContext } from "./context";

const Category = () => {
  const { filterProducts } = useContext(ShopContext);

  const handleCategoryClick = (category) => {
    filterProducts(category);
  };

  return (
    <Box marginTop={2} marginBottom={2}>
      <Stack direction="row" spacing={4} align="center" justifyContent="center">
        <Button
          colorScheme="teal"
          variant="ghost"
          onClick={() => handleCategoryClick("appetizers")}
        >
          Appetizers
        </Button>
        <Button
          colorScheme="teal"
          variant="ghost"
          onClick={() => handleCategoryClick("ramen")}
        >
          Ramen
        </Button>
        <Button
          colorScheme="teal"
          variant="ghost"
          onClick={() => handleCategoryClick("rolls")}
        >
          Rolls
        </Button>
        <Button
          colorScheme="teal"
          variant="ghost"
          onClick={() => handleCategoryClick("noodles")}
        >
          Noodles
        </Button>
        <Button
          colorScheme="teal"
          variant="ghost"
          onClick={() => handleCategoryClick("rice")}
        >
          Rice
        </Button>
        <Button
          colorScheme="teal"
          variant="ghost"
          onClick={() => handleCategoryClick("toppings")}
        >
          Toppings
        </Button>
        <Button
          colorScheme="teal"
          variant="ghost"
          onClick={() => handleCategoryClick("drinks")}
        >
          Drinks
        </Button>
      </Stack>
    </Box>
  );
};

export default Category;
