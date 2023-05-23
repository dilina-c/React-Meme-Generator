import React from "react";

export default function Meme() {
    return (
       <div className="meme">
                <form className="meme--form">
                    <input type="text" name="topText" placeholder="Top Text" className="meme--form--input" />
                    <input type="text" name="bottomText" placeholder="Bottom Text" className="meme--form--input" />
                    <button className="meme--button">Get a new meme image  🖼</button>
                </form>
 
       </div>
    )
}
