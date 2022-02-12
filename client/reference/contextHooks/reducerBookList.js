import React, { useContext, useState, useEffect } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { ReducerBookForm } from './reducerBookForm'
import { ReducerContext } from './context/reducerContext';

function ReducerBookList() {
    const { books, dispatch } = useContext(ReducerContext)

    return ( 
        <div>
            ================================
            <ul>
                {books.map((book)=>{
                    return ( 
                    <>
                        <li key={uuidV4}>{book.title} by {book.author}</li>
                        <button onClick={()=>dispatch( { type : 'REMOVE_BOOK', id :  book.id  })}>Delete book</button>
                    </>
                    )
                })}
            </ul>
        </div>
     );
}

export default ReducerBookList;