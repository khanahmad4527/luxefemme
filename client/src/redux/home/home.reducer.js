import {
  GET_DRESS_LOADING,
  GET_DRESS_SUCCESS,
  GET_DRESS_ERROR,
  GET_SHOES_LOADING,
  GET_SHOES_SUCCESS,
  GET_SHOES_ERROR,
} from "./home.types";

const initialState = {
  isLoadingDress: false,
  isErrorDress: false,
  isLoadingShoes: false,
  isErrorShoes: false,
  dressData: [],
  shoesData: [],
};

export const homeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DRESS_LOADING: {
      return {
        ...state,
        isLoadingDress: true,
        isErrorDress: false,
      };
    }

    case GET_DRESS_SUCCESS: {
      return {
        ...state,
        isLoadingDress: false,
        isErrorDress: false,
        dressData: payload,
      };
    }

    case GET_DRESS_ERROR: {
      return {
        ...state,
        isLoadingDress: false,
        isErrorDress: true,
      };
    }

    case GET_SHOES_LOADING: {
      return {
        ...state,
        isLoadingShoes: true,
        isErrorShoes: false,
      };
    }

    case GET_SHOES_SUCCESS: {
      return {
        ...state,
        isLoadingShoes: false,
        isErrorShoes: false,
        shoesData: payload,
      };
    }

    case GET_SHOES_ERROR: {
      return {
        ...state,
        isLoadingShoes: false,
        isErrorShoes: true,
      };
    }

    default: {
      return state;
    }
  }
};
