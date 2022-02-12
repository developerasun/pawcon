// import react snippet : imr
import React from 'react';
import { ThemeContext } from './context/themeContext';

// class component snippet : cc
class ToggleTheme extends React.Component {

    static contextType = ThemeContext
    render() { 
        const { toggleTheme } = this.context
        return (
        <button onClick={toggleTheme}>
            Toggle Theme
        </button>
        );
    }
}
 
export default ToggleTheme;