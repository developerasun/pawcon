import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../../subComponents/button';

export function RenderDetails ( ) {
  // Returns an object of key/value pairs of the dynamic params 
  // from the current URL that were matched by the route path.
  const { title } = useParams()

  // TO DO : add metamask here
  const handleSubmit = (e :React.FormEvent) => {
    e.preventDefault()
  }

  const handleClick = () => { }

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
          <img src="https://i.ibb.co/R9pX6Zz/home-be-curious.png" alt="temp" />
        </div>

        <div className="productInfo" >
          <div className="texts">
            <span>{title}</span>
            <span className='price'>&#36; 100(temp)</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Fugiat officiis facere magni expedita, voluptas et!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quia, sed.
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
              callback={handleClick} />
          </form>
        </div>
      </div>
    </div>
  );
}
