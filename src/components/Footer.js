import React, { useEffect, useState } from "react";


import insta from "../images/insta_icon.png";
import discord from "../images/discord_icon.png";
import linkedin from "../images/linkedin_icon.png";
import gmail from "../images/gmail_icon.png";
import github from "../images/github_icon.png";
import "./Footer.css";

export default function Footer(props){
    const [instaLink, setinstaLink] = useState('https://www.instagram.com/chuan.chen402/');
    const [discordLink, setdiscordLink] = useState('https://discordapp.com/users/290306268852256769');
    const [linkedinLink, setlinkedinLink] = useState('https://www.linkedin.com/in/chuan-chen-496199214/');
    const [githubLink, setgithubLink] = useState('https://github.com/Chuan-Chen');
    const [gmailLink, setgmailLink] = useState('mailto:chuan.chen.info@gmail.com');
    return (
 
    <div className = "footer">
        <div>
            Copyright © 2023 <a href = "https://github.com/Chuan-Chen">Chuan Chen</a>
            
        </div>
        <div className = "icon-shelf">
            
            <img className = "img" title = {"Instagram"} src = {insta} alt = "insta" onClick={()=>{window.open(instaLink)}}/>
            <img className = "img" title = {"Discord"} src = {discord} alt = "discord" onClick={()=>{window.open(discordLink)}}/>
            <img className = "img" title = {"Linkedin"} src = {linkedin} alt = "linkedin" onClick={()=>{window.open(linkedinLink)}}/>
            <img className = 'img' title = {"Github"} src = {github} alt = 'github' onClick={()=>{window.open(githubLink)}}></img>
            <img className = "img" title = {"Gmail"} src = {gmail} alt = "gmail" onClick={()=>{window.open(gmailLink)}}/>
        </div>
    </div>

    )
}