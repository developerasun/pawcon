import * as React from 'react';
import { useParams } from 'react-router-dom';
import { ArtworkContext } from '../contexts/artworkContext';

export function RenderDetails ( ) {
  // Returns an object of key/value pairs of the dynamic params 
  // from the current URL that were matched by the route path.
  const { title } = useParams()
  const artworks = React.useContext(ArtworkContext)
  const cardPicked = artworks.map((item)=>{
    if (item.title === title) { 
      return (
        <div>
          you have picked :  {title}
        </div>
      )
    }
  })
  return (
    <div>
      {cardPicked}
    </div>
  );
}
