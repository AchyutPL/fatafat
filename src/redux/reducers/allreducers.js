import { combineReducers } from "redux";
import { productreducer } from "./productreducer";
import { productscreenreducer } from "./productscreenreducer";
import { cartreducer } from "./cartreducer";
import { userReducer } from "./userreducer";
const rootReducer = combineReducers({
  ourproduct: productreducer,
  productdetails: productscreenreducer,
  cart: cartreducer,
  usersignin: userReducer,
});

export default rootReducer;
