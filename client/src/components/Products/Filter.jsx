import React, { useEffect, useState, memo } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Text,
  Stack,
  CheckboxGroup,
  Checkbox,
  Radio,
  RadioGroup,
  Flex,
  Button,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const Filter = ({
  productCategoryOnchange,
  category,
  productBrandOnchange,
  brand,
  productPriceOnchange,
  price,
  productDiscountOnchange,
  discount,
  productRatingOnchange,
  rating,
  resetFilter,
}) => {
  const [canClear, setCanClear] = useState(true);

  const categories = [
    { name: "dress", displayName: "Dress" },
    { name: "candles", displayName: "Candles" },
    { name: "jewellery", displayName: "Jewellery" },
    { name: "beauty", displayName: "Beauty" },
    { name: "furniture", displayName: "Furniture" },
    { name: "shoes", displayName: "Shoes" },
  ];

  const clearFilter = () => {
    if (
      category.length !== 0 ||
      brand.length !== 0 ||
      price !== "undefined,undefined" ||
      discount !== "undefined,undefined" ||
      rating !== "undefined,undefined"
    ) {
      productCategoryOnchange([]);
      productBrandOnchange([]);
      productPriceOnchange("*");
      productDiscountOnchange("*");
      productRatingOnchange("*");
      resetFilter();
    }
  };

  /********** determine if we can use clear filter button ******************/

  useEffect(() => {
    if (
      category.length === 0 &&
      brand.length === 0 &&
      price === "undefined,undefined" &&
      discount === "undefined,undefined" &&
      rating === "undefined,undefined"
    ) {
      setCanClear(true);
    } else {
      setCanClear(false);
    }
  }, [category.length, brand.length, price, discount, rating]);

  return (
    <Stack bgColor="white" padding="10px" spacing="10px" color="lf.black">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        flexWrap={"wrap"}
      >
        <Text fontSize={18} fontWeight={400} textAlign={"left"}>
          Filter By
        </Text>
        <Button
          color="lf.black"
          colorScheme="teal"
          isDisabled={canClear}
          onClick={clearFilter}
        >
          Clear Filter
        </Button>
      </Flex>

      <Box h={"auto"}>
        <Accordion allowMultiple>
          {/* start hers */}

          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <Text fontSize={16} fontWeight={400}>
                        Category
                      </Text>
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <CheckboxGroup
                    colorScheme="teal"
                    value={category}
                    onChange={productCategoryOnchange}
                  >
                    <Stack spacing={1} direction={"column"}>
                      {categories.map((category, index) => {
                        return (
                          <Checkbox
                            value={category.name}
                            key={"filter_category_checkbox" + index}
                          >
                            {category.displayName}
                          </Checkbox>
                        );
                      })}
                    </Stack>
                  </CheckboxGroup>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <Text fontSize={16} fontWeight={400}>
                        Price
                      </Text>
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <RadioGroup
                    colorScheme="teal"
                    value={price}
                    onChange={productPriceOnchange}
                  >
                    <Stack spacing={1} direction={"column"}>
                      <Radio value="100,1000">100 - 1000</Radio>
                      <Radio value="1000,5000">1000 - 5000</Radio>
                      <Radio value="5000,10000">5000 - 10000</Radio>
                      <Radio value="10000,15000">10000 - 15000</Radio>
                      <Radio value="15000,20000">15000 - 20000</Radio>
                      <Radio value="20000,30000">20000 - 30000</Radio>
                      <Radio value="30000,50000">30000 - 50000</Radio>
                      <Radio value="50000,100000000000">Above 50000</Radio>
                    </Stack>
                  </RadioGroup>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <Text fontSize={16} fontWeight={400}>
                        Discount
                      </Text>
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <RadioGroup
                    colorScheme="teal"
                    value={discount}
                    onChange={productDiscountOnchange}
                  >
                    <Stack spacing={1} direction={"column"}>
                      <Radio value="5,10">5 - 10</Radio>
                      <Radio value="10,15">10 - 15</Radio>
                      <Radio value="15,30">15 - 30</Radio>
                      <Radio value="30,60">30 - 60</Radio>
                      <Radio value="60,80">60 - 80</Radio>
                      <Radio value="80,100">Above 80</Radio>
                    </Stack>
                  </RadioGroup>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <Text fontSize={16} fontWeight={400}>
                        Brand
                      </Text>
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <CheckboxGroup
                    colorScheme="teal"
                    value={brand}
                    onChange={productBrandOnchange}
                  >
                    <Stack spacing={1} direction={"column"}>
                      <Checkbox value="Vaararo">Vaararo</Checkbox>
                      <Checkbox value="AASK">AASK</Checkbox>
                      <Checkbox value="BATA">BATA</Checkbox>
                      <Checkbox value="Peora">Peora</Checkbox>
                      <Checkbox value="ZENEME">ZENEME</Checkbox>
                      <Checkbox value="MyGlamm">MyGlamm</Checkbox>
                      <Checkbox value="Ikea">Ikea</Checkbox>
                      <Checkbox value="Lymio">Lymio</Checkbox>
                      <Checkbox value="BIBA">BIBA</Checkbox>
                      <Checkbox value="Homesake">Homesake</Checkbox>
                      <Checkbox value="Em5">Em5</Checkbox>
                      <Checkbox value="IRIS">IRIS</Checkbox>
                      <Checkbox value="Sparx">Sparx</Checkbox>
                      <Checkbox value="Campus">Campus</Checkbox>
                      <Checkbox value="Corocraft">Corocraft</Checkbox>
                      <Checkbox value="Clara">Clara</Checkbox>
                      <Checkbox value="HUDA">HUDA</Checkbox>
                      <Checkbox value="ThinkArtDecor">ThinkArtDecor</Checkbox>
                      <Checkbox value="Amayra">Amayra</Checkbox>
                      <Checkbox value="Ayat">Ayat</Checkbox>
                      <Checkbox value="MARS">MARS</Checkbox>
                    </Stack>
                  </CheckboxGroup>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <Text fontSize={16} fontWeight={400}>
                        Rating
                      </Text>
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <RadioGroup
                    colorScheme="teal"
                    value={rating}
                    onChange={productRatingOnchange}
                  >
                    <Stack spacing={1} direction={"column"}>
                      {[4, 3, 2, 1].map((index) => {
                        return (
                          <Radio
                            value={`${index},${index + 1}`}
                            key={"filter_radio" + index}
                          >
                            <Flex
                              color="teal.500"
                              alignItems={"center"}
                              gap="5px"
                            >
                              <Flex>
                                {Array(5)
                                  .fill("")
                                  .map((_, i) => {
                                    const roundedRating =
                                      Math.round(index * 2) / 2;
                                    if (roundedRating - i >= 1) {
                                      return (
                                        <BsStarFill
                                          key={"filter_rating_BsStarFill" + i}
                                          style={{ marginLeft: "1" }}
                                        />
                                      );
                                    }
                                    if (roundedRating - i === 0.5) {
                                      return (
                                        <BsStarHalf
                                          key={"filter_rating_BsStarHalf" + i}
                                          style={{ marginLeft: "1" }}
                                        />
                                      );
                                    }
                                    return (
                                      <BsStar
                                        key={"filter_rating_BsStar" + i}
                                        style={{ marginLeft: "1" }}
                                      />
                                    );
                                  })}
                              </Flex>
                              <Text color="lf.black">& up</Text>
                            </Flex>
                          </Radio>
                        );
                      })}
                    </Stack>
                  </RadioGroup>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          {/* ends here */}
        </Accordion>
      </Box>
    </Stack>
  );
};

export default memo(Filter);
