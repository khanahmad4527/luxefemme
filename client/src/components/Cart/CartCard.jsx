import {
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { memo } from "react";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCartData, updateCartData } from "../../redux/cart/cart.actions";

const CartCard = ({ item }) => {
  const [qtyValue, setQtyValue] = useState(item.quantity);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleCount = (value) => {
    dispatch(updateCartData(item._id, value));
  };

  const handleDelete = (id) => {
    dispatch(deleteCartData(id));
  };

  return (
    <Stack gap="10px">
      <Divider borderColor="teal.500" borderWidth="1px" />

      <Grid
        p={5}
        w="100%"
        margin="auto"
        justifyContent={"space-between"}
        templateColumns={{
          base: "1fr",
          md: "27% 65% 5%",
          lg: "21% 70% 5%",
        }}
        gap="10px"
        border={"2px solid"}
        borderColor={"teal.500"}
      >
        <GridItem cursor={"pointer"}>
          <Image
            p={2}
            src={item.image}
            w="100%"
            h="200px"
            objectFit="contain"
            onClick={() => navigate(`/product/${item.productId}`)}
          />
        </GridItem>

        <GridItem>
          <Flex
            h="200px"
            flexDirection="column"
            justifyContent="space-between"
            w="100%"
          >
            <Text
              fontSize={18}
              fontWeight={400}
              w="100%"
              noOfLines={{ base: 3, lg: 2 }}
              wordBreak="break-word"
            >
              {item.title}
            </Text>

            <Text fontSize={18} fontWeight={500}>
              Price: <span>&#8377;</span>{" "}
              {item.itemPrice && formatMoney(item.itemPrice)}
            </Text>

            <Text fontSize={18}>
              <span>Color: </span>
              {item.colour}
            </Text>

            <Text fontSize={18}>
              <span>Size: </span>
              {item.size}
            </Text>

            <Flex alignItems={"center"} gap="10px">
              <Select
                w="max"
                border="2px solid"
                borderColor="teal.500"
                _hover={{
                  border: "2px solid",
                  borderColor: "teal.500",
                }}
                outline="none"
                _focus={{
                  boxShadow: "none",
                  border: "2px solid",
                  borderColor: "teal.500",
                }}
                value={qtyValue}
                onChange={(e) => {
                  setQtyValue(+e.target.value);
                  handleCount(+e.target.value);
                }}
              >
                {new Array(10).fill(1).map((_, index) => {
                  return (
                    <option
                      key={"cart_card_qty" + index}
                      value={`${index + 1}`}
                    >{`Qty ${index + 1}`}</option>
                  );
                })}
              </Select>

              <Text>
                Subtotal: <span>&#8377;</span>{" "}
                {item.itemPrice && formatMoney(item.itemPrice * item.quantity)}
              </Text>
            </Flex>
          </Flex>
        </GridItem>

        <GridItem
          padding={{ base: "10px", sm: "10px" }}
          cursor="pointer"
          align="right"
          _hover={{
            transform: "scale(1.1)",
            transition: "all 0.2s ease-in",
          }}
          onClick={() => handleDelete(item._id)}
        >
          <RxCross2 size="30px" />
        </GridItem>
      </Grid>
    </Stack>
  );
};

export default memo(CartCard);

const formatMoney = (amount) => {
  if (amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};
