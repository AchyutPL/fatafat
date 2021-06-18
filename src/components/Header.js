import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Header({ count }) {
  const cart = useSelector((state) => state.cart);

  const { cartitems } = cart;

  const [searchterm, setsearchterm] = useState("");
  const history = useHistory();
  const gotoss = () => {
    history.push(`/search/${searchterm}`);
  };
  return (
    <>
      <div className="headerContainer">
        <div className="contactNumber">
          {" "}
          <i
            style={{ color: "black" }}
            className="fa fa-address-book"
            aria-hidden="true"
          ></i>{" "}
          Contact No:9860486275
        </div>
        <div className="otherInfo">
          <div className="login_register">
            <Link to="/signin">Login/Register</Link>
          </div>
          <div className="referEarn">
            <a href="/">Refer/Earn</a>
          </div>
          <div className="sellProduct">
            <a href="/"> Sell YourProduct</a>
          </div>
          <div className="mode">
            <div className="circle"></div>
          </div>
        </div>
      </div>

      <div className="searchArea">
        <div className="logo">
          <Link to="/">
            <img src="/logo.png" alt="" />
          </Link>
        </div>
        <div className="search">
          <span className="category">
            <span>Products</span> <i className="fas fa-sort-down"></i>
          </span>
          <input
            type="search"
            name=""
            id=""
            value={searchterm}
            onChange={(e) => setsearchterm(e.target.value)}
          />
          <i className="fa fa-search" aria-hidden="true" onClick={gotoss}></i>
        </div>
        <div className="cart">
          <Link to="/cart">
            {" "}
            <i
              style={{ color: "#707b8e" }}
              className="fa fa-shopping-cart"
              aria-hidden="true"
            ></i>
            <span style={{ color: "#707b8e", fontSize: "17px" }}> Cart</span>{" "}
          </Link>
          {cartitems.length > 0 && (
            <span className="counter">{cartitems.length}</span>
          )}

          <a href="/">
            {" "}
            <i
              className="far fa-heart"
              style={{ color: "#707b8e", fontSize: "17px" }}
            ></i>{" "}
            <span style={{ color: "#707b8e", fontSize: "17px" }}>
              {" "}
              Wishlist
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
