import * as React from 'react';
import './sass/css/gallery.css'
import { Link, useSearchParams } from 'react-router-dom';
import { GalleryCardsProps } from '../containers/propContatiner'

export function GalleryCards ( { title, description, author, date, image, id }:  GalleryCardsProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  setSearchParams( { title : "hello" } )

  return (
    // add design to card later
    <div className='galleryCard' >
      <img 
        className='galleryCardImage'
        src={image} 
        alt="gallery card" 
        loading='lazy'
      />
      <div className="galleryCardDetails">
        <span>{date}</span>
        <h3>{title}</h3>
        <span>{author}</span>
        <p>{description}</p>
        <Link to={`/gallery/${searchParams}`}>See Details</Link>
      </div>
    </div>
  );
}
