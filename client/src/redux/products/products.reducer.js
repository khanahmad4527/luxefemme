import {
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR
} from './products.types';

const initialState = {
  loading: false,
  error: false,
  products: []
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_LOADING:
      return { ...state, loading: true };

    case GET_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: payload };

    case GET_PRODUCTS_ERROR:
      return { ...state, loading: false, error: true };

    default: {
      return state;
    }
  }
};