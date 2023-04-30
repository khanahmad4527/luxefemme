import {
  Box,
  Stack,
  Text,
  Image,
  Flex,
  Heading,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  Grid,
  Square,
  Button,
  GridItem,
  useToast,
  Circle,
  Select,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { MdLocalShipping, MdPadding } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, getCartData } from "../../redux/cart/cart.actions";
import { getProductDetail } from "../../redux/product-detail/productDetail.actions";
import Error from "../../utils/Error";
import Loading from "../../utils/Loading";

export default function ProductDetail() {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageSet, setImageSet] = useState(0);
  const [colorSet, setColorSet] = useState(0);
  const [sizeSet, setSizeSet] = useState(0);
  const [qtyValue, setQtyValue] = useState(1);
  const toast = useToast();

  const { id } = useParams();

  const { isLoading, isError, productDetailData } = useSelector(
    (store) => store.productDetail
  );

  const {
    title,
    category,
    price,
    discount,
    discountPrice,
    rating,
    reviews,
    image,
    images,
    colours,
    sizes,
    quantity,
    description,
    brand,
  } = productDetailData;

  const { isAuth } = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast({
      title: "Added to cart",
      description: "We've added the product in your cart",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

  useEffect(() => {
    /**********    page will always loads at top position   ******************/
    window.scrollTo(0, 0);
    dispatch(getProductDetail(id && id));
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <Flex w="100%" h="100vh">
        <Loading />
      </Flex>
    );
  } else if (isError) {
    return (
      <Flex w="100%" h="100vh">
        <Error />
      </Flex>
    );
  } else
    return (
      <Grid
        p={10}
        w="100%"
        margin="auto"
        templateColumns={{ base: "1fr", lg: "0fr 4fr 5fr" }}
        gap={10}
      >
        <GridItem>
          <Flex
            justifyContent="center"
            flexDirection={{ base: "row", lg: "column" }}
            gap="10px"
            flexWrap="wrap"
          >
            {images &&
              images[imageSet].map((image, index) => {
                return (
                  <Square
                    key={Date() + Math.random()}
                    w="50px"
                    h="60px"
                    border="1px solid"
                    borderColor="teal.500"
                    {...(imageIndex === index
                      ? {
                          border: "1px solid",
                          borderColor: "teal.500",
                          boxShadow: "0px 0px 5px 2px rgba(0, 128, 128, 1)",
                        }
                      : {})}
                    tabIndex={0}
                    onFocus={() => setImageIndex(index)}
                    onMouseOver={() => setImageIndex(index)}
                  >
                    <Image
                      p={1}
                      src={image}
                      w="100%"
                      h="100%"
                      objectFit="contain"
                      bgColor="white"
                    />
                  </Square>
                );
              })}
          </Flex>
        </GridItem>

        <GridItem>
          <Flex w="100%">
            <Image
              p={5}
              bgColor="white"
              src={(images && images[imageSet][imageIndex]) || image}
              alt="Image belongs to Amazon. Used for educational purposes and showcasing web development skills only."
              align="center"
              w="100%"
              h={{ base: "100%", sm: "400px", lg: "500px" }}
              objectFit="contain"
            />
          </Flex>
        </GridItem>

        <GridItem>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                wordBreak="break-word"
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                {title && title}
              </Heading>
            </Box>

            <Box as={"header"}>
              <Box color="teal.500" fontWeight={300} fontSize={"2xl"}>
                <Rating rating={4} />
              </Box>
            </Box>

            <Box as={"header"}>
              <Text fontWeight={500} fontSize={"3xl"}>
                <span>&#8377;</span>{" "}
                {discountPrice && formatMoney(discountPrice)}
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={<StackDivider />}
            >
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color="teal.500"
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Product Details
                </Text>

                {colours && (
                  <Stack spacing={2} mb={2}>
                    <Text>Color: {colours && colours[colorSet][0]}</Text>
                    <Flex gap={"10px"} flexWrap={"wrap"}>
                      {colours &&
                        colours.map((item, i) => {
                          return (
                            <Box
                              key={Math.random() + Date.now() + i}
                              border={
                                colorSet === i
                                  ? "1px solid teal"
                                  : "1px solid transparent"
                              }
                              p="2px"
                              display={"flex"}
                              justifyContent={"center"}
                              alignItems={"center"}
                              w="28px"
                              h="28px"
                              borderRadius={"100px"}
                            >
                              <Box
                                bg={item[1]}
                                w="20px"
                                h="20px"
                                borderRadius={"100px"}
                                onClick={() => {
                                  setColorSet(i);
                                  setImageSet(i);
                                  setImageIndex(0);
                                }}
                              ></Box>
                            </Box>
                          );
                        })}
                    </Flex>
                  </Stack>
                )}

                {sizes && (
                  <Stack spacing={2} mb={2}>
                    <Text>Size: {sizes && sizes[sizeSet]}</Text>
                    <Flex gap={"10px"}>
                      {sizes &&
                        sizes.map((item, i) => {
                          return (
                            <Square
                              key={Math.random() + Date.now() + i}
                              border={
                                sizeSet === i
                                  ? "2px solid teal"
                                  : "2px solid transparent"
                              }
                              padding={"10px"}
                              bgColor={"lightgray"}
                              minW={"35px"}
                              minH={"35px"}
                              onClick={() => {
                                setSizeSet(i);
                              }}
                            >
                              {item}
                            </Square>
                          );
                        })}
                    </Flex>
                  </Stack>
                )}

                <Select
                  w="max"
                  margin="2px 0px"
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
                  }}
                >
                  {new Array(10).fill(1).map((_, index) => {
                    return (
                      <option
                        key={Date() + Math.random()}
                        value={`${index + 1}`}
                      >{`Qty ${index + 1}`}</option>
                    );
                  })}
                </Select>

                <List spacing={2}>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Brand:
                    </Text>{" "}
                    {brand && brand}
                  </ListItem>
                  <ListItem wordBreak={"break-word"}>
                    <Text as={"span"} fontWeight={"bold"}>
                      Description:
                    </Text>{" "}
                    {description && description}
                  </ListItem>
                </List>
              </Box>
            </Stack>

            <Button
              rounded={"none"}
              w={"full"}
              mt={8}
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
              onClick={() => {
                if (!isAuth) {
                  toast({
                    title: "Kindly login",
                    description: "Please login first to add products",
                    status: "warning",
                    duration: 2000,
                    isClosable: true,
                    position: "top",
                  });
                } else {
                  handleAddToCart({
                    productId: id,
                    title,
                    category,
                    itemPrice: discountPrice,
                    quantity: qtyValue,
                    totalPrice: discountPrice * qtyValue,
                    image: images[colorSet][0],
                    colour: colours[colorSet][0],
                    size: sizes[sizeSet],
                    description,
                  });
                }
              }}
            >
              Add to cart
            </Button>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </GridItem>
      </Grid>
    );
}

function Rating({ rating }) {
  return (
    <Flex alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i + Date() + Math.random()}
                style={{ marginLeft: "1" }}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return (
              <BsStarHalf
                key={i + Date() + Math.random()}
                style={{ marginLeft: "1" }}
              />
            );
          }
          return (
            <BsStar
              key={i + Date() + Math.random()}
              style={{ marginLeft: "1" }}
            />
          );
        })}
    </Flex>
  );
}

const formatMoney = (amount) => {
  if (amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};
