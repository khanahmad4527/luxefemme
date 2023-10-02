import { Button } from "@chakra-ui/react";
import React, { memo } from "react";

const COD = ({ orderConfirmed }) => {
  const handlePayment = (e) => {
    e.preventDefault();
    orderConfirmed();
  };
  return (
    <Button
      textTransform={"uppercase"}
      bg="lf.button"
      color="white"
      _hover={{
        color: "lf.black",
        bg: "teal.500",
      }}
      onClick={handlePayment}
    >
      Confirm Order
    </Button>
  );
};

export default memo(COD);
