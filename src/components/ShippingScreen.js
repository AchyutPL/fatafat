import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveshipping } from "../redux/actions/actions";
import CheckoutSteps from "./CheckoutSteps";
export default function ShippingScreen(props) {
  const signreducer = useSelector((state) => state.signreducer);
  const { userInfo } = signreducer;
  if (!userInfo) {
    props.history.push("/signin");
  }
  const cart = useSelector((state) => state.cart);
  const { shippingaddress } = cart;

  const dispatch = useDispatch();

  const [name, setname] = useState(shippingaddress.name);
  const [zone, setzone] = useState("");
  const [tol, settol] = useState(shippingaddress.tol);
  const [phone, setphone] = useState(shippingaddress.phone);
  console.log(zone, tol, phone);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveshipping({ name, zone, tol, phone }));
    props.history.push("/payment");
  };

  return (
    <div>
      <CheckoutSteps step1 step2 />
      <div className="registercontainer">
        <h2>Shipping Address Details:</h2>
        <form className="registerform" onSubmit={submitHandler}>
          <label htmlFor="name">Your Full Name:</label>
          <input
            type="name"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            required
          />
          <label htmlFor="zone">Zone:</label>
          <select
            name="zone"
            id="zone"
            value={zone}
            onChange={(e) => setzone(e.target.value)}
            required
          >
            <option value="" disabled>
              Select The Zone
            </option>
            <option value="Kathmandu">Kathmandu</option>
            <option value="Lalitpur">Lalitpur</option>
            <option value="Bhaktapur">Bhaktapur</option>
          </select>

          <label htmlFor="tol">Tol:</label>
          <input
            type="text"
            name="tol"
            id="tol"
            value={tol}
            onChange={(e) => settol(e.target.value)}
            required
          />
          <label htmlFor="contact">Contact Number:</label>
          <input
            type="number"
            name="contact"
            id="contact"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
            required
          />

          <button type="submit">Continue</button>
        </form>
      </div>
    </div>
  );
}
