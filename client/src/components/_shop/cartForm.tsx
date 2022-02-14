import * as React from 'react';
import { CartList } from './cartList';
import { v4 } from 'uuid';

export interface Product { 
  title : string
  price : number
  quantity : number
}

export function CartForm () {
  const [cartItems, setCartItems] = React.useState<Product[]>([])
  const [oneItem, setOneItem] = React.useState<Product>({
    title : '', 
    price : 0, 
    quantity : 0
  })
  
  const handleSubmit = (event : React.FormEvent) => {
    event.preventDefault()
    const form = document.forms[0] as HTMLFormElement
    // add cart item logic here
    const title = form.elements.namedItem('title') as HTMLInputElement // type cast to HTMLInputElement
    
    // convert this part to Redux
    setCartItems(prev => {
      return [
        ...prev, 
        {
          title : title.value, 
          price : form.price.value, 
          quantity : form.quantity.value
        } 
      ]
    })

    // reset form inputs
    setOneItem({
      title : '', 
      price : 0, 
      quantity : 0
    })
  }

  const handleChange = ({target : { name, value }} : React.ChangeEvent<HTMLInputElement>) => {
    setOneItem((prev) => {
      (prev as any)[name] = value
      const newVal = { ...prev }
      return newVal
    })
  }

  return (
    <div >        
      <form onSubmit={(event) => handleSubmit(event)} className="CartForm">
        <input 
          type="text" name='title' id='title' 
          value={oneItem.title} required placeholder='Enter title' 
          onChange={handleChange} />
        <input 
          type="number" name='price' id='price' 
          value={oneItem.price} required placeholder='Enter price' 
          onChange={handleChange} />
        <input 
          type="number" name='quantity' id='quantity' 
          value={oneItem.quantity} required placeholder='Enter quantity' 
          onChange={handleChange} />
        <button type='submit'>Add to Cart</button>
      </form>

      {/* render cart items if exists */}
      {cartItems.length !== 0
        ? cartItems.map((item) => { 
          return (
            <ul key={v4()}>
              <li >title : {item.title}</li>
              <li >price : {item.price}</li>
              <li >quantity : {item.quantity}</li>
            </ul>) 
          })
        : "No items in cart"
      }

      {/* redux  */}
      <br /><br /><br /><br />
      <CartList />
    </div>
  );
}
