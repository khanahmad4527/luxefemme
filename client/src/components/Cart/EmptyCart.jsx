import React from "react";
import { Box, Text } from "@chakra-ui/react";

const EmptyCart = () => {
  return (
    <Box p={6} borderWidth={2} borderRadius={8} borderColor="teal.500">
      <Text fontSize="xl" fontWeight="bold" mb={2}>
        Your cart is empty!
      </Text>
      <Text fontSize="md">
        Oops! It looks like your cart is empty. Why not browse some of our
        products and see if there's anything you like?
      </Text>
    </Box>
  );
};

export default EmptyCart;
