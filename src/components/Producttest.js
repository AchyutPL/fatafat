import React from "react";

export default function producttest() {
  return (
    <div>
      <div className="productContainer">
        <div className="productimage">
          <img src="./bags/bluesheet.jpg" alt="" />
        </div>
        <div className="productinfo">
          <div className="productName"> Rs 1 Crore</div>
          <div className="price">Price :Rs.1 Crore</div>
          <div className="counterCart">
            Qty:
            <select className="qtyamount" name="" id="">
              <option value="">1</option>
            </select>
          </div>
          <hr />
          <div className="cart_buy">
            <button className="btn">
              {" "}
              <i
                style={{ color: "black" }}
                className="fa fa-shopping-cart"
                aria-hidden="true"
              ></i>
              Add To Cart
            </button>
            <button className="btn">
              {" "}
              <i
                style={{ color: "black" }}
                className="fa fa-shopping-cart"
                aria-hidden="true"
              ></i>
              Buy Now
            </button>
          </div>
        </div>
        <div className="statuscart">
          <h1>Brand</h1>
          <h3>SKU : 399_8908009119193</h3>
        </div>
      </div>
    </div>
  );
}
