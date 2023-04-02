import {
  GET_ORDER_ITEMS_LOADING,
  GET_ORDER_ITEMS_SUCCESS,
  GET_ORDER_ITEMS_ERROR,
  ADD_ITEM_TO_ORDER_LOADING,
  ADD_ITEM_TO_ORDER_SUCCESS,
  ADD_ITEM_TO_ORDER_ERROR,
} from "./order.types";

const initState = {
  orderGetIsLoading: false,
  orderGetIsError: false,
  orderPostIsLoading: false,
  orderPostIsError: false,
  orderData: [],
};

export const orderReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_ORDER_ITEMS_LOADING: {
      return {
        ...state,
        orderGetIsLoading: true,
        orderGetIsError: false,
      };
    }

    case GET_ORDER_ITEMS_SUCCESS: {
      return {
        ...state,
        orderGetIsLoading: false,
        orderGetIsError: false,
        orderData: payload,
      };
    }

    case GET_ORDER_ITEMS_ERROR: {
      return {
        ...state,
        orderGetIsLoading: false,
        orderGetIsError: true,
      };
    }

    case ADD_ITEM_TO_ORDER_LOADING: {
      return {
        ...state,
        orderPostIsLoading: true,
        orderPostIsError: false,
      };
    }

    case ADD_ITEM_TO_ORDER_SUCCESS: {
      return {
        ...state,
        orderPostIsLoading: false,
        orderPostIsError: false,
        orderData: [payload, ...state.orderData],
      };
    }

    case ADD_ITEM_TO_ORDER_ERROR: {
      return {
        ...state,
        orderPostIsLoading: false,
        orderPostIsError: true,
      };
    }

    default: {
      return state;
    }
  }
};
