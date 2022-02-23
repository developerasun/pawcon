import * as React from 'react';
import Web3 from 'web3';
import { PROVIDER } from '../../containers/C_web3';

// FIX this : import contract Curious Pawoneer, Churu abi here. 
const dummyContractjson = {
    "abi" : "temp"
}

export interface IGetWeb3Props {
    window: any
}

const getWeb3 = async ({window}: IGetWeb3Props) => {
    // modern web browser
    if(window.ethereum) {
        // Flow : 
        // 1. get web3 provider(metamask)
        // 2. create a contract instance with abi
        // 3. call the contract method based on user interaction
        // 4. check event from contract

        const web3 = new Web3(window.ethereum)
        console.log(web3.givenProvider) // returns provider object

        // ethereum ecosystem set
        web3.eth.defaultChain = 'ropsten'
        web3.eth.defaultHardfork = 'petersburg' // no london yet

        // add redux logic for web3 provider
        await window.ethereum.enable() // will be deprecated soon 
        
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
