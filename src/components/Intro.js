import React, { useEffect, useState } from "react";
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

    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
    const [screenSize, setScreenSize] = useState({middleX: 0, middleY: 0});
    const [offset, setOffset] = useState({offsetX: 0, offsetY: 0});

    useEffect(()=>{
        let x = 0;
        let y = 0;
        let midX = 0;
        let midY = 0;
        let offX = 0;
        let offY = 0;
        const updateMousePosition = e => {
            x = e.clientX;
            y = e.clientY;
            midX = window.innerWidth / 2;
            midY = window.innerHeight / 2;
            offX = (x - midX) / midX * 15;
            offY = -1 * (y - midY) / midY * 15;

            setMousePosition({x: x, y: y});
            setScreenSize({middleX: midX, middleY: midY});
            setOffset({offsetX: offX, offsetY: offY})
        };

        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        }
    }, []);
    
    //<iframe className = "resume" src = {Resume} width={700} height={700} frameBorder={1}></iframe>
    return (

        <div className = "intro" style = {{transform: `perspective(5000px) rotateY(${offset.offsetX}deg) rotateX(${offset.offsetY}deg)`}} >
            <Profile></Profile>
            <br></br>
            <div>Resume📄: <a href = {Resume} alt = "Resume" target = "_blank">Resume</a></div>
            <div>Phone📞: (917)605-6373</div>
            <div>Email📧: <a href = "mailto:chuan.chen.info@gmail.com">chuan.chen.info@gmail.com</a></div>
            <br></br>
            <div style = {{width: "400px"}}>About✍️: Hi my name is Chuan Chen, an experienced C++ Tutor and IT Specialist. Skilled Networking, self-hosting, JavaScript, NodeJS, HTML, CSS, C++, Java, REST API and MongoDB. Currently builing an <a href="https://www.linkedin.com/in/chuan-chen-496199214/overlay/projects/162029054/multiple-media-viewer/?profileId=ACoAADYh5HIBJ4gEWA3aNLzjUa3wOnNQZHQ06cY&treasuryMediaId=1730507831179" target="_blank">Inventory Management</a> app. </div>
            <br></br>
            <div>Projects: 
                <li><a href = "https://message-board.nauhc.dev" target = "_blank">Messageboard</a></li>
                <li><a href = "https://shop.nauhc.dev/" target = "_blank">DeShop</a></li>
                <li><a href = "https://chuan-chen.github.io/Fullstack-Projects/IP/index.html" target = "_blank">IPFinder</a></li>
                <li><a href = "https://chuan-chen.github.io/Fullstack-Projects/Weather/dist/index.html" target = "_blank">Weather App</a></li>
                <li><a href = "https://chuan-chen.github.io/Fullstack-Projects/Tic_Tac_Toe/index.html" target = "_blank">Tic Tac Toe</a></li>
            </div>
            <div style={{fontSize: "11px"}}><br></br>Work in progress...</div>
        </div>

        
    )
}