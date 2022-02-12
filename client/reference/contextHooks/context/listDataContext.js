import React, { createContext, useState } from 'react';

export const ListContext = createContext()

const ListDataContextProvider = (props) => {
    const [dummyList, setDummyList] = useState([
        "dummy text 1",
        "dummy text 2",
        "dummy text 3",
    ])
    return ( 
        <ListContext.Provider value={ { dummyList } }>
            {props.children}
        </ListContext.Provider>
     );
}
 
export default ListDataContextProvider;