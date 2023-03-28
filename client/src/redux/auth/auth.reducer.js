import {
  GET_AUTH_LOADING,
  GET_AUTH_SUCCESS,
  GET_AUTH_ERROR,
  ADD_AUTH_ERROR,
  ADD_AUTH_LOADING,
  ADD_AUTH_SUCCESS,
  RESET_AUTH,
} from "./auth.types";

const initialState = {};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default: {
      return state;
    }
  }
};
