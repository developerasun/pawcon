import * as React from 'react';
import '../sass/css/cart.css';
import { CartList } from './cartList';
import { Product } from '../../containers/propContatiner';
import { RootState, useAppDispatch, useAppSelector } from '../../containers/redux/store.hooks';
import { addToCart } from '../../containers/redux/actionCreators';

export function CartForm () {
  const [oneItem, setOneItem] = React.useState<Product>({
    image: '',
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

    // add cart item with Redux
    dispatch(addToCart({
      image : '',
      title : title.value, 
      price : form.price.value, 
      quantity : form.quantity.value
    } ))

    // reset form inputs
    setOneItem({
      image: '',
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
    <div id="cartContainer">        
      <form onSubmit={(event) => handleSubmit(event)} id="cartForm">
        <input 
          type="text" name='title' id='title' 
          value={oneItem.title} required placeholder='Enter title' 
          onChange={handleChange} />
        <input 
          type="number" name='price' id='price' min={'1'}
          value={oneItem.price} required placeholder='Enter price' 
          onChange={handleChange} />
        <input 
          type="number" name='quantity' id='quantity' min={'1'}
          value={oneItem.quantity} required placeholder='Enter quantity' 
          onChange={handleChange} />
        <button type='submit'>Add to Cart</button>
      </form>

      {/* render cart items with Redux */}
      {getCartItems.length !== 0 
        ? <CartList cartItems={getCartItems}/> 
        : "No item for now"}
    </div>
  );
}
