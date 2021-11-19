import { createStore, applyMiddleware, compose } from "redux";
import reducers from "../reducers/index";
import thunk from "redux-thunk";

const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  INITIAL_STATE,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
