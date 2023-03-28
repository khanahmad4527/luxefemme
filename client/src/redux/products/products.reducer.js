import {
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "./products.types";

const initialState = {};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default: {
      return state;
    }
  }
};
