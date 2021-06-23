import React from "react";
import { useSelector } from "react-redux";

export default function Ordersuccess() {
  const cart = useSelector((state) => state.cart);
  const { buyitems } = cart;
  return (
    <div className="ordersuccess">
      <h1>Your Order has been successfully added...</h1>
      <h3>Thank you for shopping from us!</h3>
      <h3 style={{ textAlign: "center", fontSize: "20px", color: "orangered" }}>
        Please make sure that you have Rs.{buyitems.price * buyitems.qty} ready
        on delivery day.............
      </h3>
      <a href="/">Back to Shopping</a>
    </div>
  );
}
