import {
  GET_PRODUCTDETAIL_LOADING,
  GET_PRODUCTDETAIL_SUCCESS,
  GET_PRODUCTDETAIL_ERROR,
} from "./produtDetail.types";

const initialState = {};

export const productDetailReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    default: {
      return state;
    }
  }
};
