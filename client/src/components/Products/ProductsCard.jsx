import { Flex, Box, Image, Text, Stack, Square } from "@chakra-ui/react";
import { useState, memo, useEffect, useRef } from "react";
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
  const [imageIndex, setImageIndex] = useState(0);
  const [imageSet, setImageSet] = useState(0);
  const [colorSet, setColorSet] = useState(0);
  const [limitValue, setLimitValue] = useState(null);
  const [isWidthChange, setIsWidthChange] = useState(false);

  const navigate = useNavigate();

  const colorContainerRef = useRef(null);

  useEffect(() => {
    const getColorContainerWidth = () => {
      if (colorContainerRef.current) {
        const colorContainerWidth = colorContainerRef.current.offsetWidth - 35;
        setLimitValue(Math.floor(colorContainerWidth / 38));
      }
    };

    getColorContainerWidth();
  }, [isWidthChange, limitValue]);

  useEffect(() => {
    function handleResize() {
      setIsWidthChange((prev) => !prev);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box
      bgColor="white"
      borderWidth="1px"
      rounded="lg"
      color="lf.black"
      _hover={{ shadow: "lg" }}
    >
      <Image
        src={images && images[imageSet][imageIndex]}
        alt="Image belongs to Amazon. Used for educational purposes and showcasing web development skills only."
        w="100%" // width avoid flickering effect during hover
        h={{
          base: "200px",
          sm: "250px",
          md: "200px",
          lg: "400px",
        }}
        display="block"
        margin="auto"
        objectFit="contain"
        cursor="pointer"
        onClick={() => navigate(`/product/${_id}`)}
        onMouseOver={() => setImageIndex(1)}
        onMouseOut={() => setImageIndex(0)}
      />

      <Stack p="6" spacing={2}>
        <Text fontSize={"13px"} fontWeight="semibold">
          {title && title}
        </Text>

        <Text>
          <span>&#8377;</span>
          {price && formatMoney(price)}
        </Text>
      </Stack>

      {colours && colours[colorSet][0] && (
        <Stack p="6" spacing={2}>
          {colours && colours[colorSet][0] && (
            <Stack spacing={2} mb={2}>
              <Text>Color: {colours && colours[colorSet][0]}</Text>
              <Box ref={colorContainerRef}>
                <Flex gap={"10px"} alignItems={"center"}>
                  {colours.length &&
                    colours.slice(0, limitValue).map((item, i) => {
                      return (
                        <Box
                          key={"productscard_color" + i}
                          border={
                            colorSet === i
                              ? "1px solid teal"
                              : "1px solid transparent"
                          }
                          p="2px"
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          cursor="pointer"
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
                  <Square
                    cursor="pointer"
                    onClick={() => navigate(`/product/${_id}`)}
                  >
                    {limitValue && (
                      <Text color={"teal.500"}>
                        {colours.length > limitValue
                          ? `+ ${colours.length - limitValue}`
                          : ""}
                      </Text>
                    )}
                  </Square>
                </Flex>
              </Box>
            </Stack>
          )}
        </Stack>
      )}
    </Box>
  );
}

export default memo(ProductsCard);

const formatMoney = (amount) => {
  if (amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};
