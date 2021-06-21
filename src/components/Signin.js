import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Axios from "axios";
import { signIn } from "../redux/actions/actions";
export default function Signin(props) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  const signreducer = useSelector((state) => state.signreducer);
  const { userInfo } = signreducer;
  const Postdata = (e) => {
    e.preventDefault();
    dispatch(signIn(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, userInfo, redirect]);
  return (
    <>
      <div className="signincontainer">
        <h2>Log In</h2>
        <form className="signinform" onSubmit={Postdata}>
          <label htmlFor="email">Username</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button type="submit">Sign In</button>
          <h5 style={{ textAlign: "center" }}>
            New <a href="/register">Register</a> here
          </h5>
        </form>
      </div>
    </>
  );
}
