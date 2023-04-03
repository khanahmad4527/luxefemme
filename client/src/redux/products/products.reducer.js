import {
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "./products.types";

const initialState = {
  productsIsLoading: false,
  productsIsError: false,
  productsData: [],
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_LOADING: {
      return {
        ...state,
        productsIsLoading: true,
        productsIsError: false,
      };
    }

    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        productsIsLoading: false,
        productsIsError: false,
        productsData: payload,
      };
    }

    case GET_PRODUCTS_ERROR: {
      return {
        ...state,
        productsIsLoading: false,
        productsIsError: true,
      };
    }

    default: {
      return state;
    }
  }
};
