import React from "react";
import Intro from "./Intro";
import Footer from "./Footer";
import Header from "./Header";
import "./App.css";

export default function App(){

    return (
        <div className = "container">
            <div className = "center">
            <Header/>
            <Intro/>
            <Footer/>
            </div>
        </div>

    )
}