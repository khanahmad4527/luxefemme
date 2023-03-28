import axios from "axios";
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

const { id } = JSON.parse(localStorage.getItem("smUserData")) || 0;

export const getAddress = (id_login) => async (dispatch) => {
  dispatch({ type: GET_ADDRESS_LOADING });
  try {
    if (id_login) {
      const responce = await axios.get(
        `${process.env.REACT_APP_API_ENDPOINT}/users/${id_login}`
      );
      dispatch({ type: GET_ADDRESS_SUCCESS, payload: responce.data.address });
    } else {
      const responce = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/users/${id}`);
      dispatch({ type: GET_ADDRESS_SUCCESS, payload: responce.data.address });
    }
  } catch (err) {
    dispatch({ type: GET_ADDRESS_ERROR });
  }
};

export const getCoupons = () => async (dispatch) => {
  dispatch({ type: GET_COUPONS_LOADING });
  try {
    const responce = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/coupons`);
    dispatch({ type: GET_COUPONS_SUCCESS, payload: responce.data });
  } catch (err) {
    dispatch({ type: GET_COUPONS_ERROR });
  }
};

export const addAddress = (payload) => async (dispatch) => {
  dispatch({ type: ADD_ADDRESS_LOADING });
  try {
    axios.patch(`${process.env.REACT_APP_API_ENDPOINT}/users/${id}`, {
      address: payload,
    });
    dispatch({ type: ADD_ADDRESS_SUCCESS, payload: payload });
  } catch (err) {
    dispatch({ type: ADD_ADDRESS_ERROR });
  }
};

export const updateAddress = (payload) => async (dispatch) => {
  dispatch({ type: UPDATE_ADDRESS_LOADING });
  try {
    axios.patch(`${process.env.REACT_APP_API_ENDPOINT}/users/${id}`, {
      address: payload,
    });
    dispatch({ type: UPDATE_ADDRESS_SUCCESS, payload: payload });
  } catch (err) {
    dispatch({ type: UPDATE_ADDRESS_ERROR });
  }
};

export const deleteAddress = (payload) => async (dispatch) => {
  dispatch({ type: REMOVE_ADDRESS_LOADING });
  try {
    axios.patch(`${process.env.REACT_APP_API_ENDPOINT}/users/${id}`, {
      address: payload,
    });
    dispatch({ type: REMOVE_ADDRESS_SUCCESS, payload: payload });
  } catch (err) {
    dispatch({ type: REMOVE_ADDRESS_ERROR });
  }
};
