import {
  SIGNIN_FAIL,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
} from "../actions/actionconstants";

export const signinReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return {};
    case SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
