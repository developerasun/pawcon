import * as React from 'react';
import './sass/css/button.css'

export interface IButtonProps {
    btnText : string
    url? : string
}

export function Button ({ btnText, url }: IButtonProps) {
    return (
            <button className='buttonComponent' type='submit'>
                <a href={url} target={"_blank"}>
                {btnText}
                </a>
            </button>
    ) 
}
