import instance from "../../utils/axiosInstance";

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
  EMPTY_CART_ITEMS_LOADING,
  EMPTY_CART_ITEMS_SUCCESS,
  EMPTY_CART_ITEMS_ERROR,
} from "./cart.types";

export const getCartData = () => async (dispatch) => {
  dispatch({ type: GET_CART_ITEMS_LOADING });
  try {
    const responce = await instance.get(`/cart`);
    dispatch({ type: GET_CART_ITEMS_SUCCESS, payload: responce.data });
  } catch (err) {
    dispatch({ type: GET_CART_ITEMS_ERROR });
  }
};

export const addToCart = (newCart) => async (dispatch) => {
  dispatch({ type: ADD_ITEM_TO_CART_LOADING });
  try {
    const responce = await instance.post(`/cart/add`, newCart);
    dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: responce.data });
  } catch (err) {
    dispatch({ type: ADD_ITEM_TO_CART_ERROR });
  }
};

export const updateCartData = (id, updatedQuantity) => async (dispatch) => {
  dispatch({ type: UPDATE_CART_ITEMS_LOADING });
  try {
    const responce = await instance.patch(`/cart/update/${id}`, {
      quantity: updatedQuantity,
    });
    dispatch({ type: UPDATE_CART_ITEMS_SUCCESS, payload: responce.data });
  } catch (err) {
    dispatch({ type: UPDATE_CART_ITEMS_ERROR });
  }
};

export const deleteCartData = (id) => async (dispatch) => {
  dispatch({ type: REMOVE_CART_ITEMS_LOADING });
  try {
    const responce = await instance.delete(`/cart/delete/${id}`);
    dispatch({ type: REMOVE_CART_ITEMS_SUCCESS, payload: responce.data });
  } catch (err) {
    dispatch({ type: REMOVE_CART_ITEMS_ERROR });
  }
};

export const emptyCart = () => async (dispatch) => {
  dispatch({ type: EMPTY_CART_ITEMS_LOADING });
  try {
    dispatch({ type: EMPTY_CART_ITEMS_SUCCESS });
    await instance.delete(`/cart/emptycart`);
  } catch (err) {
    dispatch({ type: EMPTY_CART_ITEMS_ERROR });
  }
};
