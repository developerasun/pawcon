import * as React from 'react';
import { v4 } from 'uuid';
import { CartListProps } from '../../../containers/C_props';
import { CartItem } from './cartItem'

export function CartList ({cartItems} : CartListProps) {
  return (
    <div id="cartList">
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
      {/* add the total sum of cart item prices */}
      <p className="total"> CART TOTAL : Total price here </p>
    </div>
  );
}
