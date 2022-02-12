import { useContext } from "react";
import { ThemeContext } from "./context/themeContext";

const UseContextToggle = () => {
  const { toggleTheme } = useContext(ThemeContext)
    return ( 
        <button onClick={toggleTheme}>useContext toggle</button>
     );
}
 
export default UseContextToggle;