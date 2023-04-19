import React, { useState } from "react";
import { Card, CardBody, Image, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ _id, title, images, price }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const navigate = useNavigate();

  return (
    <Card
      w={{
        base: "200px",
        sm: "210px",
        md: "260px",
        lg: "250px",
      }}
      border="1px solid"
      borderColor={"teal.500"}
      bgColor={"#FDFDF9"}
      borderRadius={0}
      margin="auto"
      cursor="pointer"
      onClick={() => navigate(`/product/${_id}`)}
      onMouseOver={() => setImageIndex(1)}
      onMouseOut={() => setImageIndex(0)}
    >
      <CardBody>
        <Image
          src={images && images[0][imageIndex]}
          alt="Image belongs to Amazon. Used for educational purposes and showcasing web development skills only."
          display="block"
          margin="auto"
          h={{ base: "150px", sm: "200px", lg: "300px" }}
          objectFit="contain"
        />
        <Stack mt="6" spacing="3">
          <Text
            color="lf.black"
            fontSize="18px"
            fontWeight={400}
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
          >
            {title}
          </Text>
          <Text fontSize="20px" fontWeight={400} color="lf.black">
            <span>&#8377;</span> {price && formatMoney(price)}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProductCard;

const formatMoney = (amount) => {
  if (amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};
