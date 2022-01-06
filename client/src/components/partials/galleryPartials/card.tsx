import * as React from 'react';
import { GalleryCardStyle } from '../../containers/styleContainer'

export type GalleryCardProps = {
    title : string
    author : string
    date : string
    image : string
}


export function GalleryCard ( { title, author, date, image }:  GalleryCardProps) {
  return (
    <div className='galleryCard' style={GalleryCardStyle}>
      <img src={image} alt="artwork" style={{"width" : 200}}/>
      <h3>{title}</h3>
      <li>By {author}, created at : {date}</li>
    </div>
  );
}
