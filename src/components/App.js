import React from "react";
import Intro from "./Intro";
import Footer from "./Footer";
import Header from "./Header";
import Scene from "../threejs/Box.js";
import "./App.css";

export default function App(){

/**
 *         <div className = "container">
            <div className = "center">
            <Header/>
            <Intro/>
            <Footer/>
            </div>
        </div>
 */

    return (
        <div style = {{height: "100vh", width: "100%"}}>
        <Scene></Scene>
        </div>

    )
}