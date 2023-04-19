import {
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "./products.types";

const initialState = {
  isLoading: false,
  isError: false,
  totalProductCount: 0,
  productsData: [],
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        totalProductCount: payload.totalProductCount,
        productsData: payload.data,
      };
    }

    case GET_PRODUCTS_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default: {
      return state;
    }
  }
};
