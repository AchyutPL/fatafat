import {
  PRODUCT_SCREEN_REQUEST,
  PRODUCT_SCREEN_SUCCESS,
  PRODUCT_SCREEN_FAIL,
} from "../actions/actionconstants";

export const productscreenreducer = (
  state = {
    bug: {},
    loading: true,
  },

  action
) => {
  switch (action.type) {
    case PRODUCT_SCREEN_REQUEST:
      return { loading: true };
    case PRODUCT_SCREEN_SUCCESS:
      return { loading: false, bug: action.payload };
    case PRODUCT_SCREEN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
