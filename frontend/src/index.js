import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { CartContextProvider } from "./store/cart-context";

ReactDOM.render(
  <CartContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartContextProvider>,
  document.getElementById("root")
);
