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
      will be added
    </div>
  );
}
