import { combineReducers } from "redux";
import { productreducer } from "./productreducer";
import { productscreenreducer } from "./productscreenreducer";
import { cartreducer } from "./cartreducer";
const rootReducer = combineReducers({
  ourproduct: productreducer,
  productdetails: productscreenreducer,
  cart: cartreducer,
});

export default rootReducer;
