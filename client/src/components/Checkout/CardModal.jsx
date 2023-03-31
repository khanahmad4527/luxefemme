import React from "react";
import { FormControl, FormLabel, Input, Stack, Button } from "@chakra-ui/react";

const CardModal = ({ orderConfirmed }) => {
  const handlePayment = (e) => {
    e.preventDefault();
    orderConfirmed();
  };
  return (
    <form onSubmit={handlePayment}>
      <Stack spacing={3}>
        <FormControl isRequired>
          <FormLabel>Card Number</FormLabel>
          <Input
            border="2px solid"
            borderColor={"teal.500"}
            _focus={{
              boxShadow: "none",
              border: "2px solid",
              borderColor: "teal.500",
            }}
            _hover={{
              border: "2px solid",
              borderColor: "teal.500",
            }}
            type="text"
            maxLength={16}
            placeholder="Enter card number"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Expiry Date</FormLabel>
          <Input
            border="2px solid"
            borderColor={"teal.500"}
            _focus={{
              boxShadow: "none",
              border: "2px solid",
              borderColor: "teal.500",
            }}
            _hover={{
              border: "2px solid",
              borderColor: "teal.500",
            }}
            type="text"
            maxLength={5}
            placeholder="MM/YY"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>CVV</FormLabel>
          <Input
            border="2px solid"
            borderColor={"teal.500"}
            _focus={{
              boxShadow: "none",
              border: "2px solid",
              borderColor: "teal.500",
            }}
            _hover={{
              border: "2px solid",
              borderColor: "teal.500",
            }}
            type="password"
            maxLength={3}
            placeholder="Enter CVV"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Cardholder Name</FormLabel>
          <Input
            border="2px solid"
            borderColor={"teal.500"}
            _focus={{
              boxShadow: "none",
              border: "2px solid",
              borderColor: "teal.500",
            }}
            _hover={{
              border: "2px solid",
              borderColor: "teal.500",
            }}
            type="text"
            placeholder="Enter cardholder name"
          />
        </FormControl>
        <Button
          type="submit"
          textTransform={"uppercase"}
          bg="lf.button"
          color="white"
          _hover={{
            color: "lf.black",
            bg: "teal.500",
          }}
        >
          Pay Now
        </Button>
      </Stack>
    </form>
  );
};

export default CardModal;
