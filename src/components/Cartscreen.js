import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/actions";
import { removefromcart } from "../redux/actions/actions";
export default function Cartscreen(props) {
  const productId = props.match.params.id;
  console.log(productId);
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const cart = useSelector((state) => state.cart);
  const { cartitems } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeCartHandler = (id) => {
    dispatch(removefromcart(id));
  };
  return (
    <>
      <h2 className="rowtitles">Your Products</h2>
      {cartitems.map((item) => (
        <div className="cartcontainer" key={item.product}>
          <img src={item.image} alt="" />
          <div className="cartname">Product : {item.name} </div>
          <div className="cartprice">Price : {item.price}</div>
          <div>
            <select
              className="qtyselect"
              value={item.qty}
              onChange={(e) =>
                dispatch(addToCart(item.product), Number(e.target.value))
              }
            >
              {[...Array(item.countinstock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
          </div>

          <div>
            <button
              className="btn"
              onClick={() => removeCartHandler(item.product)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
