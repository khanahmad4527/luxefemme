import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Square,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useMediaQuery,
  VStack,
  Text,
} from "@chakra-ui/react";
import Filter from "./Filter";
import Sort from "./Sort";
import ProductsCard from "./ProductsCard";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/products/products.action";
import Loading from "../../utils/Loading";
import Error from "../../utils/Error";
import { useLocation, useSearchParams } from "react-router-dom";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [productPerPage, setProductPerPage] = useState(
    Number(searchParams.get("_limit")) || 10
  );
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("_page")) || 1
  );
  const [q, setQ] = useState(searchParams.get("q"));
  const [sort, setSort] = useState(searchParams.get("_sort") || "rating");
  const [order, setOrder] = useState(searchParams.get("_order") || "desc");
  const [category, setCategory] = useState(searchParams.getAll("category"));
  const [brand, setBrand] = useState(searchParams.getAll("brand"));
  const [price_lte, setPrice_lte] = useState(
    searchParams.get("price_lte") ? searchParams.get("price_lte") : undefined
  );
  const [price_gte, setPrice_gte] = useState(
    searchParams.get("price_gte") ? searchParams.get("price_gte") : undefined
  );
  const [discount_lte, setDiscount_lte] = useState(
    searchParams.get("discount_lte")
      ? searchParams.get("discount_lte")
      : undefined
  );
  const [discount_gte, setDiscount_gte] = useState(
    searchParams.get("discount_gte")
      ? searchParams.get("discount_gte")
      : undefined
  );
  const [rating_lte, setRating_lte] = useState(
    searchParams.get("rating_lte") ? searchParams.get("rating_lte") : undefined
  );
  const [rating_gte, setRating_gte] = useState(
    searchParams.get("rating_gte") ? searchParams.get("rating_gte") : undefined
  );

  const { isLoading, isError, totalProductCount, productsData } = useSelector(
    (store) => store.products
  );

  const dispatch = useDispatch();

  const paginate = (value) => {
    setCurrentPage(Number(value));
    //searchParams.set("_page", value);
  };

  const productPerPageOnChange = (value) => {
    setProductPerPage(Number(value));
    setCurrentPage(1);
  };

  const productSortOnChange = (value) => {
    const splitedValue = value.split(",");
    setSort(splitedValue[0]);
    setOrder(splitedValue[1]);
    setCurrentPage(1);
  };

  const productCategoryOnchange = (value) => {
    if (value === "*") {
      setCategory([]);
      setCurrentPage(1);
    } else {
      setCategory(value);
      setCurrentPage(1);
    }
  };

  const productBrandOnchange = (value) => {
    if (value === "*") {
      setBrand([]);
      setCurrentPage(1);
    } else {
      setBrand(value);
      setCurrentPage(1);
    }
  };

  const productPriceOnchange = (value) => {
    if (value === "*") {
      setPrice_gte(undefined);
      setPrice_lte(undefined);
      setCurrentPage(1);
    } else {
      const splitedValue = value.split(",");
      setPrice_gte(splitedValue[0]);
      setPrice_lte(splitedValue[1]);
      setCurrentPage(1);
    }
  };

  const productDiscountOnchange = (value) => {
    if (value === "*") {
      setDiscount_gte(undefined);
      setDiscount_lte(undefined);
      setCurrentPage(1);
    } else {
      const splitedValue = value.split(",");
      setDiscount_gte(splitedValue[0]);
      setDiscount_lte(splitedValue[1]);
      setCurrentPage(1);
    }
  };

  const productRatingOnchange = (value) => {
    if (value === "*") {
      setRating_gte(undefined);
      setRating_lte(undefined);
      setCurrentPage(1);
    } else {
      const splitedValue = value.split(",");
      setRating_gte(splitedValue[0]);
      setRating_lte(splitedValue[1]);
      setCurrentPage(1);
    }
  };

  const resetFilter = () => {
    if (searchParams.has("q")) {
      searchParams.set("q", "");
    }
    setQ("");
  };

  useEffect(() => {
    /**********    page will always loads at top position   ******************/
    window.scrollTo(0, 0);

    const params = {
      ...(q !== null && { q }),
      category: category,
      brand: brand,
      _page: currentPage > 1 ? currentPage : 1,
      _limit: productPerPage,
      _sort: sort,
      _order: order,
      ...(price_gte !== undefined && { price_gte }),
      ...(price_lte !== undefined && { price_lte }),
      ...(discount_gte !== undefined && { discount_gte }),
      ...(discount_lte !== undefined && { discount_lte }),
      ...(rating_gte !== undefined && { rating_gte }),
      ...(rating_lte !== undefined && { rating_lte }),
    };

    dispatch(getProducts(params));

    setSearchParams(params);
  }, [
    q,
    currentPage,
    productPerPage,
    sort,
    order,
    category,
    brand,
    price_gte,
    price_lte,
    discount_gte,
    discount_lte,
    rating_gte,
    rating_lte,
  ]);

  useEffect(() => {
    let navQuery = searchParams.get("q");
    if (navQuery !== "" && navQuery !== q) {
      setQ(navQuery);
    }

    let navCategory = searchParams.getAll("category");
    if (
      navCategory.length &&
      JSON.stringify(navCategory) !== JSON.stringify(category)
    ) {
      setCategory(navCategory);
    }

    if (navCategory.length === 0 && category.length !== 0) {
      searchParams.delete("category");
      setCategory(navCategory);
    }

    if (navQuery === "" && q !== "") {
      searchParams.set("q", "");
      setQ("");
    }

    let navPage = Number(searchParams.get("_page"));
    if (navPage !== 0 && navPage !== currentPage) {
      setCurrentPage(navPage);
    }
  }, [location]);

  /**********    state for the drawer   ******************/
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  /*******  Code to hide the mobile's sort and filter Square  ***********/
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile] = useMediaQuery("(max-width: 767px)");

  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Flex
        w="95%"
        minH="100vh"
        margin="auto"
        justifyContent={{ base: "center", md: "space-between" }}
        py="20px"
        gap="50px"
        color="lf.black"
        marginTop={"20px"}
      >
        <Box
          display={{ base: "none", md: "block" }}
          w={{ md: "28%", lg: "15%" }}
        >
          <Filter
            productCategoryOnchange={productCategoryOnchange}
            category={category}
            productBrandOnchange={productBrandOnchange}
            brand={brand}
            productPriceOnchange={productPriceOnchange}
            price={`${price_gte},${price_lte}`}
            productDiscountOnchange={productDiscountOnchange}
            discount={`${discount_gte},${discount_lte}`}
            productRatingOnchange={productRatingOnchange}
            rating={`${rating_gte},${rating_lte}`}
            resetFilter={resetFilter}
          />
        </Box>

        <Flex
          flexDirection="column"
          gap="20px"
          w={{ base: "100%", md: "72%", lg: "85%" }}
        >
          <Box display={{ base: "none", md: "block" }}>
            <Sort
              productPerPageOnChange={productPerPageOnChange}
              productPerPage={productPerPage}
              productSortOnChange={productSortOnChange}
              sort_order={`${sort},${order}`}
            />
          </Box>

          {isLoading ? (
            <Loading />
          ) : isError ? (
            <Error />
          ) : productsData && productsData.length === 0 ? (
            <Box textAlign="center">
              <VStack spacing={4} mt={8}>
                <Text fontSize="2xl">No results found</Text>
                <Text fontSize="lg">
                  We're sorry, We couldn't find any products matching your
                  search. Please try a different search term.
                </Text>
              </VStack>
            </Box>
          ) : (
            <Grid
              templateColumns={{
                base: "100%",
                md: "repeat(3, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              gap={"10px"}
            >
              {productsData &&
                productsData.map((elm) => {
                  return <ProductsCard key={Date() + Math.random()} {...elm} />;
                })}
            </Grid>
          )}

          <Pagination
            onChange={paginate}
            totalCount={totalProductCount}
            currentPage={currentPage}
            pageSize={productPerPage}
            onPageChange={paginate}
          />
        </Flex>
      </Flex>

      {isMobile && (
        <Square
          position={"fixed"}
          zIndex={1}
          right={0}
          left={0}
          bottom={0}
          w="100%"
          h="60px"
          bgColor="lf.black"
          display={isVisible ? "center" : "none"}
        >
          <Button
            bgColor={"sm.buff"}
            color="lf.black"
            colorScheme="teal"
            ref={btnRef}
            onClick={onOpen}
          >
            Apply Sort and Filter
          </Button>
        </Square>
      )}

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        color="lf.black"
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color="lf.black">Apply Sort and Filter</DrawerHeader>

          <DrawerBody>
            <Filter
              productCategoryOnchange={productCategoryOnchange}
              category={category}
              productBrandOnchange={productBrandOnchange}
              brand={brand}
              productPriceOnchange={productPriceOnchange}
              price={`${price_gte},${price_lte}`}
              productDiscountOnchange={productDiscountOnchange}
              discount={`${discount_gte},${discount_lte}`}
              productRatingOnchange={productRatingOnchange}
              rating={`${rating_gte},${rating_lte}`}
              resetFilter={resetFilter}
            />

            <Sort
              productPerPageOnChange={productPerPageOnChange}
              productPerPage={productPerPage}
              productSortOnChange={productSortOnChange}
              sort_order={`${sort},${order}`}
            />
          </DrawerBody>

          <DrawerFooter>
            <Button
              bgColor={"sm.buff"}
              color="lf.black"
              colorScheme="teal"
              onClick={onClose}
            >
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Products;
