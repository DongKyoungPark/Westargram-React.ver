import React from "react"
import ReactDOM from "react-dom"
import "../src/Styles/reset.css"
import Login from "./Pages/Login/login"
import Main from "./Pages/Main/main"

ReactDOM.render(
    <React.StrictMode>
        {/* <Login /> */}
        <Main />
    </React.StrictMode>,
    document.getElementById("root")
)
