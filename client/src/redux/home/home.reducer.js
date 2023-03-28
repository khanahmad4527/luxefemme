import {
  GET_MOBILES_LOADING,
  GET_MOBILES_SUCCESS,
  GET_MOBILES_ERROR,
  GET_TVS_LOADING,
  GET_TVS_SUCCESS,
  GET_TVS_ERROR,
  GET_HOMEAPPLIANCES_LOADING,
  GET_HOMEAPPLIANCES_SUCCESS,
  GET_HOMEAPPLIANCES_ERROR,
} from "./home.types";

const initialState = {};

export const homeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default: {
      return state;
    }
  }
};
