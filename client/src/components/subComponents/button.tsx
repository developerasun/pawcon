import * as React from 'react';
import './sass/css/button.css'
import { IButtonProps } from '../containers/propContatiner'

export function Button ({ btnText, url }: IButtonProps) {
    return (
            <button className='buttonComponent' type='submit'>
                <a href={url} target={"_blank"} rel="noreferrer">
                {btnText}
                </a>
            </button>
    ) 
}
