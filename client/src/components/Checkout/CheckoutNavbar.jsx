import React, { memo } from "react";
import { Flex, Container, Text, Square, Icon, Box } from "@chakra-ui/react";
import { BsFillShieldLockFill } from "react-icons/bs";
import Logo from "../../utils/Logo";

const CheckoutNavbar = () => {
  return (
    <Container maxW={"7xl"} margin="auto">
      <Flex
        justifyContent={"space-between"}
        alignItems="center"
        display={{ base: "none", lg: "flex" }}
      >
        <Square w="30%">
          <Logo />
        </Square>

        <Square w="30%">
          <Text
            fontSize="28px"
            fontWeight={400}
            color="teal.500"
            textAlign="center"
          >
            Checkout Page
          </Text>
        </Square>

        <Square w="30%">
          <Icon boxSize="8" as={BsFillShieldLockFill} color={"lf.teal"} />
        </Square>
      </Flex>

      <Flex
        flexDir={"column"}
        gap="20px"
        justifyContent={"center"}
        alignItems="center"
        display={{ base: "flex", lg: "none" }}
      >
        <Box>
          <Square>
            <Logo />
          </Square>
        </Box>

        <Flex gap="20px" justifyContent={"space-between"} alignItems="center">
          <Square>
            <Text
              fontSize="28px"
              fontWeight={400}
              color="teal.500"
              textAlign="center"
            >
              Checkout Page
            </Text>
          </Square>

          <Square>
            <Icon boxSize="8" as={BsFillShieldLockFill} color={"lf.teal"} />
          </Square>
        </Flex>
      </Flex>
    </Container>
  );
};

export default memo(CheckoutNavbar);
