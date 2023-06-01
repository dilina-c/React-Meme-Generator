import React from "react";
import memeData from "../memeData";

export default function Meme() {
    // const [meme,setmemeImage]=React.useState("http://i.imgflip.com/1bij.jpg");
    const [meme,setMeme]=React.useState({
        topText:"",
        bottomText:"",
        randomImg:"http://i.imgflip.com/1bij.jpg"
    });
    function handleclick(){
        const memearray=memeData.data.memes;
        const randNum = Math.floor((Math.random() * memearray.length));
        setmemeImage(url => memearray[randNum].url)
    }
    return (
       <div className="meme">
                <div className="meme--form">
                    <input type="text" name="topText" placeholder="Top Text" className="meme--form--input" />
                    <input type="text" name="bottomText" placeholder="Bottom Text" className="meme--form--input" />
                    <button onClick={handleclick} className="meme--button">Get a new meme image  🖼</button>
                </div>
            {meme !==undefined && <img src={meme} alt="meme" className="meme--image" />}
       </div>
    )
}
