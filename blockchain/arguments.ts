import key from './config/key'

// required to verify contract in etherscan
const curiousPawoneerArguments = [
    key.CONSTRUCTOR.CURIOUSPAWONEER.churuAddr.ROPSTEN, 
    key.CONSTRUCTOR.CURIOUSPAWONEER.nonce,
    key.CONSTRUCTOR.CURIOUSPAWONEER.cid
];

export default curiousPawoneerArguments;