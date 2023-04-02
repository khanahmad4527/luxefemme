import instance from "../../utils/axiosInstance";
import {
  GET_ADDRESS_LOADING,
  GET_ADDRESS_SUCCESS,
  GET_ADDRESS_ERROR,
  ADD_ADDRESS_LOADING,
  ADD_ADDRESS_SUCCESS,
  ADD_ADDRESS_ERROR,
  UPDATE_ADDRESS_LOADING,
  UPDATE_ADDRESS_SUCCESS,
  UPDATE_ADDRESS_ERROR,
  REMOVE_ADDRESS_LOADING,
  REMOVE_ADDRESS_SUCCESS,
  REMOVE_ADDRESS_ERROR,
  GET_COUPONS_LOADING,
  GET_COUPONS_SUCCESS,
  GET_COUPONS_ERROR,
} from "./checkout.types";

export const getAddress = () => async (dispatch) => {
  dispatch({ type: GET_ADDRESS_LOADING });
  try {
    const responce = await instance.get(`/address`);
    dispatch({ type: GET_ADDRESS_SUCCESS, payload: responce.data });
  } catch (err) {
    dispatch({ type: GET_ADDRESS_ERROR });
  }
};

export const getCoupons = () => async (dispatch) => {
  dispatch({ type: GET_COUPONS_LOADING });
  try {
    const responce = await instance.get(`/coupons`);
    dispatch({ type: GET_COUPONS_SUCCESS, payload: responce.data });
  } catch (err) {
    dispatch({ type: GET_COUPONS_ERROR });
  }
};

export const addAddress = (payload) => async (dispatch) => {
  dispatch({ type: ADD_ADDRESS_LOADING });
  try {
    const responce = await instance.post(`/address/add`, payload);
    dispatch({ type: ADD_ADDRESS_SUCCESS, payload: responce.data });
  } catch (err) {
    dispatch({ type: ADD_ADDRESS_ERROR });
  }
};

export const updateAddress = (id, updatedAddress) => async (dispatch) => {
  dispatch({ type: UPDATE_ADDRESS_LOADING });
  try {
    const responce = await instance.patch(
      `/address/update/${id}`,
      updatedAddress
    );
    dispatch({ type: UPDATE_ADDRESS_SUCCESS, payload: responce.data });
  } catch (err) {
    dispatch({ type: UPDATE_ADDRESS_ERROR });
  }
};

export const deleteAddress = (id) => async (dispatch) => {
  dispatch({ type: REMOVE_ADDRESS_LOADING });
  try {
    const responce = await instance.delete(`/address/delete/${id}`);
    dispatch({ type: REMOVE_ADDRESS_SUCCESS, payload: responce.data });
  } catch (err) {
    dispatch({ type: REMOVE_ADDRESS_ERROR });
  }
};
