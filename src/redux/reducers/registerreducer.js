import {
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../actions/actionconstants";

export const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { loading: true };
    case REGISTER_SUCCESS:
      return { newuser: action.payload };
    case REGISTER_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
