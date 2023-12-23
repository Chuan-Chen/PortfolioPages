import React from "react";
import "./Intro.css";
import Resume from "../files/Chuan_Chen_Resume.pdf"



function Profile(props){

    return (
        <div>

        </div>
    )
}

export default function Intro(props){
    //<iframe className = "resume" src = {Resume} width={700} height={700} frameBorder={1}></iframe>
    return (
        <div className = "intro">
            <Profile></Profile>
            <div><a href = {Resume} alt = "Resume" >Resume</a></div>
            <div>Phone: (917)605-6373</div>
            <div>Email: <a href = "mailto:chuan.chen.info@gmail.com">chuan.chen.info@gmail.com</a></div>
            <div>About: Hi my name is Chuan Chen</div>
        </div>
    )
}