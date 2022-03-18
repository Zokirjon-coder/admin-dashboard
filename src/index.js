import React from "react";
import ReactDOM from "react-dom";
import AuthContext from "./context/Auth";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Root from "./root";

ReactDOM.render(
  <React.StrictMode>
    <AuthContext>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </AuthContext>
  </React.StrictMode>,
  document.getElementById("root")
);
