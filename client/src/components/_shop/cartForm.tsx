import * as React from 'react';

export function CartForm () {
  const handleSubmit = () => { console.log("submitted")}

  return (
    <div >        
      <form onSubmit={handleSubmit} className="CartForm">
        <input type="text" name='title' id='title' required placeholder='title here' />
        <input type="number" name='price' id='price' required placeholder='price here' />
        <input type="number" name='quantity' id='quantity' required placeholder='qunatity here' />
        <button type='submit'>Add to Cart</button>
      </form>
    </div>
  );
}
