import * as React from 'react';
import { v4 } from 'uuid';

const initialBlogs  = [
  { id : v4(), title : "testing blog", description : "hello pawcon blog" },  
  { id : v4(), title : "hello pawcon", description : "world is good" },  
  { id : v4(), title : "goodbye pawcon", description : "cute paw" },  
]

export interface IBlogProps {
}

export function BlogList (props: IBlogProps) {
  const [blogs, setBlogs] = React.useState(initialBlogs)
  const handleClick = () => {
    
  }

  // useEffect : fetch initial blogs and render in a 
  // below blog
  React.useEffect(()=>{

  }, [])

  return (
    <div>
      {/* maps blog entries in a table */}
      <table className='blogTable'>
            <thead>
              <tr>
                <th>number</th>
                <th>title</th>
                <th>author</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* map blog list here */}
                <td>number here</td>
                <td>title here</td>
                <td>description here</td>
              </tr>
            </tbody>
          </table>

      <button onClick={handleClick}>Add blog</button>
    </div>
  );
}
