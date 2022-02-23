import * as React from 'react';

export interface IRenderMetaMaskProps {
}

export function RenderMetaMask (props: IRenderMetaMaskProps) {
  const handleClick = () => {
    // detect metamaks in user browser and get it as a provider
    
  }
  return (
    <div>
      metamask logic here
      <button onClick={handleClick}>CHECKOUT</button>
    </div>
  );
}
