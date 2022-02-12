import React from 'react';
import { ThemeContext } from './context/themeContext'


class Navbar extends React.Component { 
    // If set, this.context will be set at runtime to the current value of the given Context.
    // now Navbar context type is set to the ThemeConext, meaning that
    // this component can access to ThemeContextProvider's state.
    static contextType = ThemeContext 
    render() {
        console.log(this.context)
        const { isLightTheme, light, dark } = this.context
        const theme = isLightTheme ? light : dark
        return( 
            <nav style={{"backgroundColor" : theme.ui, color: theme.syntax}}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        )
    }
}

export default Navbar