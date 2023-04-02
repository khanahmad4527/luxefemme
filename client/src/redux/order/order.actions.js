import instance from "../../utils/axiosInstance";
import {
  GET_ORDER_ITEMS_LOADING,
  GET_ORDER_ITEMS_SUCCESS,
  GET_ORDER_ITEMS_ERROR,
  ADD_ITEM_TO_ORDER_LOADING,
  ADD_ITEM_TO_ORDER_SUCCESS,
  ADD_ITEM_TO_ORDER_ERROR,
} from "./order.types";

export const getOrderData = () => async (dispatch) => {
  dispatch({ type: GET_ORDER_ITEMS_LOADING });
  try {
    const responce = await instance.get(`/orders`);
    dispatch({ type: GET_ORDER_ITEMS_SUCCESS, payload: responce.data });
  } catch (err) {
    dispatch({ type: GET_ORDER_ITEMS_ERROR });
  }
};

export const addToOrder = (newOrder) => async (dispatch) => {
  dispatch({ type: ADD_ITEM_TO_ORDER_LOADING });
  try {
    const responce = await instance.post(`/orders/add`, newOrder);
    dispatch({ type: ADD_ITEM_TO_ORDER_SUCCESS, payload: responce.data });
  } catch (err) {
    dispatch({ type: ADD_ITEM_TO_ORDER_ERROR });
  }
};
