import * as React from 'react';
import { CartList } from './cartList';
import { Product } from '../../containers/propContatiner';
import { RootState, useAppDispatch, useAppSelector } from '../../containers/redux/store.hooks';
import { addToCart } from '../../containers/redux/actionCreators';
import { v4 } from 'uuid';

export function CartForm () {
  const [cartItems, setCartItems] = React.useState<Product[]>([])
  const [oneItem, setOneItem] = React.useState<Product>({
    title : '', 
    price : 0, 
    quantity : 0
  })
  
  // approach to Redux store :useSelector
  const getCartItems = useAppSelector((state:RootState)=>state.cart)
  const dispatch = useAppDispatch()


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

    // add Redux logic
    dispatch(addToCart({
      image : '',
      title : title.value, 
      price : form.price.value, 
      quantity : form.quantity.value
    } ))

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

      {/* method 1 : render cart items by delivering props */}
      {cartItems.length !== 0
        ? <CartList cartItems={cartItems}/>
        : "No item for now"
      }

      {/* method 2 : render cart items with redux */}
      {getCartItems.length !== 0 
        ? getCartItems.map((item) => <p key={v4()}>{item.title}</p>) 
        : "redux fail"}
    </div>
  );
}
