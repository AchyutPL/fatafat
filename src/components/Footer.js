import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="flexflex">
          <div className="col1">
            <h2>Sell</h2>
            <ul>
              <li>
                <a href="/"> Start Selling</a>{" "}
              </li>
              <li>
                <a href="/"> Learn to Sell</a>
              </li>
              <li>
                <a href="/"> Independent Seller</a>
              </li>
              <li>
                <a href="/"> Earn More</a>
              </li>
            </ul>
          </div>
          <div className="col1">
            <h2>Shop Here</h2>
            <ul>
              <li>
                <a href="/"> Women's Fashion</a>
              </li>
              <li>
                <a href="/"> Mobile</a>
              </li>
              <li>
                <a href="/"> Consumer Electronics</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flexflex">
          <div className="col1">
            <h2>Benefits</h2>
            <ul>
              <li>
                <a href="/"> Benefits</a>
              </li>
              <li>
                <a href="/"> Daily Deals</a>
              </li>
              <li>
                <a href="/"> Product Policy</a>
              </li>
              <li>
                <a href="/"> Earn More</a>
              </li>
            </ul>
          </div>
          <div className="col1">
            <h2>Company</h2>
            <ul>
              <li>
                <a href="/"> Company Info</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div
        className="forfooter"
        style={{
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          padding: "20px 40px 40px 40px",
        }}
      >
        @2021 Designed and Created By: Achyut Paudel
        <hr />
      </div>
    </>
  );
}
