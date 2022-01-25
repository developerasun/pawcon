import * as React from 'react';
import { Button } from '../subComponents/button';
import './sass/css/cartList.css';

const initialCartItemState = [
  { image : '' , price : 1, quantity : 1 },
  { image : '' , price : 3, quantity : 4 },
  { image : '' , price : 4, quantity : 10 },
  { image : '' , price : 13, quantity : 2 },
]

interface CartItemProps {
  image : string
  price : number
  quantity : number
}

const CartItem = ( {image, price, quantity } : CartItemProps) => {
  return (
    <tr>
      <td>
        <img src={image} width='100' alt="cart item" />
      </td>
      <td>{price}</td>
      <td style={{"display" : "grid"}}>
        <span id='minus' style={{"fontWeight" : "bold", "color" : "#16b1d4"}}>&#8722;</span>
        { quantity }
        <span id='plus' style={{"fontWeight" : "bold" , "color" : "#16b1d4"}}>&#43;</span>
      </td>
      <td>{price * quantity}</td>
    </tr>
  )
}

export function CartList () {
  React.useEffect(()=>{
    const table = document.getElementById("items") as HTMLTableElement
    console.log(table.rows.length)
  }, [ ])
  return (

    <>
    <div className="cart">
      <span className="title">PawCon Cart &#128722;</span>
      <div id='list'>
        {/* cart item  */}
        <table id='items' style={{"borderStyle" : "solid"}}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {/* assume four cart items */}
            {initialCartItemState.map((item) => {
              return (
                <CartItem 
                  image={item.image}
                  price={item.price}
                  quantity={item.quantity}
                />
              )
            })}
          </tbody>
        </table>

        <div className="payment">
            <p className="total"> CART TOTAL : {129}</p>
            <label htmlFor="terms">
              <input type="checkbox" name="" id="terms" /> I agree to Terms & Conditions
            </label>
            <Button btnText='CHECKOUT' />
            <Button btnText='Paypal'/>
        </div>
      </div>
    </div>
    </>
  );
}
