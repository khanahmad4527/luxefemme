import {
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR
} from './products.types';
import instance from '../../utils/axiosInstance';

const getProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    let payload = await instance.get('/products/');
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload });
  } catch (err) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};

export { getProducts };
