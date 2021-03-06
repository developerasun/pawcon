import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../containers/redux/store.hooks';
import { Button } from '../../subComponents/button';
import { ShoppingCart } from './cart/shoppingCart';
import { Payment } from './payment/payment';

export function RenderDetails ( ) {
  // Returns an object of key/value pairs of the dynamic params 
  // from the current URL that were matched by the route path.
  const { title } = useParams()

  const getOneArtwork = useAppSelector((state) => state.artwork)

  // TO DO : add metamask here
  const handleSubmit = (e :React.FormEvent) => {
    e.preventDefault()
  }

  const handleMint = () => { 
    // invoke metamask here
  }
  const handleCart = () => {
    // invoke shopping cart pop up here
  }

  // =========== REPLACE : context => redux logic =========== // 
  React.useEffect(() => {

    // TO DO : add get request for artworks
    return () => {
      // abort signal if title matched
    }
  }, [ ])
  
  return (
    <div>
      <div className="renderDetails">
        <div className="artwork">
          <img src={getOneArtwork.image} alt="artwork" />
        </div>

        <div className="productInfo" >
          <div className="texts">
            <span>{title}</span>
            <span className='price'>&#36; 100(temp)</span>
            <p>
              {getOneArtwork.description}
            </p>
          </div>
          

          <form className='blockchainForm' onSubmit={handleSubmit}>
            <fieldset className='blockchainSelection'>
              <legend>Choose blockchain</legend>

              <label htmlFor="Ethereum">Ethereum</label>
                <input type="radio" name="blockchain" id="Ethereum" />
              <label htmlFor="Solana">Solana</label>
                <input type="radio" name="blockchain" id="Solana" />
            </fieldset>
            <Button 
              btnText='Mint'
              callback={handleMint} />
            <Button 
              btnText='Add to cart'
              callback={handleCart} />
          </form>
        </div>

        <ShoppingCart />
        <Payment />

      </div>
    </div>
  );
}
