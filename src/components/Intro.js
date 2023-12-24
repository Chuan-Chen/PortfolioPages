import React from "react";
import "./Intro.css";
import Resume from "../files/Chuan_Chen_Resume.pdf"
import Profile_img from "../images/Profile.jpg";

function Profile(props){

    

    return (
        <div style = {{display: "grid", height: 250}}>
            <img src = {Profile_img} height = {160} style={{borderRadius: "100%", justifySelf: "center", alignSelf: "center", boxShadow: "0 0 4px black"}}></img>
            <div style = {{width:"100%", fontSize: "30px", textAlign: "center", fontWeight: "bold"}}>Chuan Chen</div>
        </div>
    )
}

export default function Intro(props){
    //<iframe className = "resume" src = {Resume} width={700} height={700} frameBorder={1}></iframe>
    return (
        <div className = "intro">
            <Profile></Profile>
            <br></br>
            <div>Resume📄: <a href = {Resume} alt = "Resume" target = "_blank">Resume</a></div>
            <div>Phone📞: (917)605-6373</div>
            <div>Email📧: <a href = "mailto:chuan.chen.info@gmail.com">chuan.chen.info@gmail.com</a></div>
            <br></br>
            <div style = {{width: "400px"}}>About✍️: Hi my name is Chuan Chen, an experienced C++ Tutor with a demonstrated history of working in the higher education. Skilled in Sales, Visual and Intercultural Communication, JavaScript, NodeJS, HTML, CSS, C++, Java, REST API and MongoDB.</div>
            <br></br>
            <div>Projects: 
                <li><a href = "https://shop.nauhc.dev/" target = "_blank">DeShop</a></li>
                <li><a href = "https://chuan-chen.github.io/Fullstack-Projects/IP/index.html" target = "_blank">IPFinder</a></li>
                <li><a href = "https://chuan-chen.github.io/Fullstack-Projects/Weather/dist/index.html" target = "_blank">Weather App</a></li>
                <li><a href = "https://chuan-chen.github.io/Fullstack-Projects/Tic_Tac_Toe/index.html" target = "_blank">Tic Tac Toe</a></li>
            </div>
            <div style={{fontSize: "11px"}}><br></br>Work in progress...</div>
        </div>
    )
}