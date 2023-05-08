import {
  legacy_createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { homeReducer } from "./home/home.reducer";
import { productsReducer } from "./products/products.reducer";
import { productDetailReducer } from "./product-detail/productDetail.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { checkoutReducer } from "./checkout/checkout.reducer";
import { orderReducer } from "./order/order.reducer";
import { adminReducer } from "./admin/admin.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  products: productsReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
  order: orderReducer,
  admin: adminReducer,
});

/*****************       In Production    ***************************/
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = legacy_createStore(
//   rootReducer,
//   composeEnhancer(applyMiddleware(thunk))
// );

/*****************       For Users    ***************************/

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
