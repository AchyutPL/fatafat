import { combineReducers } from "redux";
import { productreducer } from "./productreducer";
import { productscreenreducer } from "./productscreenreducer";
import { cartreducer } from "./cartreducer";
import { signinReducer } from "./signinreducer";
import { registerReducer } from "./registerreducer";
const rootReducer = combineReducers({
  ourproduct: productreducer,
  productdetails: productscreenreducer,
  cart: cartreducer,
  signreducer: signinReducer,
  register: registerReducer,
});

export default rootReducer;
