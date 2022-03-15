import * as React from 'react';

export interface  SliderProps {
}

type SliderPageState = { 
  page : number
}

type SliderButtonAction = { 
  type : "prev" | "next"
}

const initialState = { 
  page : 1 
}

const reducer = (state : SliderPageState, action : SliderButtonAction) => { 
  switch (action.type) {
    case "prev" : 
      return { page : state.page -1 }
      
    case "next" :
      return { page : state.page +1 }
      
    default : 
      return state
    }
}

// image slider here
export function Slider (props:  SliderProps) {
  const [page, setPage] = React.useState(1)
  // const [ state, dispatch ] = React.useReducer(reducer, initialState)

  return (
    <div className='slider'>
      {/* img slider here */}
      <div className="images">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <div className="buttons">
        <button className='left'  >&#8249;</button>
        <button className='right' >&#8250;</button>
      </div>
    </div>
  );
}