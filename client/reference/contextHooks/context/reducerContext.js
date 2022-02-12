import React, { createContext, useEffect, useReducer, useState } from 'react';
import { bookReducer } from '../bookReducer'
export const ReducerContext = createContext()

const ageReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ONE' : 
            return state +1
        case 'ADD_TWO' : 
            return state +2
        case 'ADD_NUM' : 
            return state + action.num
        default : 
            return state
    }
}

// dispatch({ type: 'ADD_ONE' })
// dispatch({ type: 'ADD_TWO' })
// dispatch({ type: 'ADD_NUM', num : 5 })


const ReducerContextProvider = (props) => {

    // const [age , dispatch] = useReducer(ageReducer, 28)
    // third parameter of useReducer is to set a default value, ignoring second parameter
    const [books , dispatch] = useReducer(bookReducer, [], ()=>{
        const localData = localStorage.getItem('my books')
        if (localData) { return JSON.parse(localData) }
        else { return [] }
    })
    // const [age, setAge] = useState(28)
    // const addOne = () => { setAge(age + 1)}
    // const addTwo = () => { setAge(age + 2)}
    // const addNumToAge = (num) => { setAge(age + num)}

    useEffect(()=> {
        localStorage.setItem("my books" , JSON.stringify(books))
    }, [books])

    return ( 
        <ReducerContext.Provider value={{books, dispatch } }>
            {props.children}
        </ReducerContext.Provider>
     );
}
 
export default ReducerContextProvider;