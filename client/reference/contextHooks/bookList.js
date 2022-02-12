import React from 'react';
import { AuthContext } from './context/authContext';
import { ThemeContext } from './context/themeContext';

class BookList extends React.Component { 
    // You can use Context.Consumer instead of the static contextType.
    // The Context.Consumer takes a function with a context parameter, which is 
    // a global state from its context provider.
    render() {
        return( 
            <AuthContext.Consumer>{(authContext)=>(
                // return JSX that uses AuthContext's state
                <ThemeContext.Consumer>{(themeContext)=>{
                    const { isLightTheme, light, dark } = themeContext
                    const { isAuthenticated, toggleAuth } = authContext
                    const theme = isLightTheme ? light : dark
                    return (<div>
                                <div>
                                    <button onClick={toggleAuth}>
                                    { isAuthenticated ? "Logged in" : "Logged out"}
                                    </button>
                                </div>
                                <ul style={{"backgroundColor" : theme.bg, "color" : theme.syntax, "padding": "1rem"}}>
                                    <li style={{"backgroundColor" : theme.ui}}>my book</li>
                                    <li style={{"backgroundColor" : theme.ui}}>your book</li>
                                    <li style={{"backgroundColor" : theme.ui}}>his book</li>
                                </ul>
                            </div>)
                }}</ThemeContext.Consumer>
            )}</AuthContext.Consumer>
        ) // return whole JSX
    }
}

export default BookList