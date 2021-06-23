import React from "react";

export default function Onlyformobile() {
  return (
    <>
      <div className="mobcontainer">
        <a href="/">
          <div className="mobilesectionha">
            <i class="fa fa-home" aria-hidden="true"></i>

            <span>Home</span>
          </div>
        </a>
        <a href="/category">
          <div className="mobilesectionha">
            <i class="fa fa-list-alt" aria-hidden="true"></i>
            <span>Categories</span>
          </div>
        </a>
        <a href="/cart">
          <div className="mobilesectionha">
            <i class="fas fa-shopping-cart"></i>
            <span>Cart</span>
          </div>
        </a>
        <div className="mobilesectionha">
          <i class="fa fa-user-alt"></i>
          <span>Profile</span>
        </div>
      </div>
    </>
  );
}
