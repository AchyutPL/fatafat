import React from "react";
import CheckoutSteps from "./CheckoutSteps";
import { useDispatch, useSelector } from "react-redux";
import { orderdata } from "../redux/actions/actions";
import { useHistory } from "react-router-dom";
export default function Placeorder(props) {
  const cart = useSelector((state) => state.cart);
  const { buyitems, shippingaddress } = cart;
  const dispatch = useDispatch();
  const history = useHistory();
  const signreducer = useSelector((state) => state.signreducer);
  const { userInfo } = signreducer;
  if (!userInfo) {
    props.history.push("/signin");
  }
  const placeOrderHandler = (e) => {
    e.preventDefault();
    const orderData = {
      name: shippingaddress.name,
      number: shippingaddress.phone,
      zone: shippingaddress.zone,
      tol: shippingaddress.tol,
      productname: buyitems.name,
      price: buyitems.price,
      qty: buyitems.qty,
    };
    dispatch(orderdata(orderData));
    history.push("/orderplaced");
  };
  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <div className="placeorder">
        <form onSubmit={placeOrderHandler}>
          <div className="shipping">
            <h2>Shipping</h2>
            <h3>Name : {shippingaddress.name}</h3>
            <h3>Number : {shippingaddress.phone}</h3>
            <h3>
              Address : {shippingaddress.zone}, {shippingaddress.tol}
            </h3>
          </div>
          <div className="method">
            <h2>Payment</h2>
            <h3>Method : Cash On Delivery</h3>
          </div>
          <div className="orderitems">
            <div
              className="cartcontainer cartcontainershipping"
              key={buyitems.product}
            >
              <img src={buyitems.image} alt="" />
              <div className="cartname">Product : {buyitems.name} </div>
              <div className="cartprice">
                {buyitems.qty}*Rs.{buyitems.price} = Rs.
                {buyitems.qty * buyitems.price}
              </div>
            </div>
          </div>
          <button>Place Order</button>
        </form>
      </div>
    </>
  );
}
