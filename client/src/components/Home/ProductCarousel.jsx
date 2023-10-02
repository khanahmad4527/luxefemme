import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import Loading from "../../utils/Loading";
import Error from "../../utils/Error";

const ProductCarousel = ({ title, data, loading, error }) => {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
      bgColor={"#FDFDF9"}
      w={{ base: "95%", lg: "100%" }}
      margin="20px auto"
    >
      <Text fontSize="20px" fontWeight={500} color="lf.teal">
        {title}
      </Text>
      <Box w="95%" margin="auto" p="10px 0px">
        {loading ? <Loading /> : ""}
        {error ? <Error /> : ""}
        <Slider {...settings}>
          {data &&
            data.map((item, index) => (
              <ProductCard
                key={"ProductCarousel_ProductCard" + index}
                {...item}
              />
            ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default ProductCarousel;

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
    bgColor={"#FDFDF9"}
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
    bgColor={"#FDFDF9"}
    onClick={onClick}
  >
    <IoIosArrowForward size="20px" color="black" />
  </Box>
);
