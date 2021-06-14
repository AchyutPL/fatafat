import React from "react";

export default function Caregory() {
  const showcat = () => {
    let categorylist = document.querySelector(".categorylist");
    categorylist.classList.toggle("showcategory");
  };
  return (
    <>
      <div className="categorycontainer">
        <div className="categorytitle">
          <div className="cat" onClick={showcat}>
            <i class="fas fa-bars">Categories</i>
          </div>
          <div className="categorylist">
            <li>
              {" "}
              <a href="/"> Macinery </a>{" "}
            </li>
            <li>
              {" "}
              <a href="/"> Mobile </a>{" "}
            </li>
            <li>
              {" "}
              <a href="/"> Vechiles </a>{" "}
            </li>
            <li>
              {" "}
              <a href="/"> Groceries </a>{" "}
            </li>
            <li>
              {" "}
              <a href="/"> Electronics </a>{" "}
            </li>
            <li>
              {" "}
              <a href="/"> Fashion </a>{" "}
            </li>
            <li>
              {" "}
              <a href="/"> Medicine </a>{" "}
            </li>
            <li>
              {" "}
              <a href="/"> Others </a>{" "}
            </li>
          </div>
        </div>
        <div className="readytoshop">
          <a className="stylenone" href="/">
            Ready To Shop
          </a>
        </div>
        <div className="sourceon">
          <a className="stylenone" href="/">
            Source
          </a>
        </div>
        <div className="sellon">
          <a className="stylenone" href="/">
            Sell on
          </a>
        </div>
      </div>
    </>
  );
}
