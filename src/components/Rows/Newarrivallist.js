import React from "react";

export default function Newarrivallist({ product }) {
  return (
    <div>
      <div className="arrivalc`ontainer">
        <div className="newarrivals">
          <div>
            <a href={`/product/${product._id}`}>
              <img src={product.path} alt="" />
            </a>
          </div>
          <div className="bagname">{product.productname}</div>
          <div className="price">Rs.4000</div>
          <div className="btn">
            <button type="submit">Add to Wish-List</button>
          </div>
        </div>
      </div>
    </div>
  );
}
