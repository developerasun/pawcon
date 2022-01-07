import * as React from 'react';
import { Link } from 'react-router-dom';
import { GalleryCardsStyle } from '../../containers/styleContainer'
import { GalleryCardsProps } from '../../containers/propContatiner'

export function GalleryCards ( { title, author, date, image, id }:  GalleryCardsProps) {
  return (
    // add design to card later
    <div className='galleryCard' style={GalleryCardsStyle}>
      <img src={image} alt="artwork" style={{"width" : 200}}/>
      <h3>{title}</h3>
      <li>By {author}, created at : {date}</li>
      
      {/* Link moves to a CardDetail component */}
      <Link to={`/gallery/${id}`}>See Details</Link>
    </div>
  );
}
