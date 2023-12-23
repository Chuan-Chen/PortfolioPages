import React, { useEffect, useState } from "react";
import "./Header.css";

export default function Header(){ 

    const [characters, setCharacters] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(()=>{
        if (index < characters.length){
            
        }
        
    }, [])





    return (
        <div className="header">
            <div className = "typewriter">{characters}</div>
        </div>
    );
}