import React from "react";
import Card from './card';
import images from "../img";

// Presume backend data here
const artworks = [ 
    {id : 1, title: "Fresh loaf chunk", author:"Jake", date:"2021.10.10" },
    {id : 2, title: "Wildness", author:"Elly", date:"2017.06.30" },
    {id : 3, title: "Goodbye World", author:"Smith", date:"2020.10.07" },
    {id : 4, title: "Cat next door", author:"Brian", date:"2019.07.24" },
    {id : 5, title: "Best paw", author:"Paul", date:"2015.02.22" },
]

// props : galleryName
function Gallery(props) {
    return (
        <div>
            <div className="galleryName">{props.galleryName}</div>
            <div className="gallery">
                { artworks.map((item, index)=>{
                    return (
                        <Card 
                            image={images[index]}
                            title={item.title}
                            author={item.author}
                            date={item.date}/>
                    )}) }
            </div>
        </div>
    )
}


export default Gallery;