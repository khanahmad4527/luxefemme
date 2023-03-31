import React from "react";
import { Box, Circle, Square, Text } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import Loading from "../../utils/Loading";
import Error from "../../utils/Error";

const ProductCarouel = ({ title, data, loading, error }) => {
  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box
      padding="20px"
      bgColor="white"
      w={{ base: "95%", lg: "100%" }}
      margin="20px auto"
    >
      <Text p="10px" fontSize="20px" fontWeight={500} color="lf.teal">
        {title}
      </Text>
      <Box w="95%" margin="auto">
        {loading ? <Loading /> : ""}
        {error ? <Error /> : ""}
        <Slider {...settings}>
          {data &&
            data.map((item) => (
              <ProductCard
                key={Date() + data.title + data.discount}
                {...item}
              />
            ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default ProductCarouel;

const CustomPrevArrow = ({ onClick }) => (
  <Box
    as="button"
    variant="unstyled"
    border="1px solid gray"
    position="absolute"
    zIndex={1}
    left={{ base: "-20px", lg: "0px", xl: "-35px" }}
    p="10px 5px"
    top="50%"
    transform="translateY(-50%)"
    backgroundColor="white"
    size="35px"
    onClick={onClick}
  >
    <IoIosArrowBack size="20px" color="black" />
  </Box>
);

const CustomNextArrow = ({ onClick }) => (
  <Box
    as="button"
    variant="unstyled"
    border="1px solid gray"
    position="absolute"
    zIndex={1}
    right={{ base: "-20px", lg: "0px", xl: "-35px" }}
    p="10px 5px"
    top="50%"
    transform="translateY(-50%)"
    backgroundColor="white"
    size="35px"
    onClick={onClick}
  >
    <IoIosArrowForward size="20px" color="black" />
  </Box>
);
