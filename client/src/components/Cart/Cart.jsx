import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../../redux/cart/cart.actions";
import Loading from "../../utils/Loading";
import Error from "../../utils/Error";
import CartCard from "./CartCard";
import { useNavigate } from "react-router-dom";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const [subtotal, setSubtotal] = useState(0);

  const { cartGetIsLoading, cartGetIsError, cartData } = useSelector(
    (store) => store.cart
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    /**********    page will always loads at top position   ******************/
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (cartData.length === 0) {
      dispatch(getCartData());
    }
  }, [cartData.length, dispatch]);

  useEffect(() => {
    let subtotal = 0;

    for (let i = 0; i < cartData.length; i++) {
      subtotal += cartData[i].quantity * cartData[i].itemPrice;
    }
    setSubtotal(subtotal);
  }, [cartData]);

  if (cartGetIsLoading) {
    return (
      <Flex w="100%" h="100vh">
        <Loading />
      </Flex>
    );
  } else if (cartGetIsError) {
    return (
      <Flex w="100%" h="100vh">
        <Error />
      </Flex>
    );
  } else {
    return (
      <Container maxW={"8xl"} m="40px auto">
        <Flex
          color={"lf.black"}
          justifyContent={"space-between"}
          gap="15px"
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Flex
            flexDirection={"column"}
            gap="10px"
            w={{ base: "100%", lg: "70%" }}
            padding="20px"
          >
            <Text fontSize={30} fontWeight={500}>
              Basket
            </Text>
            {cartData && cartData.length === 0 ? (
              <EmptyCart />
            ) : (
              cartData.length &&
              cartData.map((item) => {
                return <CartCard key={item._id} item={item} />;
              })
            )}
          </Flex>

          <Flex
            flexDirection={"column"}
            gap="10px"
            w={{ base: "100%", lg: "30%" }}
            h="max-content"
            padding="20px"
          >
            <Text fontSize="30px">Total</Text>

            <Flex h="100px" flexDirection="column" gap="10px">
              <Flex justifyContent="space-between">
                <Text fontWeight={500}>Sub-total</Text>
                <Text fontWeight={500}>
                  <span>&#8377;</span> {subtotal && formatMoney(subtotal)}
                </Text>
              </Flex>

              <Flex justifyContent="space-between">
                <Text fontWeight={500}>Delivery</Text>
                <Text>
                  <AiOutlineExclamationCircle />
                </Text>
              </Flex>
            </Flex>

            <Divider borderColor="teal.500" borderWidth="1px" />

            <Button
              rounded={"none"}
              w={"full"}
              size={"lg"}
              py={"7"}
              textTransform={"uppercase"}
              bg="lf.button"
              color="white"
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
                color: "lf.black",
                bg: "teal.500",
              }}
              onClick={() => navigate("/checkout")}
              isDisabled={subtotal === 0 ? true : false}
            >
              Buy
            </Button>

            <Box>
              <Text fontSize="20px" fontWeight={500}>
                We Accept:
              </Text>
              <Flex justifyContent="space-between" alignItems="center">
                <Box w="70px" h="30px">
                  <Image
                    src="https://i.imgur.com/JQYL5RQ.png"
                    w="100%"
                    h="100%"
                    objectFit={"contain"}
                  />
                </Box>

                <Box w="50px" h="30px">
                  <Image
                    src="https://i.imgur.com/jArAalY.png"
                    w="100%"
                    h="100%"
                    objectFit={"contain"}
                  />
                </Box>

                <Box w="50px" h="30px">
                  <Image
                    src="https://i.imgur.com/kvM8lRS.png"
                    w="100%"
                    h="100%"
                    objectFit={"contain"}
                  />
                </Box>

                <Box w="50px" h="30px">
                  <Image
                    src="https://i.imgur.com/NJBCVG0.png"
                    w="100%"
                    h="100%"
                    objectFit={"contain"}
                  />
                </Box>

                <Box w="50px" h="30px">
                  <Image
                    src="https://i.imgur.com/YmasP9j.png"
                    w="100%"
                    h="100%"
                    objectFit={"contain"}
                  />
                </Box>

                <Box w="50px" h="30px">
                  <Image
                    src="https://i.imgur.com/tu4reZE.png"
                    w="100%"
                    h="100%"
                    objectFit={"contain"}
                  />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Container>
    );
  }
};

export default Cart;

const formatMoney = (amount) => {
  if (amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};
