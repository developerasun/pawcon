import * as React from 'react';
import { RenderCartItemsProps } from '../../containers/propContatiner'
import { removeFromCart } from '../../containers/redux/actionCreators';
import { useAppDispatch } from '../../containers/redux/store.hooks';

export const CartItem = ( {image, price, quantity, title } : RenderCartItemsProps) => {
    const dispatch = useAppDispatch()
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
            <td 
                // delete cart item with Redux
                onClick={() => dispatch(removeFromCart(title))}
                className='deleteButton'
                style={{"cursor":"pointer", "fontSize" : "1.2rem", "color":"tomato",  "padding" : "0 1.5rem"}}
                id={title}>
                &#128465;
            </td>
        </tr>
    )
}