import * as React from 'react';
import { Feedback } from './feedback';
import './sass/css/community.css';

interface MenuTabsProps {
  // MenuTabs props : a component or Array of components 
  component : React.ComponentProps<React.ComponentType> | React.ComponentProps<React.ComponentType>[]
}

// MenuTabs should take component as argument 
// this component will be imported and used in '/create' as well. 
export const MenuTabs = ( { component } : MenuTabsProps ) => {
  const [visibility, setVisibility] = React.useState(true)

  React.useEffect(()=> {
    
  }, [ ])
  const handleClick = () => setVisibility(!visibility)
  
  return (
    <div>
      <span>create switchable tabs based on click</span>

      <table>
        <thead>
          <tr>
            <th onClick={handleClick} >Component 111</th>
            <th >Component 222</th>
            <th >Component 333</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={visibility ? `visible` : 'hidden' } style={{"backgroundColor" : "pink"}}>
              {component}
            </td>
            <td className={visibility ? `visible` : 'hidden' } style={{"backgroundColor" : "lightblue"}}>ss</td>
            <td className={visibility ? `visible` : 'hidden' } style={{"backgroundColor" : "tomato"}}>ff</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

const Dummy = () => {
  return <>hello I'm dummy component</>
}

export function Community () {
  return (
    <div>
      
      <h1>community route</h1>
      {/* component args : 1) blog 2) chat 3) feedback */}
      <MenuTabs component={<Dummy />}/>
      editor js here
      {/* <Feedback /> */}
    </div>
  );
}
