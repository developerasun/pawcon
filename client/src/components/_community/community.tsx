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
  
  // should be moved to useEffect hook later since it is side-effect
  const handleClick = (tabName : string) => {
    const tabContents = document.getElementsByClassName("tabContent")
    Array.from(tabContents).map((content, index) => {
      tabContents[index].classList.add("hidden")

      if (content.id === tabName) {
        console.log(content.id)
        content.classList.remove("hidden")
        content.classList.add("visible")
      }
    })
  }

  React.useEffect(()=>{

}, [])

  return (
    <div>
      <span>create switchable tabs based on click</span>

      <table>
        <thead>
          <tr>
            <th className='tabLink' onClick={()=>handleClick('tabA')}>Tab A</th>
            <th className='tabLink' onClick={()=>handleClick('tabB')}>Tab B</th>
            <th className='tabLink' onClick={()=>handleClick('tabC')}>Tab C</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td id='tabA' className={`tabContent hidden`} style={{"backgroundColor" : "pink"}} >
              {component}
            </td>
            <td id='tabB' className={ `tabContent hidden` } style={{"backgroundColor" : "lightblue"}}>ss</td>
            <td id='tabC' className={ `tabContent hidden` } style={{"backgroundColor" : "tomato"}}>ff</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

const Dummy = () => {
  return <>hello I'm dummy component</>
}
const Dummy2 = () => {
  return <>cool dummy</>
}
const Dummy3 = () => {
  return <>hot dummy</>
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
