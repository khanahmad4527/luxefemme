import instance from "../../utils/axiosInstance";
import {
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "./products.types";

export const getProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    const responce = await instance.get(`/products`);
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: responce.data });
  } catch (err) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};
