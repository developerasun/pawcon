import { useContext } from 'react';
import { AuthContext } from './context/authContext';
import { ThemeContext } from './context/themeContext';

const MultipleUseContextBookList = () => {
    // you can use multiple useContexts in one component
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const { isAuthenticated, toggleAuth } = useContext(AuthContext)
    const theme = isLightTheme ? light : dark
    return ( 
        <div>
            <div>
                <button onClick={toggleAuth}>
                { isAuthenticated ? "multiple useContext - Logged in" : "multiple useContext - Logged out"}
                </button>
            </div>
            <ul style={{"backgroundColor" : theme.bg, "color" : theme.syntax, "padding": "1rem"}}>
                <li style={{"backgroundColor" : theme.ui}}>multiple useContext : my book</li>
                <li style={{"backgroundColor" : theme.ui}}>multiple useContext : your book</li>
                <li style={{"backgroundColor" : theme.ui}}>multiple useContext : his book</li>
            </ul>
        </div>

     );
}
 
export default MultipleUseContextBookList;