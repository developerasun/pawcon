import * as React from 'react';

/////////////////////////////
// add themeReducer here/////
/////////////////////////////

interface darkMode  {
    backgroundColor : "black", 
    color : "white"
}

interface lightMode  {
    backgroundColor : "white", 
    color : "black"
}

interface themeContextProps { 
    mode : 'dark' | 'light',
    theme : darkMode | lightMode,  
    setTheme(event:React.MouseEvent<HTMLButtonElement>):void
}

export const ThemeContext = React.createContext<themeContextProps | null>(null)

export interface IThemeContextProviderProps {
    children : React.ReactNode
}

export function ThemeContextProvider (props: IThemeContextProviderProps) {
  // useReducer here
  return (
    <>
        {/* <ThemeContext.Provider value={{ }}>
            {props.children}
        </ThemeContext.Provider> */}
    </>
  );
}
