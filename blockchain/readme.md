# PawCon Blockchain
Teck requirements for PawCon blockchain is as follows : 

- Solidity
- Remix for quick test
- Hardhat for local blockchain, compile, migration, and test
- openzeppelin

## Contract verification
You can play around Churu(ERC20) and CuriousPawoneer(ERC721) in Etherscan ropsten. 

- [Churu](https://ropsten.etherscan.io/address/0x0f4d7069B9a58699D7c369F9ac97777fBDe4e8e4#code)
- Curious Pawoneer : will be added

## How it works
### Dev workflow
1. Develop contract and test it in local hardhat network with Metamask.
1. Deploy contract Ethereum testnet
1. Deploy contract Ethereum mainnet

### Token and contract info
Remix network token/contract info for quick prototype test is as follows : 

1. churu address : 0xd9145CCE52D386f254917e481eB44e9943F39138
1. contract owner : 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
1. pinata cid : QmRoPsaNnP6D9VyfvCzMda9aqknoQMdDDtmC3769t9mhF7
1. baseImageExtension : .png, baseMetadataExtension: .json
1. baseURI(Pinata) for Curious Pawoneer : https://gateway.pinata.cloud/ipfs/QmRoPsaNnP6D9VyfvCzMda9aqknoQMdDDtmC3769t9mhF7/
1. getTokenURIs method return values : 
https://gateway.pinata.cloud/ipfs/QmRoPsaNnP6D9VyfvCzMda9aqknoQMdDDtmC3769t9mhF7/1.png,
https://gateway.pinata.cloud/ipfs/QmRoPsaNnP6D9VyfvCzMda9aqknoQMdDDtmC3769t9mhF7/1.json

### Role-based access control bytes32 value
1. default admin role : 0x0000000000000000000000000000000000000000000000000000000000000000
1. minter role : 0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6
1. burner role : 0x3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a848
1. pauser role : 0x65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a
1. destructor role : 0xfe914d0ce83c4b63c9700dad3940217b1d7cb1edf8ffb76705e2eb20fd5e007d

### ERC721
Note that ERC721 provides four mappings.
1. owner/tokenId => tokenId increased when minted
1. owner/balance => balance increased when minted
1. tokenId/approved address 
1. owner/operator approval

### IPFS
how IPFS works : gateway + CID + file name(token + file extension)
1. upload NFT media to Pinata or IPFS desktop to get CID
1. concatenate prefix 'ipfs://' with the CID for opensea metadata standard
1. set it as baseURI in during deploy (in constructor)
1. metadata should be in .json, NFT image should be in .png <=> communicate this with front end

### Token URI
how Token URI works : tokenURI : baseURI + tokenId
1. set _baseURI (should inherit from ERC721)
1. user mint a NFT and the token id is created
1. set tokenURI by combining _baseURI and tokenId
1. front end will instantiate a contract and get the token URI
1. front end displays the token 

### How pawcon contract works
1. set baseURI first with IPFS CID
1. set baseImageURI / baseMetadataURI
1. get baseImageURI / baseMetadataURI

<details>
<summary>Characteristics</summary>

- constants are managed under constant directory
- contracts secured with openzeppelin extensions
- contracts deployed and verified in Etherscan(testnet)
- Role-based access control
- tips and tricks to lower gas fee : (list here)
</details>

<details>
<summary>Implementation</summary>

## Token
- ERC20 Churu
- ERC721 Curious Pawoneer

## Contract
- Certificate
- Reveal
- Presale(Free minting)
- Ticketing
- Dynamic cost/minting
</details>