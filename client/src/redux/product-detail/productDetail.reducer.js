import {
  GET_PRODUCTDETAIL_LOADING,
  GET_PRODUCTDETAIL_SUCCESS,
  GET_PRODUCTDETAIL_ERROR,
} from "./produtDetail.types";

const initialState = {
  isLoading: false,
  isError: false,
  productDetailData: {},
};

export const productDetailReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GET_PRODUCTDETAIL_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case GET_PRODUCTDETAIL_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        productDetailData: payload,
      };
    }

    case GET_PRODUCTDETAIL_ERROR: {
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
