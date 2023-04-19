import {
  Flex,
  Box,
  Image,
  Icon,
  Text,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cart/cart.actions";
import { useNavigate } from "react-router-dom";

function ProductsCard({
  _id,
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
}) {
  const [isAdded, setIsAdded] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();

  const { cartData } = useSelector((store) => store.cart);

  const { isAuth } = useSelector((store) => store.auth);

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
    if (isAuth) {
      for (let i = 0; i < cartData.length; i++) {
        if (cartData[i].productId === _id) {
          setIsAdded(true);
        }
      }
    }
  }, [_id, cartData, isAuth]);

  return (
    <Box
      bgColor="white"
      borderWidth="1px"
      rounded="lg"
      color="lf.black"
      cursor="pointer"
      _hover={{ shadow: "lg" }}
    >
      <Image
        src={image && image}
        alt="Image belongs to Amazon. Used for educational purposes and showcasing web development skills only."
        w={{
          base: "200px",
          sm: "250px",
          md: "350px",
          lg: "400px",
        }}
        h={{
          base: "200px",
          sm: "250px",
          md: "350px",
          lg: "400px",
        }}
        p="10px"
        display="block"
        margin="auto"
        objectFit="contain"
        onClick={() => navigate(`/product/${_id}`)}
      />

      <Stack p="6" spacing={2}>
        <Flex mt="1" justifyContent="space-between" alignContent="center">
          <Text
            fontSize={{ base: "lg", sm: "20px", md: "20px" }}
            fontWeight="semibold"
            width={{
              base: "150px",
              sm: "230px",
              md: "300px",
              lg: "300px",
            }}
            isTruncated
          >
            {title && title}
          </Text>

          {isAdded ? (
            <Box
              display={{ base: "none", lg: "flex" }}
              color="sm.buff"
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
              <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
            </Box>
          ) : (
            <Box
              display={{ base: "none", lg: "flex" }}
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
                    productId: _id,
                    title,
                    category,
                    itemPrice: price,
                    quantity: 1,
                    totalPrice: price * 1,
                    image,
                    description,
                  });
                }
              }}
            >
              <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
            </Box>
          )}
        </Flex>

        <Flex justifyContent="space-between" alignItems="center">
          <Rating rating={rating && rating} numReviews={reviews && reviews} />
          <Box display={{ base: "none", lg: "block" }}>
            <Text textDecoration="line-through" textAlign="right">
              <span>&#8377;</span>
              {price && formatMoney(price)}
            </Text>
            <Text fontSize="20px">
              <span style={{ color: "red" }}>-{discount}%</span>{" "}
              <span>&#8377;</span>
              {discountPrice && formatMoney(discountPrice)}
            </Text>
          </Box>
        </Flex>

        <Flex
          justifyContent="space-between"
          alignItems="center"
          display={{ base: "flex", lg: "none" }}
        >
          <Box>
            <Text fontSize="20px">
              <span style={{ color: "red" }}>-{discount}%</span>{" "}
              <span>&#8377;</span>
              {discountPrice && formatMoney(discountPrice)}
            </Text>
            <Text textDecoration="line-through">
              <span>&#8377;</span>
              {price && formatMoney(price)}
            </Text>
          </Box>

          {isAdded ? (
            <Box
              color="sm.buff"
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
              <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
            </Box>
          ) : (
            <Box
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
                    productId: _id,
                    title,
                    category,
                    itemPrice: price,
                    quantity: 1,
                    totalPrice: price * 1,
                    image,
                    description,
                  });
                }
              }}
            >
              <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
            </Box>
          )}
        </Flex>
      </Stack>
    </Box>
  );
}

export default ProductsCard;

function Rating({ rating, numReviews }) {
  return (
    <Flex alignItems="start" color="teal.500">
      <Flex>
        {Array(5)
          .fill("")
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={Date() + Math.random() + i}
                  style={{ marginLeft: "1" }}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return (
                <BsStarHalf
                  key={Date() + Math.random() + i}
                  style={{ marginLeft: "1" }}
                />
              );
            }
            return (
              <BsStar
                key={Date() + Math.random() + i}
                style={{ marginLeft: "1" }}
              />
            );
          })}
      </Flex>

      <Text color="lf.black" fontSize="sm" ml="2">
        {numReviews} review{numReviews > 1 && "s"}
      </Text>
    </Flex>
  );
}

const formatMoney = (amount) => {
  if (amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};
