import {
  ADD_PRODUCT_LOADING,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_LOADING,
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_USERS_LOADING,
  GET_USERS_ERROR,
  GET_USERS_SUCCESS,
  DELETE_USERS_LOADING,
  DELETE_USERS_ERROR,
  DELETE_USERS_SUCCESS,
  ADD_ADMIN_LOADING,
  ADD_ADMIN_ERROR,
  ADD_ADMIN_SUCCESS,
  DELETE_ADMIN_LOADING,
  DELETE_ADMIN_ERROR,
  DELETE_ADMIN_SUCCESS,
  PATCH_PRODUCT_LOADING,
  PATCH_PRODUCT_ERROR,
  PATCH_PRODUCT_SUCCESS,
  GET_ADMIN_LOADING,
  GET_ADMIN_ERROR,
  GET_ADMIN_SUCCESS,
  PATCH_ADMIN_LOADING,
  PATCH_ADMIN_ERROR,
  PATCH_ADMIN_SUCCESS
} from "./admin.types";

const initialState = {
  loading: true,
  error: false,
  products: [],
  users: [],
  admins:[],
};

export const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case ADD_PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }

    case ADD_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        products: [...state.products, payload],
      };
    }

    case PATCH_PRODUCT_LOADING:{
      return{
        ...state,
        loading:true
      }
    }
    
    case PATCH_PRODUCT_ERROR:{
      return{
        ...state,
        loading:false,
        error:true
      }
    }

    case PATCH_PRODUCT_SUCCESS:{
      return{
        ...state,
        loading:false
      }
    }

    case GET_PRODUCTS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_PRODUCTS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        products: payload,
      };
    }
    case DELETE_PRODUCT_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    
    case GET_USERS_LOADING:{
      return{
        ...state,
        loading:true
      }
    }

    case  GET_USERS_ERROR:{
      return{
        ...state,
        loading:false,
        error:true
      }
    }

   case GET_USERS_SUCCESS:{
    return{
      ...state,
      loading:false,
      users:payload
    }
   }

    case DELETE_PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case DELETE_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }


    case DELETE_USERS_LOADING:{
      return{
        ...state,
        loading:true
      }
     }
    
     case DELETE_USERS_ERROR:{
      return{
        ...state,
        loading:false,
        error:true
      }
     }
     
     case DELETE_USERS_SUCCESS:{
      return{
        ...state,
        loading:false
      }
     }
    
     case ADD_ADMIN_LOADING:{
      return{
        ...state,
        loading:true
      }
     }

     case ADD_ADMIN_ERROR:{
      return{
        ...state,
        loading:false,
        error:true
      }
     }

     case ADD_ADMIN_SUCCESS:{
      return{
        ...state,
        loading:false,
        users:[...state.users,payload]
      }
     }
 
     case GET_ADMIN_LOADING:{
      return{
        ...state,
        loading:true
      }
     }

     case GET_ADMIN_ERROR:{
      return{
        ...state,
        loading:false,
        error:true
      }
     }
     
     case GET_ADMIN_SUCCESS:{
      return{
        ...state,
        loading:false,
        admins:payload
      }
     }

     case DELETE_ADMIN_LOADING:{
      return{
        ...state,
        loading:true,
      }
     }
     
     case DELETE_ADMIN_ERROR:{
      return{
        ...state,
        loading:false,
        error:true
      }
     }

     case DELETE_ADMIN_SUCCESS:{
      return{
        ...state,
        loading:false,
      }
     }
       
     case PATCH_ADMIN_LOADING:{
      return{
        ...state,
        loading:true
      }
     }
     case PATCH_ADMIN_ERROR:{
      return{
        ...state,
        loading:false,
        error:true
      }
     }
     case PATCH_ADMIN_SUCCESS:{
      return{
        ...state,
        loading:false
      }
     }

    default: {
      return state;
    }
  }
};
