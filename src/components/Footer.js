import React, { useEffect, useState } from "react";


import insta from "../images/insta_icon.png";
import discord from "../images/discord_icon.png";
import linkedin from "../images/linkedin_icon.png";
import gmail from "../images/gmail_icon.png";
import "./Footer.css";

export default function Footer(props){
    const [instaLink, setinstaLink] = useState('https://www.instagram.com/chuan.chen402/');
    const [discordLink, setdiscordLink] = useState('https://discordapp.com/users/290306268852256769');
    const [linkedinLink, setlinkedinLink] = useState('https://www.linkedin.com/in/chuan-chen-496199214/');
    const [gmailLink, setgmailLink] = useState('mailto:chuan.chen.info@gmail.com');

    return (
 
    <div className = "footer">
        <div>
            Copyright © 2023 <a href = "https://github.com/Chuan-Chen">Whykari</a>
        </div>
        <div className = "icon-shelf">
            
            <img className = "img" src = {insta} alt = "insta" onClick={()=>{window.open(instaLink)}}/>
            <img className = "img" src = {discord} alt = "discord" onClick={()=>{window.open(discordLink)}}/>
            <img className = "img" src = {linkedin} alt = "linkedin" onClick={()=>{window.open(linkedinLink)}}/>
            <img className = "img" src = {gmail} alt = "gmail" onClick={()=>{window.open(gmailLink)}}/>
        </div>
    </div>

    )
}