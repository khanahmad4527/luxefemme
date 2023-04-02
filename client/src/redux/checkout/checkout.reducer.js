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

const initState = {
  checkoutGetIsLoading: false,
  checkoutGetIsError: false,
  couponsGetIsLoading: false,
  couponsGetIsError: false,
  checkoutPostIsLoading: false,
  checkoutPostIsError: false,
  checkoutPatchIsLoading: false,
  checkoutPatchIsError: false,
  checkoutDeleteIsLoading: false,
  checkoutDeleteIsError: false,
  userAddress: [],
  coupons: [],
};

export const checkoutReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_ADDRESS_LOADING: {
      return {
        ...state,
        checkoutGetIsLoading: true,
        checkoutGetIsError: false,
      };
    }

    case GET_ADDRESS_SUCCESS: {
      return {
        ...state,
        checkoutGetIsLoading: false,
        checkoutGetIsError: false,
        userAddress: payload,
      };
    }

    case GET_ADDRESS_ERROR: {
      return {
        ...state,
        checkoutGetIsLoading: false,
        checkoutGetIsError: true,
      };
    }

    case GET_COUPONS_LOADING: {
      return {
        ...state,
        couponsGetIsLoading: true,
        couponsGetIsError: false,
      };
    }

    case GET_COUPONS_SUCCESS: {
      return {
        ...state,
        couponsGetIsLoading: false,
        couponsGetIsError: false,
        coupons: payload,
      };
    }

    case GET_COUPONS_ERROR: {
      return {
        ...state,
        couponsGetIsLoading: false,
        couponsGetIsError: true,
      };
    }

    case ADD_ADDRESS_LOADING: {
      return {
        ...state,
        checkoutPostIsLoading: true,
        checkoutPostIsError: false,
      };
    }

    case ADD_ADDRESS_SUCCESS: {
      return {
        ...state,
        checkoutPostIsLoading: false,
        checkoutPostIsError: false,
        userAddress: [payload, ...state.userAddress],
      };
    }

    case ADD_ADDRESS_ERROR: {
      return {
        ...state,
        checkoutPostIsLoading: false,
        checkoutPostIsError: true,
      };
    }

    case UPDATE_ADDRESS_LOADING: {
      return {
        ...state,
        checkoutPatchIsLoading: true,
        checkoutPatchIsError: false,
      };
    }

    case UPDATE_ADDRESS_SUCCESS: {
      return {
        ...state,
        checkoutPatchIsLoading: false,
        checkoutPatchIsError: false,
        userAddress: state.userAddress.map((item) =>
          item._id === payload._id ? payload : item
        ),
      };
    }

    case UPDATE_ADDRESS_ERROR: {
      return {
        ...state,
        checkoutPatchIsLoading: false,
        checkoutPatchIsError: true,
      };
    }

    case REMOVE_ADDRESS_LOADING: {
      return {
        ...state,
        checkoutDeleteIsLoading: true,
        checkoutDeleteIsError: false,
      };
    }

    case REMOVE_ADDRESS_SUCCESS: {
      return {
        ...state,
        checkoutDeleteIsLoading: false,
        checkoutDeleteIsError: false,
        userAddress: state.userAddress.filter(
          (item) => item._id !== payload._id
        ),
      };
    }

    case REMOVE_ADDRESS_ERROR: {
      return {
        ...state,
        checkoutDeleteIsLoading: false,
        checkoutDeleteIsError: true,
      };
    }

    default: {
      return state;
    }
  }
};
