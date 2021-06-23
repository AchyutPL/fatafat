import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_SCREEN_REQUEST,
  PRODUCT_SCREEN_SUCCESS,
  PRODUCT_SCREEN_FAIL,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SIGNIN_REQUEST,
  SIGNIN_FAIL,
  SIGNIN_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SIGN_OUT,
  CART_SAVE_SHIPPING_ADDRESS,
  ADD_TO_BUY,
  ORDER_REQUEST,
  ORDER_SUCCESS,
  ORDER_FAIL,
} from "./actionconstants";
import Axios from "axios";

export const listproducts = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(
      "https://fatafatsewa.herokuapp.com/api/bags"
    );

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.message,
    });
  }
};

export const productscreenlist = (productId) => async (dispatch) => {
  dispatch({
    type: PRODUCT_SCREEN_REQUEST,
    payload: productId,
  });

  try {
    const { data } = await Axios.get(
      `https://fatafatsewa.herokuapp.com/api/allproduct/${productId}`
    );

    dispatch({
      type: PRODUCT_SCREEN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_SCREEN_FAIL,
      payload: error.message,
    });
  }
};

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(
    `https://fatafatsewa.herokuapp.com/api/allproduct/${productId}`
  );

  dispatch({
    type: ADD_TO_CART,
    payload: {
      name: data.productname,
      image: data.path,
      price: data.price,
      countinstock: data.countinstock,
      product: data._id,
      qty,
    },
  });
  localStorage.setItem("cartitems", JSON.stringify(getState().cart.cartitems));
};

export const buynow = (productId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(
    `https://fatafatsewa.herokuapp.com/api/allproduct/${productId}`
  );
  dispatch({
    type: ADD_TO_BUY,
    payload: {
      name: data.productname,
      image: data.path,
      price: data.price,
      countinstock: data.countinstock,
      product: data._id,
      qty,
    },
  });
  localStorage.setItem("buyitems", JSON.stringify(getState().cart.buyitems));
};
export const removefromcart = (productId) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: productId,
  });
  localStorage.setItem("cartitems", JSON.stringify(getState().cart.cartitems));
};

export const signIn = (email, password) => async (dispatch) => {
  dispatch({
    type: SIGNIN_REQUEST,
    payload: {
      email,
      password,
    },
  });
  try {
    const { data } = await Axios.post(
      "https://fatafatsewa.herokuapp.com/api/users/signin",
      { email, password }
    );

    dispatch({
      type: SIGNIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("cartitems");
  localStorage.removeItem("shippingaddress");
  dispatch({ type: SIGN_OUT });
};

export const registeruser =
  (name, email, phone, password) => async (dispatch) => {
    dispatch({
      type: REGISTER_REQUEST,
      payload: {
        name,
        email,
        phone,
        password,
      },
    });

    try {
      const { data } = Axios.post(
        "https://fatafatsewa.herokuapp.com/api/users/register",
        {
          name,
          email,
          phone,
          password,
        }
      );
      dispatch({
        type: REGISTER_SUCCESS,
        payload: data,
      });
      dispatch({
        type: SIGNIN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.message,
      });
    }
  };

export const saveshipping = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingaddress", JSON.stringify(data));
};

export const orderdata = (orderData) => async (dispatch) => {
  dispatch({ type: ORDER_REQUEST, payload: orderData });
  try {
    const { data } = Axios.post(
      "https://fatafatsewa.herokuapp.com/api/orders",
      orderData
    );
    dispatch({
      type: ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: ORDER_FAIL, payload: error });
  }
};
