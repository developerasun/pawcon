import * as React from 'react';
import { CartForm } from './cartForm';
import { CartList } from './cartList';

export function Shop () {
  return (
    <div>
      <h1>shop route</h1>
        shoppable items list here
      <br /><br /><br /><br />
      {/* 
        1. render shoppable NFTs with search 
        2. add the NFTs to cart in cart form
        3. render added NFTs in cart list, if non, render "there is no item now"
        4. adjust amount/price with Redux
        5. when payment clicks, web3 metamask pops up
      */}
      <CartForm />
    </div>
  );
}
