import * as React from 'react';
import Web3 from 'web3';
import { PROVIDER } from '../../containers/web3Container';

export interface IGetWeb3Props {
    window: any
}

const getWeb3 = async ({window}: IGetWeb3Props) => {
    // modern web browser
    if(window.ethereum) {
        const web3 = new Web3(window.ethereum)
        await window.ethereum.enable() // will be deprecated soon 
        
        // get network id and deployed network address
        const id = await web3.eth.net.getId()
        
        // import MyContract.json here

    } else { 
        // legacy dapp browser
        const web3 = new Web3(window.web3)

    }
}

export function RenderWeb3 () {
    React.useEffect(() => {
        getWeb3(window)
    }, [])
    
  return (
    <div>
      
    </div>
  );
}
