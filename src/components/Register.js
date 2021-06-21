import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registeruser } from "../redux/actions/actions";
export default function Register() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const register = useSelector((state) => state.register);
  const { newuser } = register;

  const dispatch = useDispatch();

  const Postdata = (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      alert("Password Not matching");
    } else {
      dispatch(registeruser(email, password, cpassword));
    }
  };
  return (
    <div className="registercontainer">
      <h2>Log In</h2>
      <form className="registerform" onSubmit={Postdata}>
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
        <label htmlFor="cpassword">Confirm Password</label>
        <input
          type="password"
          name="cpassword"
          id="cpassword"
          value={cpassword}
          onChange={(e) => setcpassword(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
