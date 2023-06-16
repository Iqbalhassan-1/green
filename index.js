import React from "react";
import ReactDOM from "react-dom";
import "./i18n";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
