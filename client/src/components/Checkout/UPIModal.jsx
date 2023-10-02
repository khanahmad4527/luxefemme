import React, { memo } from "react";
import { FormControl, FormLabel, Input, Stack, Button } from "@chakra-ui/react";

const UPIModal = ({ orderConfirmed }) => {
  const handlePayment = (e) => {
    e.preventDefault();
    orderConfirmed();
  };

  return (
    <form onSubmit={handlePayment}>
      <Stack spacing={3}>
        <FormControl isRequired>
          <FormLabel>UPI ID</FormLabel>
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
            placeholder="Enter UPI ID"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Remarks</FormLabel>
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
            placeholder="Enter remarks"
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

export default memo(UPIModal);
