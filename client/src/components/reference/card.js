import React from "react";
import { Link } from "react-router-dom";

// props : images, title, author, date
function Card(props) { 
    return (
        <div className="card-container" style={{display:'inline-block', margin:10 }}>
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
                <img src={props.image} alt="card" style={{width:100, height:100}}/>
                <div className="title">{props.title}</div>
                <div className="author">{props.author}</div>
                <div className="date">{props.date}</div>
                <Link to={`/details/${props.routeDetails}`}
                      style={{textDecoration:'none', color:'green', fontWeight:'bold'}}
                >See detail</Link>
            </div>
        </div>
     ); 
}

export default Card;