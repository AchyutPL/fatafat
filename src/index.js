import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();

//LOGIC FOR MODE
let formode = document.querySelector(".formode");
let mode = document.querySelector(".mode");
let circle = document.querySelector(".circle");

mode.addEventListener("click", () => {
  formode.classList.toggle("dark");
  circle.classList.toggle("moveright");
});
