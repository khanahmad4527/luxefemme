import axios from "axios";
import {
  GET_PRODUCTDETAIL_LOADING,
  GET_PRODUCTDETAIL_SUCCESS,
  GET_PRODUCTDETAIL_ERROR,
} from "./produtDetail.types";

export const getProductDetail = (id) => async (dispatch) => {
  dispatch({ type: GET_PRODUCTDETAIL_LOADING });
  try {
    const responce = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/products/${id}`
    );
    dispatch({ type: GET_PRODUCTDETAIL_SUCCESS, payload: responce.data });
  } catch (err) {
    dispatch({ type: GET_PRODUCTDETAIL_ERROR });
  }
};
