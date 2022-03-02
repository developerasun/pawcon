import * as React from 'react';
import Web3 from 'web3';
import { Button } from '../../subComponents/button';
import { getWeb3 } from './getWeb3';

// should import contracts here

export function RenderContract () {
  const [web3State, setWeb3State] = React.useState<Web3>()
  const handleMint = () => {
    // contract minting here
    // get contract state from Redux
  }
    // Flow : 
    // 1. get web3 instance with metamask in useEffect
    // 2. instantiate a contract
    // 3. add the contract state to redux store
    // 4. call contract method based on user interaction
    // 5. log the result with web.eth.subscribe('pendingTransaction') and event
    React.useEffect( () => {
      (async () => {
        const web3 = await getWeb3() as Web3;
        setWeb3State(web3)
        const id = await web3.eth.net.getId() as any
        // FIX : recompile smart contract with a local network
        // const deployedNetwork = curiousPawoneer.networks[id]
      })()
      

    }, [])
    
  return (
    <div>
      {web3State !== undefined 
        ? <p>web3 instantiated</p> 
        : <p>web3 not instantiated</p>}

      {/* ADD : function list => add user ui for smart contract */}
      {/* user <=> contract interaction */}
      <Button btnText='Mint' callback={handleMint}/>
    </div>
  );
}
