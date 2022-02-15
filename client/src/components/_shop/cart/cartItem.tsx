import * as React from 'react';
import { RenderCartItemsProps } from '../../containers/propContatiner'

export const CartItem = ( {image, price, quantity, title } : RenderCartItemsProps) => {
    return (
        <tr id='cartItemTableRow'>
            <td>
                <img src={image} width='100' alt="cart item" />
                <p>{title}</p>
            </td>
            <td>
                {price}
            </td>
            <td style={{"display" : "grid"}}>
                <span 
                    id='minus' 
                    style={{"fontWeight" : "bold", "color" : "#16b1d4"}}>&#8722;</span>
                { quantity }
                <span 
                    id='plus' 
                    style={{"fontWeight" : "bold" , "color" : "#16b1d4"}}>&#43;</span>
            </td>
            <td>
                {price * quantity}
            </td>
            <td>
                <input type={'checkbox'}  id={title} />
            </td>
        </tr>
    )
}