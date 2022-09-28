import React from "react";
import "./Intro.css";

export default function Intro(props){

    return (
        <div className = "intro">
            <canvas style = {{height: document.documentElement.scrollHeight}}></canvas>
        </div>
    )
}