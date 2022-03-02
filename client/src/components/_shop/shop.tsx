import * as React from 'react';
import { CartForm } from './cart/cartForm';
import { Payment } from './payment/payment';

export function Shop () {
  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault()
    // FIX : change server route later
    const data = document.getElementById('file') as HTMLInputElement
    const fileList = data.files as FileList
    console.log(fileList[0])
    // const packet = data?.files[0] as File
      fetch('some-path-to-server', {
        method : 'POST', 
        body : fileList[0]
      })
  }
  return (
    <div>
      <h1>shop route</h1>
        shoppable items list here

      {/* user uploads a NFT image here */}
      <form 
        onSubmit={handleSubmit}
        id='uploadNft' 
        encType='multipart/form-data'>
        {/* accept only .png file */}
        <input type="file" name="file" id="file" accept='image/png'/>
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
