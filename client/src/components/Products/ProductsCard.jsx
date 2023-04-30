import {
  Flex,
  Box,
  Image,
  Text,
  Stack,
  Square,
  Circle,
} from "@chakra-ui/react";
import { useState } from "react";
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

  const navigate = useNavigate();

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
        src={images && images[imageSet][imageIndex]}
        alt="Image belongs to Amazon. Used for educational purposes and showcasing web development skills only."
        w={{
          base: "200px",
          sm: "250px",
          md: "200px",
          lg: "400px",
        }}
        h={{
          base: "200px",
          sm: "250px",
          md: "200px",
          lg: "400px",
        }}
        display="block"
        margin="auto"
        objectFit="contain"
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

      <Stack p="6" spacing={2}>
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
      </Stack>
    </Box>
  );
}

export default ProductsCard;

const formatMoney = (amount) => {
  if (amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};
