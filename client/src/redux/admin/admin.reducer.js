import {
  ADD_PRODUCT_LOADING,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_LOADING,
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
} from "./admin.types";

const initialState = {};

export const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default: {
      return state;
    }
  }
};
