import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/allreducers";
const initialstate = {
  signreducer: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  cart: {
    cartitems: localStorage.getItem("cartitems")
      ? JSON.parse(localStorage.getItem("cartitems"))
      : [],
  },
};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialstate,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
