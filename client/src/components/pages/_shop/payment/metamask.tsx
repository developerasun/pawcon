import * as React from 'react';
import { Button } from '../../../subComponents/button';
import Web3 from 'web3';
import { getWeb3 } from '../web3/getWeb3';

export function RenderMetaMask () {
  // const getWindow = window as any

  const handleClick = async () => {
    // invoke metamask modal if window.ethereum detected
    const invokeMetamask = await getWeb3() as Web3 
    console.log(invokeMetamask) // web3 instance
  }
  
  return (        
    <div>
      {/* add checkout ui : 
      Metamask highly recommends to initiate connection requeset only based on 
      user action such as clicking a button. */}
      <Button 
        callback={handleClick}
        btnText='Connect Metamask'>
      </Button>
    </div>
  );
}
