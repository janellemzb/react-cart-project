import React, { useContext } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";

import { ShopContext } from "./context";

export default function MenuItem({ item, addToCart }) {
  const { cartItems, removeFromCart, incrementCount, decrementCount } =
    useContext(ShopContext);

  const isItemAdded = cartItems.find((cartItem) => cartItem.id === item.id);

  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={item.image} borderRadius="lg" width={"100%"} height={220} />
        <Stack mt="6" spacing="3">
          <Heading size="md"> {item.name}</Heading>
          <Text>{item.description}</Text>
          <Text color="blue.600" fontSize="2xl">
            {item.count ? item.count * item.price : item.price} KZT
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <ButtonGroup spacing="2" alignItems={"center"}>
            <Button
              variant="solid"
              colorScheme="red"
              isDisabled={!isItemAdded}
              onClick={() => incrementCount(item.id)}
            >
              +
            </Button>
            <span>{item.count ? item.count : 0}</span>

            <Button
              variant="solid"
              colorScheme="red"
              isDisabled={!isItemAdded}
              onClick={() => decrementCount(item.id)}
            >
              -
            </Button>
          </ButtonGroup>
          <Button
            variant="ghost"
            colorScheme="red"
            onClick={() =>
              isItemAdded ? removeFromCart(item.id) : addToCart(item)
            }
          >
            {isItemAdded ? "Remove" : "Add to cart"}
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
