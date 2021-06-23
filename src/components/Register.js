import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registeruser } from "../redux/actions/actions";
import { useHistory } from "react-router-dom";
export default function Register(props) {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const register = useSelector((state) => state.register);
  const { userInfo } = register;
  console.log(userInfo);
  const history = useHistory();
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/signin";
  const dispatch = useDispatch();

  const Postdata = (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      alert("Password Not matching");
    } else if (password.length < 3) {
      alert("Password is too short");
    } else {
      dispatch(registeruser(name, email, password));
      history.push(redirect);
    }
  };

  return (
    <div className="registercontainer">
      <h2>Register</h2>
      <form className="registerform" onSubmit={Postdata}>
        <label htmlFor="name">Name:</label>
        <input
          type="name"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setname(e.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required
          placeholder="Enter valid email address........"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          required
        />
        <label htmlFor="cpassword">Confirm Password</label>
        <input
          type="password"
          name="cpassword"
          id="cpassword"
          value={cpassword}
          onChange={(e) => setcpassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
