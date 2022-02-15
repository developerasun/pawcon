import * as React from 'react';
import { v4 } from 'uuid';
import '../sass/css/cartList.css';
import { initialCartItemState, initialCartItemStateProps } from '../../containers/redux/initialStates'
import { RootState, useAppDispatch, useAppSelector } from '../../containers/redux/store.hooks'
import { increaseQuantity, decreaseQuantity } from '../../containers/redux/actionCreators'
import { CartListProps } from '../../containers/propContatiner';
import { CartItem } from './cartItem'

export function CartList ({cartItems} : CartListProps) {
  // get state from Redux store
  const getCartItem = useAppSelector((state:RootState) => state.cart) 
  const dispatch = useAppDispatch()

  const handleClick = (event : React.MouseEvent) => {
    event.preventDefault()
    // redux logic here
  }

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
            {/* render cart items dynamically */}
            {cartItems.map((item) => {
              return (
                <CartItem 
                  key={v4()}
                  image={''}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity} /> 
              )
            })} 
          </tbody>
        </table>
      </div>

      <span>Cart state update with Redux/TS</span>
      {getCartItem?.map((item)=>{
        return ( 
          <div key={v4()}>
            <button onClick={()=>dispatch(increaseQuantity(item.title))}>
              increase
            </button>
            <p>{item.quantity}</p>
            <button onClick={()=>dispatch(decreaseQuantity(item.title))}>
              decrease
            </button>
          </div>
        )
      })}
    </div>
    </>
  );
}
