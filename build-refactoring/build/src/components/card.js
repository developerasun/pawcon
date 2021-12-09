import React from "react";
import images from "../img";

function Card() { 
    const image = images.a;
    const date = new Date(); 
    return (
        <div style={{display:'inline-block', margin:10}}>
            <div className="card" style={
                {
                    display : 'flex', 
                    flexDirection:'column',
                    justifyContent:'center', 
                    alignItems:'center',
                    border : "2px solid green", 
                    width:'80%', 
                    padding: '1rem',
                    gap: 10
                }
            }>
                <img src={image} alt="card" style={{width:100, height:100}}/>
                <div className="title">Hello React Card</div>
                <div className="author">Jake Sung</div>
                <div className="date">{date.toLocaleDateString()}</div>
            </div>
        </div>
     ); 
}

export default Card;