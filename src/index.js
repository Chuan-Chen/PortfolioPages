import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.js";

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
    
);