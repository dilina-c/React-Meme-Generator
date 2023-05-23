import React from "react";
import Trollface from "../images/Trollface.png";

export default function Header() {
    return (
        <header className="header">
            <img src={Trollface} alt="trollface" className="header--image" />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}
