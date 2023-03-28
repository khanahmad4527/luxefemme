import {
  GET_ORDER_ITEMS_LOADING,
  GET_ORDER_ITEMS_SUCCESS,
  GET_ORDER_ITEMS_ERROR,
  ADD_ITEM_TO_ORDER_LOADING,
  ADD_ITEM_TO_ORDER_SUCCESS,
  ADD_ITEM_TO_ORDER_ERROR,
} from "./order.types";

const initState = {};

export const orderReducer = (state = initState, { type, payload }) => {
  switch (type) {
    default: {
      return state;
    }
  }
};
