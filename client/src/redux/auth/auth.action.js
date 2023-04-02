import instance from "../../utils/axiosInstance";

import {
  GET_AUTH_LOADING,
  GET_AUTH_SUCCESS,
  GET_AUTH_ERROR,
  ADD_AUTH_ERROR,
  ADD_AUTH_LOADING,
  ADD_AUTH_SUCCESS,
  RESET_AUTH,
} from "./auth.types";

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: GET_AUTH_LOADING });
  try {
    const responce = await instance.post(`/user/auth/login`, {
      email,
      password,
    });
    dispatch({ type: GET_AUTH_SUCCESS, payload: responce.data });
  } catch (err) {
    dispatch({ type: GET_AUTH_ERROR });
  }
};

export const existingUser = async (email, password) => {
  try {
    const responce = await instance.post(`/user/auth/login`, {
      email,
      password,
    });
    const status = responce.status;
    const role = responce.data.userData.role;
    return { status, role };
  } catch (error) {
    return { status: error.response.status };
  }
};

export const isEmailAvailable = async (newUser) => {
  try {
    await instance.post(`/user/auth/register`, newUser);

    return 201;
  } catch (error) {
    console.log(error);
    return error.response.status;
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: RESET_AUTH });
};
