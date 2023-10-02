import React, { memo } from "react";
import { Flex, Image, Square } from "@chakra-ui/react";

const ImagesContainer = ({ images, imageSet, imageIndex, setImageIndex }) => {
  return (
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
              key={"ImagesContainer_images"+index}
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
  );
};

export default memo(ImagesContainer);
