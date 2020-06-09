import React from "react";
import ReactDOM from "react-dom";
import "./Styles/reset.css";
import App from "./App";
import Login from "./Pages/Login/Login";
import Main from "./Pages/Main/Main";

ReactDOM.render(
    <React.StrictMode>
        {/* <App /> */}
        <Login />
        {/* <Main/> */}
    </React.StrictMode>,
    document.getElementById("root")
);
