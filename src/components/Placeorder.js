import React from "react";
import CheckoutSteps from "./CheckoutSteps";
export default function Placeorder(props) {
  const placeOrderHandler = () => {};
  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4 />
      <h1>This is place order</h1>

      <button onClick={placeOrderHandler}>PlaceOrder</button>
    </div>
  );
}
