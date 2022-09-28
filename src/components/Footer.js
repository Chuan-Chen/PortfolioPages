import React from "react";
import "./Footer.css";

export default function Footer(){

    return (
 
    <div class = "footer">
        <div>
            Copyright © 2022 <a href = "https://github.com/Chuan-Chen">Whykari</a>
        </div>
        <div class = "icon-shelf">
            <img class = "img" src = "resources/images/insta_icon.png" alt = "insta" onclick="window.open('https://www.instagram.com/chuan.chen402/');"/>
            <img class = "img" src = "resources/images/discord_icon.png" alt = "discord" onclick = "window.open('https://discordapp.com/users/290306268852256769');"/>
            <img class = "img" src = "resources/images/linkedin_icon.png" alt = "linkedin" onclick="window.open('https://www.linkedin.com/in/chuan-chen-496199214/');"/>
            <img class = "img" src = "resources/images/gmail_icon.png" alt = "gmail" onclick = "window.open('mailto:chuan.chen.info@gmail.com');"/>
        </div>
    </div>

    )
}