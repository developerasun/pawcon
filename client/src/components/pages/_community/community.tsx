import * as React from 'react';
import { Chat } from './chat';
import { Feedback } from './feedback';
import './sass/css/community.css';

interface MenuTabsProps {
  // MenuTabs props : an array of components 
  components : React.ComponentProps<React.ComponentType>[]
  names : string[]
}

// import this where needed
export const MenuTabs = ( { components, names } : MenuTabsProps ) => {
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
      } 
      return "" })
    }, [tabId])

  return (
    <div id='tabContainer'>
      <table id='tabTable'>
        <thead>
          <tr>
            {/* onClick : dispatch(clickTab()) here */}
            <th className='tabA' onClick={(event) => handleClick(event)}>{names[0]}</th>
            <th className='tabB' onClick={(event) => handleClick(event)}>{names[1]}</th>
            <th className='tabC' onClick={(event) => handleClick(event)}>{names[2]}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td id='tabA' className={`tabContent hidden`} >
            { components[0] }
            </td>
            <td id='tabB' className={ `tabContent hidden` } >
            { components[1] }
            </td>
            <td id='tabC' className={ `tabContent hidden` }>
            { components[2] }
            </td>
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

export function Community () {
  const [page, setPage] = React.useState(1)
  
  React.useEffect(() => {

  }, [ ])

  return (
    <div>
      <h1>community route</h1>

      <div className="menuTabs">
        {/* component args : 1) feedback 2) chat 3) blog  */}
        <MenuTabs 
          components={[<Feedback />, <Dummy />, <Dummy2 />]}
          names={["Feedback", "Chat", "Blog"]} />
      </div>

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
          
          <div 
            className="pagination">
            <button 
            // fix the hardcoded page later with react-query
              disabled={page<=1}
              onClick={()=>setPage(Math.max(page - 1, 1))}>&#8249;</button>
            <p>{page}</p>
            <button
            // fix the hardcoded page later with react-query
              disabled={page>=3}
              onClick={()=>setPage(page + 1)}>&#8250;</button>
          </div>
      </div>

      <Chat />
    </div>
  );
}
