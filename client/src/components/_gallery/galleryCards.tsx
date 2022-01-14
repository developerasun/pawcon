import * as React from 'react';
import { Link } from 'react-router-dom';
import { GalleryCardsStyle } from '../containers/styleContainer'
import { GalleryCardsProps } from '../containers/propContatiner'

export function GalleryCards ( { title, description, author, date, image, id }:  GalleryCardsProps) {
  return (
    // add design to card later
    <div className='galleryCard' style={GalleryCardsStyle}>
      <img src={image} alt="gallery card" style={{width:100, height:100}}/>
      <p>{date}</p>
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{description}</p>
      
      {/* Link moves to a CardDetail component */}
      <Link to={`/gallery/${id}`}>See Details</Link>
    </div>
  );
}
