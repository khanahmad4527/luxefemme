import React from "react";
import { Flex, Container, Image, Text, Square, Icon } from "@chakra-ui/react";
import alphaLogo from "../../assets/LuxeFemme-alpha.png";
import { BsFillShieldLockFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const CheckoutNavbar = () => {
  const navigate = useNavigate();
  return (
    <Container maxW={"7xl"} margin="auto">
      <Flex
        w="100%"
        margin="auto"
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Image
          w="30%"
          src={alphaLogo}
          h="100px"
          alt="LuxeFemme"
          cursor="pointer"
          onClick={() => navigate("/")}
        />

        <Text
          fontSize="28px"
          fontWeight={400}
          color="teal.500"
          w="30%"
          textAlign="center"
        >
          Checkout Page
        </Text>

        <Square w="30%">
          <Icon boxSize="8" as={BsFillShieldLockFill} color={"lf.teal"} />
        </Square>
      </Flex>
    </Container>
  );
};

export default CheckoutNavbar;
