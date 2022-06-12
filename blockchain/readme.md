# PawCon Blockchain

Install dependency.

```shell
$npm install
```

Run hardhat network for local development.

```shell
$npx hardhat node
```

Compile contracts and deploy to network you would like. Check and adjust contract address as you wish.

```shell
$npx hardhat compile
$npx hardhat run scripts/file-name.ts --network hardhat
```

Run test codes with hardhat.

```shell
$npx hardhat test
```

Verify contract and get Etherscan link in terminal. Note that CuriousPawoneer.sol requires arguments.

```shell
$npx hardhat verify (contract address here) --network ropsten
$npx hardhat verify --constructor-args arguments.ts (the contract address here)
```

## Upcoming changes

<details>
<summary>lists</summary>

## Upgradable contract

Upcoming PawCon contracts will be upgradable with proxy pattern. This will less burden for developers to write absolutely-flawless-smart-contract.

```shell
# upgradable contracts dependency
$npm i@openzeppelin/contracts-upgradeable
$npm i @openzeppelin/hardhat-upgrades
$npm i @nomiclabs/hardhat-ethers
$npm i ethers
```

</details>

## Characteristics

PawCon blockchain section has following characteristics.

### Convention

1. deployment scripts follows [Truffle framework migration filename conventions](https://trufflesuite.com/docs/truffle/getting-started/running-migrations.html) to avoid of confusion in contract order. For example,

1. 1_churu_deploy.ts
1. 2_curious_pawoneer_deploy.ts
1. 3_certificate_deploy.ts

above file names represent the exact order for contract deployment and the files are related to deployment.

### Quick prototyping

You can test contracts from PawCon in Remix newtork for quick prototyping. Contract details are provided below.

1. pinata cid : QmRoPsaNnP6D9VyfvCzMda9aqknoQMdDDtmC3769t9mhF7
1. baseImageExtension : .png, baseMetadataExtension: .json
1. baseURI(Pinata) for Curious Pawoneer : https://gateway.pinata.cloud/ipfs/QmRoPsaNnP6D9VyfvCzMda9aqknoQMdDDtmC3769t9mhF7/
1. getTokenURIs method return values should be the following formats:

- https://gateway.pinata.cloud/ipfs/QmRoPsaNnP6D9VyfvCzMda9aqknoQMdDDtmC3769t9mhF7/1.png
- https://gateway.pinata.cloud/ipfs/QmRoPsaNnP6D9VyfvCzMda9aqknoQMdDDtmC3769t9mhF7/1.json

PawCon contracts inherits openzeppelin's access control. The access control uses bytes32 value to hash string. Each of string used will be return as following,

1. default admin role : 0x0000000000000000000000000000000000000000000000000000000000000000
1. minter role : 0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6
1. burner role : 0x3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a848
1. pauser role : 0x65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a
1. destructor role : 0xfe914d0ce83c4b63c9700dad3940217b1d7cb1edf8ffb76705e2eb20fd5e007d

so you should copy and paste the values, not the strings like 'MINTER', 'BURNER' as written in contract.

### Contract verification

Contracts are managed under constant directory and written securely with openzeppelin library. They are deployed and verified in Etherscan ropsten(testnet). You can play around Churu(ERC20) and CuriousPawoneer(ERC721) in below link. Note that below links can change or won't work over time.

- [Churu](https://ropsten.etherscan.io/address/0x0f4d7069B9a58699D7c369F9ac97777fBDe4e8e4#code)
- [Curious Pawoneer](https://ropsten.etherscan.io/address/0x0D684a95D43169Dca01eBf6d78ac31079e6f6a31#code)

### Test driven development

Testing smart contract is not easy but highly demanded tasks because of the nature of smart contract. Churu ERC20, Curious Pawoneer ERC721 tokens are tested with Hardhat library. For example below code is to test access-control in the Churu token.

```ts
it("Only Burner can burn", async function () {
  // grant burner role
  await churu.grantRole(
    ethers.utils.solidityKeccak256(["string"], ["BURNER_ROLE"]),
    account
  )
  await churu.burn(account, 100) // burn 100 churu

  expect(await churu.balanceOf(account)).equal(999999900, "not equal")
})
```

### Workflow

Development workflow is as follows.

1. Develop contract and test it in local hardhat network with Metamask.
1. Deploy contract Ethereum testnet
1. Deploy contract Ethereum mainnet

## ERC721

Note that ERC721 provides four mappings.

1. owner/tokenId => tokenId increased when minted
1. owner/balance => balance increased when minted
1. tokenId/approved address
1. owner/operator approval

## IPFS

how IPFS works : gateway + CID + file name(token + file extension)

1. upload NFT media to Pinata or IPFS desktop to get CID
1. concatenate prefix 'ipfs://' with the CID for opensea metadata standard
1. set it as baseURI in during deploy (in constructor)
1. metadata should be in .json, NFT image should be in .png <=> communicate this with front end

## Token URI

how Token URI works : tokenURI : baseURI + tokenId

1. set \_baseURI (should inherit from ERC721)
1. user mint a NFT and the token id is created
1. set tokenURI by combining \_baseURI and tokenId
1. front end will instantiate a contract and get the token URI
1. front end displays the token

## How pawcon contract works

1. set baseURI first with IPFS CID
1. set baseImageURI / baseMetadataURI
1. get baseImageURI / baseMetadataURI
