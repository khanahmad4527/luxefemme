import React from "react";
import { Box, Text } from "@chakra-ui/react";

const EmptyOrder = () => {
  return (
    <Box p={6} w="100%" h="100vh">
      <Text fontSize="xl" fontWeight="bold" mb={2}>
        No order history found.
      </Text>
      <Text fontSize="md">
        You haven't placed any orders with us yet. Start shopping now and
        experience our amazing products and services!
      </Text>
    </Box>
  );
};

export default EmptyOrder;
