import { v4 as uuidV4 } from 'uuid';
// at the end of the day, reducer is about getting functions
// to manipulate states corresponding actinos.

// all state logics related to books inside the book reducer, meaning easier to scale
export const bookReducer = ( state, action ) => {
    switch (action.type) {
        case 'ADD_BOOK' : 
            return [ ...state , {
                title: action.book.title, 
                author : action.book.author, 
                id : uuidV4()
            }]
        case 'REMOVE_BOOK' : 
            return state.filter((book)=> book.id !== action.id)
        default : 
            return state
    }
} 