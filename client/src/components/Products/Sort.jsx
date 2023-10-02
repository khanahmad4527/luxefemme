import React, { memo } from "react";
import { Flex, Select, Text } from "@chakra-ui/react";

const Sort = ({
  productPerPageOnChange,
  productPerPage,
  productSortOnChange,
  sort_order,
}) => {
  return (
    <Flex
      w={{ md: "100%", lg: "80%", xl: "50%" }}
      gap="10px"
      flexDirection={{ base: "column", md: "row", lg: "row" }}
      marginLeft="auto"
    >
      <Flex
        alignItems="flex-end"
        justifyContent="right"
        gap="10px"
        w={{ md: "100%", lg: "50%" }}
      >
        <Text>Products Per Page:</Text>
        <Select
          bgColor="white"
          w={{ md: "30%" }}
          value={productPerPage}
          onChange={(e) => productPerPageOnChange(Number(e.target.value))}
        >
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </Select>
      </Flex>

      <Flex
        alignItems="flex-end"
        justifyContent="right"
        gap="10px"
        w={{ md: "100%", lg: "50%" }}
      >
        <Text>Sort:</Text>
        <Select
          bgColor="white"
          w={{ md: "60%", lg: "70%" }}
          value={sort_order}
          onChange={(e) => productSortOnChange(e.target.value)}
        >
          <option value="rating,desc">Popularity</option>
          <option value="price,desc">Price: High to Low</option>
          <option value="price,asc">Price: Low to High</option>
        </Select>
      </Flex>
    </Flex>
  );
};

export default memo(Sort);
