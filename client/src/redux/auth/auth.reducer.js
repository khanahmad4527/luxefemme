import {
  GET_AUTH_LOADING,
  GET_AUTH_SUCCESS,
  GET_AUTH_ERROR,
  ADD_AUTH_ERROR,
  ADD_AUTH_LOADING,
  ADD_AUTH_SUCCESS,
  RESET_AUTH,
} from "./auth.types";

import Cookies from "js-cookie";

const token = Cookies.get("token");

const { firstname, lastname, email, id } =
  JSON.parse(localStorage.getItem("lfUserData")) || {};

const initialState = {
  id: id,
  userDetails: {
    firstname,
    lastname,
    email,
  },
  isLoading: false,
  isError: false,
  isAuth: token ? true : false,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_AUTH_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case GET_AUTH_SUCCESS: {
      if (payload.userData) {
        Cookies.set("token", payload.token, { expires: 3 });
        localStorage.setItem("lfUserData", JSON.stringify(payload.userData));
      }

      return {
        ...state,
        id: payload.userData._id,
        userDetails: {
          firstname: payload.userData.firstname,
          lastname: payload.userData.lastname,
          email: payload.userData.email,
        },
        isLoading: false,
        isError: false,
        isAuth: true,
      };
    }

    case GET_AUTH_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case ADD_AUTH_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case ADD_AUTH_SUCCESS: {
      return {
        ...state,
      };
    }

    case ADD_AUTH_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case RESET_AUTH: {
      Cookies.remove("token");
      localStorage.removeItem("lfUserData");
      return {
        ...initialState,
        isAuth: false,
      };
    }

    default: {
      return state;
    }
  }
};
