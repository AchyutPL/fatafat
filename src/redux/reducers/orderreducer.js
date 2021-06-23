import { ORDER_FAIL, ORDER_SUCCESS } from "../actions/actionconstants";

export const orderReducer = (state = { orderData: {} }, action) => {
  switch (action.type) {
    case ORDER_SUCCESS:
      return { orderData: action.payload };
    case ORDER_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};
