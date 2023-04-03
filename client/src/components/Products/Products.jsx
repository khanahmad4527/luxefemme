import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/products/products.action";
const Products = () => {
  const dispatch = useDispatch();

  const { productsIsLoading, productsIsError, productsData } = useSelector(
    (store) => store.products
  );

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  console.log("productsData", productsData);

  return <div>Products</div>;
};

export default Products;
