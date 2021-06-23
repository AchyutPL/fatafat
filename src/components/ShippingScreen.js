import React from "react";
import { useSelector } from "react-redux";
import CheckoutSteps from "./CheckoutSteps";
export default function ShippingScreen(props) {
  const signreducer = useSelector((state) => state.signreducer);
  const { userInfo } = signreducer;
  if (!userInfo) {
    props.history.push("/signin");
  }
  const submitHandler = () => {
    props.history.push("/payment");
  };
  return (
    <div>
      <CheckoutSteps step1 step2 />
      <h1>This is shipping Screen</h1>
      <button onClick={submitHandler}>Continue</button>
    </div>
  );
}
