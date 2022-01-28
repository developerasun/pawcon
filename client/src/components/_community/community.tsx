import * as React from 'react';
import { Feedback } from './feedback';
import './sass/css/community.css';

interface MenuTabsProps {
  // MenuTabs props : a component or Array of components 
  component : React.ComponentProps<React.ComponentType> | React.ComponentProps<React.ComponentType>[]
}

// import this where needed
export const MenuTabs = ( { component } : MenuTabsProps ) => {
  const [tabId, setTabId] = React.useState("tabA")
  const handleClick = (event : React.MouseEvent) => {
    setTabId(event.currentTarget.className)
  }

  // filter a clicked tab to match tab content
  React.useEffect(()=>{
    const tabContents = document.getElementsByClassName("tabContent")
    Array.from(tabContents).map((content, index) => {
      tabContents[index].classList.add("hidden")
      if (content.id === tabId) { 
        content.classList.remove("hidden")
        content.classList.add("visible")
      } })
    }, [tabId])

  return (
    <div>
      <span>create switchable tabs based on click</span>

      <table style={{"border" : "1px solid white", "borderCollapse" : "collapse"}}>
        <thead>
          <tr>
            {/* onClick : dispatch(clickTab()) here */}
            <th className='tabA' onClick={(event) => handleClick(event)}>Tab A</th>
            <th className='tabB' onClick={(event) => handleClick(event)}>Tab B</th>
            <th className='tabC' onClick={(event) => handleClick(event)}>Tab C</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td id='tabA' className={`tabContent hidden`} style={{"backgroundColor" : "pink"}} >
              { component }
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
      <Feedback />

    <div className="notice">
        <h2 className="title">See Reviews Here</h2>
        <div className="searchBox">Search bar here</div>
        <table className="table">
            <thead>
                <tr>
                    <td>Number</td>
                    <td>Title</td>
                    <td>UserId</td>
                    <td>Posted</td>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
        
        <div className="pagination">Pagination here</div>
        <div className="buttons">
            <button className="getBtn">Get JSON API</button>
            <button className="saveBtn">Save JSON</button>
        </div>
    </div>
    </div>
  );
}
