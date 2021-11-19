import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import modal from "./Modal";
import { getProductDetailsReducer, getProductsReducer } from "./ProductReducer";
const reducers = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetail: getProductDetailsReducer,
  modal: modal,
});

export default reducers;
