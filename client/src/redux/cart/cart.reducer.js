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
  EMPTY_CART_ITEMS_LOADING,
  EMPTY_CART_ITEMS_SUCCESS,
  EMPTY_CART_ITEMS_ERROR,
} from "./cart.types";

const initState = {
  cartGetIsLoading: false,
  cartGetIsError: false,
  cartPostIsLoading: false,
  cartPostIsError: false,
  cartPatchIsLoading: false,
  cartPatchIsError: false,
  cartDeleteIsLoading: false,
  cartDeleteIsError: false,
  cartEmptyIsLoading: false,
  cartEmptyIsError: false,
  cartData: [],
};

export const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_CART_ITEMS_LOADING: {
      return {
        ...state,
        cartGetIsLoading: true,
        cartGetIsError: false,
      };
    }

    case GET_CART_ITEMS_SUCCESS: {
      return {
        ...state,
        cartGetIsLoading: false,
        cartGetIsError: false,
        cartData: payload,
      };
    }

    case GET_CART_ITEMS_ERROR: {
      return {
        ...state,
        cartGetIsLoading: false,
        cartGetIsError: true,
      };
    }

    case ADD_ITEM_TO_CART_LOADING: {
      return {
        ...state,
        cartPostIsLoading: true,
        cartPostIsError: false,
      };
    }

    case ADD_ITEM_TO_CART_SUCCESS: {
      return {
        ...state,
        cartPostIsLoading: false,
        cartPostIsError: false,
        cartData: [payload, ...state.cartData],
      };
    }

    case ADD_ITEM_TO_CART_ERROR: {
      return {
        ...state,
        cartPostIsLoading: false,
        cartPostIsError: true,
      };
    }

    case UPDATE_CART_ITEMS_LOADING: {
      return {
        ...state,
        cartPatchIsLoading: true,
        cartPatchIsError: false,
      };
    }

    case UPDATE_CART_ITEMS_SUCCESS: {
      return {
        ...state,
        cartPatchIsLoading: false,
        cartPatchIsError: false,
        cartData: state.cartData.map((item) =>
          item._id === payload._id ? payload : item
        ),
      };
    }

    case UPDATE_CART_ITEMS_ERROR: {
      return {
        ...state,
        cartPatchIsLoading: false,
        cartPatchIsError: true,
      };
    }

    case REMOVE_CART_ITEMS_LOADING: {
      return {
        ...state,
        cartDeleteIsLoading: true,
        cartDeleteIsError: false,
      };
    }

    case REMOVE_CART_ITEMS_SUCCESS: {
      return {
        ...state,
        cartDeleteIsLoading: false,
        cartDeleteIsError: false,
        cartData: state.cartData.filter((item) => item._id !== payload._id),
      };
    }

    case REMOVE_CART_ITEMS_ERROR: {
      return {
        ...state,
        cartDeleteIsLoading: false,
        cartDeleteIsError: true,
      };
    }

    case EMPTY_CART_ITEMS_LOADING: {
      return {
        ...state,
        cartEmptyIsLoading: true,
        cartEmptyIsError: false,
      };
    }

    case EMPTY_CART_ITEMS_SUCCESS: {
      return {
        ...state,
        cartEmptyIsLoading: false,
        cartEmptyIsError: false,
        cartData: [],
      };
    }

    case EMPTY_CART_ITEMS_ERROR: {
      return {
        ...state,
        cartEmptyIsLoading: false,
        cartEmptyIsError: true,
      };
    }

    default: {
      return state;
    }
  }
};
