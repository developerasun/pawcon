import React, { useContext, useState } from 'react';
import { ReducerContext } from './context/reducerContext'

// forms in React : tracking what user have typed => saving it in state
const ReducerBookForm = () => {
    const { dispatch } = useContext(ReducerContext)
    const [title, setBookTitle] = useState('')
    const [author, setBookAuthor] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch( { type : 'ADD_BOOK', book : { title, author } })
        setBookTitle('')
        setBookAuthor('')
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <label>REDUCER : book namess</label><br/>
            {/* event.target.value : Returns the value of the data at the cursor's current position. */}
            <input type={"text"} placeholder='enter a book title' value={title} required onChange={(e)=> setBookTitle(e.target.value)}/> <br/>
            <input type={"text"} placeholder='enter a book author' value={author} required onChange={(e)=> setBookAuthor(e.target.value)}/> <br/>
            <input type={"submit"} value={"Add Book"}/>
        </form>
     );
}
 
export default ReducerBookForm;