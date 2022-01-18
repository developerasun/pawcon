import * as React from 'react';

export interface IButtonProps {
    btnText : string
    url? : string
}

export const ButtonStyles = { 
    "fontSize" : "1rem", 
    "padding" : "1rem", 
    "backgroundColor" : "white",
    "borderImage" : "linear-gradient(to right, #01c9ca 0%, #3886FF 100%)",
    "borderImageSlice" : "4",
    "borderImageWidth" : "0.2rem", 
    "cursor": "pointer"
} as React.CSSProperties

export function Button ({ btnText, url }: IButtonProps) {
    return (
        <a href={url} target={"_blank"}>
            <button type='submit' style={ButtonStyles}>{btnText}</button>
        </a>
    ) 
}
