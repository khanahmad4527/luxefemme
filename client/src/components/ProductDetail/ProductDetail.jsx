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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { MdLocalShipping } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, getCartData } from "../../redux/cart/cart.actions";
import { getProductDetail } from "../../redux/product-detail/productDetail.actions";
import Error from "../../utils/Error";
import Loading from "../../utils/Loading";

export default function ProductDetail() {
  const [imageIndex, setImageIndex] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
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

  const { cartGetIsLoading, cartGetIsError, cartData } = useSelector(
    (store) => store.cart
  );

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    setIsAdded(true);
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
    dispatch(getProductDetail(id));
  }, []);

  useEffect(() => {
    if (cartData && cartData.length === 0) {
      dispatch(getCartData());
    }

    for (let i = 0; i < cartData.length; i++) {
      if (cartData[i].productId === id) {
        setIsAdded(true);
      }
    }
  }, [cartData.length]);

  if (isLoading || cartGetIsLoading) {
    return (
      <Flex w="100%" h="100vh">
        <Loading />
      </Flex>
    );
  } else if (isError || cartGetIsError) {
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
              images.map((image, index) => {
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
              src={(images && images[imageIndex]) || image}
              alt="Image belongs to Amazon. Used for educatinal purposes and showcasing web development skills only."
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
            {isAdded ? (
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
                onClick={() =>
                  toast({
                    title: "Product in cart",
                    description: "Product is already in the cart",
                    status: "warning",
                    duration: 2000,
                    isClosable: true,
                    position: "top",
                  })
                }
              >
                In Cart
              </Button>
            ) : (
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
                onClick={() =>
                  handleAddToCart({
                    productId: id,
                    title,
                    category,
                    itemPrice: discountPrice,
                    quantity: 1,
                    totalPrice: discountPrice * 1,
                    image,
                    colour: colours[0][0],
                    size: sizes[0],
                    description,
                  })
                }
              >
                Add to cart
              </Button>
            )}

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
