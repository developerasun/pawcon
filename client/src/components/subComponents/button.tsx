import * as React from 'react';
import './sass/css/button.css'
import { IButtonProps } from '../containers/C_props'

export function Button ({ btnText, url, callback }: IButtonProps) {
    return (
        <button 
            onClick={callback}
            className='buttonComponent' 
            type='submit'>
            <a href={url} target={"_blank"} rel="noreferrer">
            {btnText}
            </a>
        </button>
    ) 
}
