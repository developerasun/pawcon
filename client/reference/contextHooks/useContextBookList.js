import React, { useContext } from 'react';
import { ThemeContext } from './context/themeContext';

const UseContextBookList = () => {
    // a context object (the value returned from React.createContext) 
    // and returns the current context value, as given by the nearest 
    // context provider for the given context.
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    return ( 
    <ul style={{"backgroundColor" : theme.bg, "color" : theme.syntax, "padding": "1rem"}}>
        <li style={{"backgroundColor" : theme.ui}}>useContext : my book</li>
        <li style={{"backgroundColor" : theme.ui}}>useContext : your book</li>
        <li style={{"backgroundColor" : theme.ui}}>useContext : his book</li>
    </ul>
     );
}
 
export default UseContextBookList;