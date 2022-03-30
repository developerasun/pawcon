import * as React from 'react';
import './sass/css/gallery.css'
import { Link } from 'react-router-dom';
import { GalleryCardsProps } from '../../containers/C_props'
import { useAppDispatch } from '../../containers/redux/store.hooks';
import { fetchArtwork } from '../../containers/redux/actionCreators';

export function GalleryCards ( { title, description, author, date, image }:  GalleryCardsProps) {
  const oneArtwork = {
    title, 
    description, 
    author, 
    date,
    image
  }
  const dispatch = useAppDispatch()
  // add Redux logic to deliver props to renderDetails component

  const handleDetails = () => {
    console.log("cliekd")
    // store every details to Redux store to render it in lower comp
    dispatch(fetchArtwork(oneArtwork))
  }
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
        <Link to={`/details/${title}`} > <u><i onClick={handleDetails}>See Details</i></u> </Link>
      </div>
    </div>
  );
}
