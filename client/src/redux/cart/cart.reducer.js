import {
  GET_CART_ITEMS_ERROR,
  GET_CART_ITEMS_LOADING,
  GET_CART_ITEMS_SUCCESS,
  ADD_ITEM_TO_CART_ERROR,
  ADD_ITEM_TO_CART_LOADING,
  ADD_ITEM_TO_CART_SUCCESS,
  UPDATE_CART_ITEMS_LOADING,
  UPDATE_CART_ITEMS_SUCCESS,
  UPDATE_CART_ITEMS_ERROR,
  REMOVE_CART_ITEMS_LOADING,
  REMOVE_CART_ITEMS_SUCCESS,
  REMOVE_CART_ITEMS_ERROR,
} from "./cart.types";

const initState = {};

export const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    default: {
      return state;
    }
  }
};
