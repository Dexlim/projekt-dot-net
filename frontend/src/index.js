import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";


import "./index.css";
import App from "./App";
import { CartContextProvider } from "./store/cart-context";


ReactDOM.render(
  <CartContextProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </CartContextProvider>,
  document.getElementById("root")
);
