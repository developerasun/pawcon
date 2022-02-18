import * as React from 'react';
import { CartForm } from './cart/cartForm';
import { Payment } from './payment/payment';

export function Shop () {
  const handleSubmit = () => console.log("some logic here")
  return (
    <div>
      <h1>shop route</h1>
        shoppable items list here

      {/* user uploads a NFT image here */}
      <form 
        onSubmit={handleSubmit}
        id='uploadNft' 
        encType='multipart/form-data'>
        {/* get any image file */}
        <input type="file" name="" id="" accept='image/*'/>
        <button type="submit">Upload</button>
      </form>

      <br /><br /><br /><br />
      {/* 
        1. render shoppable NFTs with search 
        2. add the NFTs to cart in cart form
        3. render added NFTs in cart list, if non, render "there is no item now"
        4. adjust amount/price with Redux
        5. when payment clicks, web3 metamask pops up
      */}
      <CartForm />
      <Payment />
    </div>
  );
}
