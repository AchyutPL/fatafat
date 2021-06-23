import React from "react";
import CheckoutSteps from "./CheckoutSteps";
export default function Payment(props) {
  const paymentHandler = () => {
    props.history.push("placeorder");
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3 />
      <h1>This is payment Screeen</h1>
      <button onClick={paymentHandler}>Continue</button>
    </div>
  );
}
