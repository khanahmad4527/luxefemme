import instance from "../../utils/axiosInstance";

import {
  GET_DRESS_LOADING,
  GET_DRESS_SUCCESS,
  GET_DRESS_ERROR,
  GET_SHOES_LOADING,
  GET_SHOES_SUCCESS,
  GET_SHOES_ERROR,
} from "./home.types";

export const getDresses = () => async (dispatch) => {
  dispatch({ type: GET_DRESS_LOADING });
  try {
    const responce = await instance.get(`/products?category=dress`);
    dispatch({ type: GET_DRESS_SUCCESS, payload: responce.data });
  } catch (err) {
    dispatch({ type: GET_DRESS_ERROR });
  }
};

export const getShoes = () => async (dispatch) => {
  dispatch({ type: GET_SHOES_LOADING });
  try {
    const responce = await instance.get(`/products?category=shoes`);
    dispatch({ type: GET_SHOES_SUCCESS, payload: responce.data });
  } catch (err) {
    dispatch({ type: GET_SHOES_ERROR });
  }
};
