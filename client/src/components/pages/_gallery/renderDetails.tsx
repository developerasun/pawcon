import * as React from 'react';
import { useParams } from 'react-router-dom';

export function RenderDetails ( ) {
  // Returns an object of key/value pairs of the dynamic params 
  // from the current URL that were matched by the route path.
  const { title } = useParams()

  // =========== REPLACE : context => redux logic =========== // 
  React.useEffect(() => {
    
    // TO DO : add get request for artworks
    return () => {
      // abort signal if title matched
    }
  }, [ ])
  
  return (
    <div>
      {/* TO DO : .artworkDetail is grid in style */}
      <div className="artworkDetail">
        <div className="image">
          <img src="" alt="artwork" />
        </div>
        <div className="info">
          <span>artwork title</span>
          <p>artwork detail paragraph</p>
          <select name="" id="">
            <option value="">blockchain 1</option>
            <option value="">blockchain 2</option>
          </select>
          <span>artwork price</span>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
