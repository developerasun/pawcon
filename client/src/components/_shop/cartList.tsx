import * as React from 'react';
import { Button } from '../subComponents/button';
import { v4 } from 'uuid';
import './sass/css/cartList.css';
import { initialCartItemState, initialCartItemStateProps } from '../containers/redux/initialStates'
import { RootState, useAppDispatch, useAppSelector } from '../containers/redux/store.hooks'
import { increaseQuantity, decreaseQuantity } from '../containers/redux/actionCreators'

const CartItem = ( {image, price, quantity } : initialCartItemStateProps) => {
  return (
    <tr>
      <td>
        <img src={image} width='100' alt="cart item" />
      </td>
      <td>{price}</td>
      <td style={{"display" : "grid"}}>
        <span 
          id='minus' 
          style={{"fontWeight" : "bold", "color" : "#16b1d4"}}>&#8722;</span>
        { quantity }
        <span 
          id='plus' 
          style={{"fontWeight" : "bold" , "color" : "#16b1d4"}}>&#43;</span>
      </td>
      <td>{price * quantity}</td>

    </tr>

  )
}

export function CartList () {
  // get state from Redux store
  const getCartItem = useAppSelector((state:RootState) => state.cart) 
  const dispatch = useAppDispatch()

  const handleRemoveFromCart = () => {}
  const handleAddToCart = () => {}
  return (

    <>
    <div className="cart">
      <span className="title">These Paws Are Ready to Go! &#128722;</span>
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
                  key={v4()}
                  id={item.id}
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
              <input type="checkbox" name="terms" id="terms" /> I agree to Terms & Conditions
            </label>
            <Button btnText='CHECKOUT' />
            <Button btnText='Paypal'/>
        </div>
      </div>

      <span>Cart state update with Redux/TS</span>
      {getCartItem?.map((item)=>{
        return ( 
          <div key={v4()}>
            <button onClick={()=>dispatch(increaseQuantity(item.id))}>
              increase
            </button>
            <p>{item.quantity}</p>
            <button onClick={()=>dispatch(decreaseQuantity(item.id))}>
              decrease
            </button>
          </div>
        )
      })}
    </div>
    </>
  );
}
