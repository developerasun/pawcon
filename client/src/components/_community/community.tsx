import * as React from 'react';
import './sass/css/community.css';

// MenuTabs should take component as argument 
// this component will be imported and used in '/create' as well. 
export const MenuTabs = () => {
  const [visibility, setVisibility] = React.useState(true)
  const handleClick = () => setVisibility(!visibility)
  
  return (
    <div>
      <span>create switchable tabs based on click</span>

        <div 
            className={visibility ? `visible` : 'hidden' }
            onClick={handleClick} 
            style={{"backgroundColor" : "pink"}}>
          <span>component 1 here</span>
        </div>

        <li style={{"backgroundColor" : "lightblue"}}>component 2 here</li>
        <li style={{"backgroundColor" : "tomato"}}>component 3 here</li>

    </div>
  )
}

export function Community () {
  return (
    <div>
      
      <h1>community route</h1>
      {/* component args : 1) blog 2) chat 3) feedback */}
      <MenuTabs />

    </div>
  );
}
