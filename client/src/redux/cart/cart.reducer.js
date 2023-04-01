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
} from "./cart.types";

const initState = {
  getIsLoading: false,
  getIsError: false,
  postIsLoading: false,
  postIsError: false,
  patchIsLoading: false,
  patchIsError: false,
  deleteIsLoading: false,
  deleteIsError: false,
  cartData: [],
};

export const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_CART_ITEMS_LOADING: {
      return {
        ...state,
        getIsLoading: true,
        getIsError: false,
      };
    }

    case GET_CART_ITEMS_SUCCESS: {
      return {
        ...state,
        getIsLoading: false,
        getIsError: false,
        cartData: payload,
      };
    }

    case GET_CART_ITEMS_ERROR: {
      return {
        ...state,
        getIsLoading: false,
        getIsError: true,
      };
    }

    case ADD_ITEM_TO_CART_LOADING: {
      return {
        ...state,
        postIsLoading: true,
        postIsError: false,
      };
    }

    case ADD_ITEM_TO_CART_SUCCESS: {
      return {
        ...state,
        postIsLoading: false,
        postIsError: false,
        cartData: [payload, ...state.cartData],
      };
    }

    case ADD_ITEM_TO_CART_ERROR: {
      return {
        ...state,
        postIsLoading: false,
        postIsError: true,
      };
    }

    case UPDATE_CART_ITEMS_LOADING: {
      return {
        ...state,
        patchIsLoading: true,
        patchIsError: false,
      };
    }

    case UPDATE_CART_ITEMS_SUCCESS: {
      return {
        ...state,
        patchIsLoading: false,
        patchIsError: false,
        cartData: state.cartData.map((item) =>
          item._id === payload._id ? payload : item
        ),
      };
    }

    case UPDATE_CART_ITEMS_ERROR: {
      return {
        ...state,
        patchIsLoading: false,
        patchIsError: true,
      };
    }

    case REMOVE_CART_ITEMS_LOADING: {
      return {
        ...state,
        deleteIsLoading: true,
        deleteIsError: false,
      };
    }

    case REMOVE_CART_ITEMS_SUCCESS: {
      return {
        ...state,
        deleteIsLoading: false,
        deleteIsError: false,
        cartData: state.cartData.filter((item) => item._id !== payload._id),
      };
    }

    case REMOVE_CART_ITEMS_ERROR: {
      return {
        ...state,
        deleteIsLoading: false,
        deleteIsError: true,
      };
    }

    default: {
      return state;
    }
  }
};
