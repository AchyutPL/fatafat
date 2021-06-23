import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buynow, productscreenlist } from "../redux/actions/actions";
import Loading from "../components/Loading";
import Message from "../components/Message";

export default function Product(props) {
  const productdetails = useSelector((state) => state.productdetails);
  const { loading, error, bug } = productdetails;

  const dispatch = useDispatch();
  const productId = props.match.params.id;
  useEffect(() => {
    dispatch(productscreenlist(productId));
  }, [dispatch, productId]);
  const [qty, setqty] = useState(1);

  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };

  const buyNowHandler = () => {
    dispatch(buynow(productId, qty));
    props.history.push("/shipping");
  };
  return (
    <>
      {" "}
      {loading ? (
        <Loading></Loading>
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <div className="productContainer">
          <div className="productimage">
            <img src={bug.path} alt="" />
          </div>
          <div className="productinfo">
            <div className="productName"> {bug.productname}</div>
            <div className="price">Price :Rs.{bug.price}</div>
            <div className="counterCart">
              Qty:
              <select
                className="qtyamount"
                name=""
                id=""
                value={qty}
                onChange={(e) => setqty(e.target.value)}
              >
                {[...Array(bug.countinstock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </div>
            <hr />
            <div className="cart_buy">
              <button className="btn" onClick={addToCartHandler}>
                {" "}
                <i
                  style={{ color: "black" }}
                  className="fa fa-shopping-cart"
                  aria-hidden="true"
                ></i>
                Add To Cart
              </button>
              <button className="btn" onClick={buyNowHandler}>
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
      )}
    </>
  );
}
