import React from "react";
import { useSelector } from "react-redux";
import CheckoutSteps from "./CheckoutSteps";
export default function Payment(props) {
  const paymentHandler = (e) => {
    e.preventDefault();
    props.history.push("placeorder");
  };
  const signreducer = useSelector((state) => state.signreducer);
  const { userInfo } = signreducer;
  if (!userInfo) {
    props.history.push("/signin");
  }
  return (
    <div>
      <CheckoutSteps step1 step2 step3 />
      <form className="paymentform" onSubmit={paymentHandler}>
        <h2>Choose Payment Method</h2>
        <div>
          <input type="radio" name="cash" id="cash" required />
          <label htmlFor="cash">Cash On Delivery</label>
        </div>
        <button>Continue</button>
      </form>
    </div>
  );
}
