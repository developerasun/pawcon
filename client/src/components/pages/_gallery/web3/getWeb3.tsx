import Web3 from 'web3';
import { PROVIDER } from '../../../containers/C_apiUrl';

export async function getWeb3 () {
  const getWindow = window as any
  try { 
    // downgrade react-scripts from 5.0.0 to 4.0.3 for metamask detection
    if (getWindow.ethereum) {  // modern web browser
      const web3 = new Web3(getWindow.ethereum || Web3.givenProvider)
      // invoke metamask modal in browser
      await getWindow.ethereum.request( { method : 'eth_requestAccounts' })
      return web3
    } else if (getWindow.web3) { // legacy browser 
      alert("Legacy browser detected.")
      const web3 = new Web3(getWindow.web3)
      return web3
    } else { // local blockchain 
      alert("No provider deteceted, connecting local node.")
      const web3 = new Web3(PROVIDER.HARDHAT)
      return web3
    } 
  } catch(err) {
    console.log(err ) // metamask error object : code, message, stack
    alert("Can't access to the extension.")
  }
}
