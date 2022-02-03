import * as React from 'react';
import './sass/css/gallery.css'
import { Link } from 'react-router-dom';
import { GalleryCardsProps } from '../containers/propContatiner'

export function GalleryCards ( { title, description, author, date, image }:  GalleryCardsProps) {
  
  return (
    <div className='card' >
      <img 
        className='cardImage'
        src={image} 
        alt="gallery card" 
        loading='lazy'
      />
      <div className="cardDetails">
        <span className='date'>{date}</span>
        <h3 className='title'>{title}</h3>
        <span className='author'>{author}</span>
        <p className='description'>{description}</p>
        <Link to={`/details/${title}`} > <u><i>See Details</i></u> </Link>
      </div>
    </div>
  );
}
