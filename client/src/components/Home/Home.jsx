import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Flex, Grid, Link, Square, Image } from "@chakra-ui/react";
import i1 from "../../assets/1.jpg";
import i2 from "../../assets/2.gif";
import i3 from "../../assets/3.jpg";
import i4 from "../../assets/4.jpg";
import i5 from "../../assets/5.jpg";
import i6 from "../../assets/6.jpg";
import i7 from "../../assets/7.jpg";
import i8 from "../../assets/8.jpg";
import i9 from "../../assets/9.jpg";
import i10 from "../../assets/10.jpg";
import i11 from "../../assets/11.jpg";
import { getDresses, getShoes } from "../../redux/home/home.action";
import ProductCarousel from "./ProductCarousel";

const Home = () => {
  const {
    isLoadingDress,
    isErrorDress,
    isLoadingShoes,
    isErrorShoes,
    dressData,
    shoesData,
  } = useSelector((store) => store.home);

  const dispatch = useDispatch();

  useEffect(() => {
    /**********    page will always loads at top position   ******************/
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!dressData.length) {
      dispatch(getDresses());
    }

    if (!shoesData.length) {
      dispatch(getShoes());
    }
  }, [dispatch, dressData.length, shoesData.length]);

  return (
    <Flex flexDirection="column" w="92%" gap="30px" margin={"40px auto"}>
      <Flex
        justifyContent={"space-between"}
        gap="20px"
        w="100%"
        margin={"auto"}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Box w={{ base: "100%", lg: "70%" }} position={"relative"}>
          <Image src={i1} w="100%" h="100%" />
          <Square
            position={"absolute"}
            bottom={5}
            right={0}
            left={0}
            bgColor={"#FDFDF9"}
            p="10px"
            w="max"
            margin={"auto"}
          >
            <Link
              fontSize={"13px"}
              fontWeight={400}
              textTransform="capitalize"
              href={`/products?category=dress`}
            >
              the reformation shop
            </Link>
          </Square>
        </Box>
        <Box w={{ base: "100%", lg: "30%" }}>
          <Image src={i2} w="100%" h="100%" />
        </Box>
      </Flex>

      <Grid
        bgColor={"#FDFDF9"}
        justifyContent={"space-between"}
        alignItems="center"
        gap="20px"
        templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(4,1fr)" }}
        alignSelf={"center"}
        w="100%"
      >
        <Box position={"relative"}>
          <Image src={i3} w="100%" h="100%" />
          <Square
            position={"absolute"}
            bottom={5}
            right={0}
            left={0}
            bgColor={"#FDFDF9"}
            p="10px"
            w="max"
            margin={"auto"}
          >
            <Link
              fontSize={"13px"}
              fontWeight={400}
              textTransform="capitalize"
              href={`/products?category=dress`}
            >
              Shop Dresses
            </Link>
          </Square>
        </Box>

        <Box position={"relative"}>
          <Image src={i4} w="100%" h="100%" />
          <Square
            position={"absolute"}
            bottom={5}
            right={0}
            left={0}
            bgColor={"#FDFDF9"}
            p="10px"
            w="max"
            margin={"auto"}
          >
            <Link
              fontSize={"13px"}
              fontWeight={400}
              textTransform="capitalize"
              href={`/products?category=dress`}
            >
              Shop New Clothing
            </Link>
          </Square>
        </Box>

        <Box position={"relative"}>
          <Image src={i5} w="100%" h="100%" />
          <Square
            position={"absolute"}
            bottom={5}
            right={0}
            left={0}
            bgColor={"#FDFDF9"}
            p="10px"
            w="max"
            margin={"auto"}
          >
            <Link
              fontSize={"13px"}
              fontWeight={400}
              textTransform="capitalize"
              href={`/products?category=jewellery`}
            >
              Shop Jewelry
            </Link>
          </Square>
        </Box>

        <Box position={"relative"}>
          <Image src={i6} w="100%" h="100%" />
          <Square
            position={"absolute"}
            bottom={5}
            right={0}
            left={0}
            bgColor={"#FDFDF9"}
            p="10px"
            w="max"
            margin={"auto"}
          >
            <Link
              fontSize={"13px"}
              fontWeight={400}
              textTransform="capitalize"
              href={`/products?category=dress`}
            >
              Shop Reformation
            </Link>
          </Square>
        </Box>
      </Grid>

      <Flex
        justifyContent={"space-between"}
        gap="20px"
        w="100%"
        margin={"auto"}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Box w={{ base: "100%", lg: "70%" }} position={"relative"}>
          <Image src={i7} w="100%" h="100%" />
          <Square
            position={"absolute"}
            bottom={5}
            right={0}
            left={0}
            bgColor={"#FDFDF9"}
            p="10px"
            w="max"
            margin={"auto"}
          >
            <Link
              fontSize={"13px"}
              fontWeight={400}
              textTransform="capitalize"
              href={`/products?category=dress`}
            >
              the reformation shop
            </Link>
          </Square>
        </Box>
        <Box w={{ base: "100%", lg: "30%" }} position={"relative"}>
          <Image src={i8} w="100%" h="100%" />
          <Square
            position={"absolute"}
            bottom={5}
            right={0}
            left={0}
            bgColor={"#FDFDF9"}
            p="10px"
            w="max"
            margin={"auto"}
          >
            <Link
              fontSize={"13px"}
              fontWeight={400}
              textTransform="capitalize"
              href={`/products?category=dress`}
            >
              Shop Weddings
            </Link>
          </Square>
        </Box>
      </Flex>

      <Flex
        justifyContent={"space-between"}
        gap="20px"
        w="100%"
        margin={"auto"}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Box w={{ base: "100%", lg: "50%" }} position={"relative"}>
          <Image src={i9} w="100%" h="100%" />
          <Square
            position={"absolute"}
            bottom={5}
            right={0}
            left={0}
            bgColor={"#FDFDF9"}
            p="10px"
            w="max"
            margin={"auto"}
          >
            <Link
              fontSize={"13px"}
              fontWeight={400}
              textTransform="capitalize"
              href={`/products?category=candles`}
            >
              Mother's Day Gifts
            </Link>
          </Square>
        </Box>
        <Box w={{ base: "100%", lg: "50%" }} position={"relative"}>
          <Image src={i10} w="100%" h="100%" />
          <Square
            position={"absolute"}
            bottom={5}
            right={0}
            left={0}
            bgColor={"#FDFDF9"}
            p="10px"
            w="max"
            margin={"auto"}
          >
            <Link
              fontSize={"13px"}
              fontWeight={400}
              textTransform="capitalize"
              href={`/products?category=furniture`}
            >
              Shop Bedding
            </Link>
          </Square>
        </Box>
      </Flex>

      <Flex justifyContent={"space-between"} gap="20px" w="100%">
        <Box w="100%" position={"relative"}>
          <Image src={i11} w="100%" h="100%" />
          <Square
            position={"absolute"}
            bottom={5}
            right={0}
            left={0}
            bgColor={"#FDFDF9"}
            p="10px"
            w="max"
            margin={"auto"}
          >
            <Link
              fontSize={"13px"}
              fontWeight={400}
              textTransform="capitalize"
              href={`/products?category=dress`}
            >
              Shop New Clothing
            </Link>
          </Square>
        </Box>
      </Flex>

      <ProductCarousel
        title="Dresses"
        data={dressData}
        loading={isLoadingDress}
        error={isErrorDress}
      />

      <ProductCarousel
        title="Shoes"
        data={shoesData}
        loading={isLoadingShoes}
        error={isErrorShoes}
      />
    </Flex>
  );
};

export default Home;
