// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "./constant/Container.sol";

/// @dev adding lifecycle to token(e.g : halving mintable supply)
struct lifecycle { 
    uint256 birth;
    uint256 halfLife;
}

// add natspac to contract
/// @title A title that should describe the contract/interface
/// @author The name of the author
/// @notice Explain to an end user what this does
/// @dev Explain to a developer any extra details
contract NFT is ERC721Enumerable, Ownable { 
    
    uint256 price = 0.03 ether; 
    uint256 totalSupply = 1000;
    uint256 mintableSupply = 1000;
    uint256 dynamicPrice;

    function getDynamicPrice() public returns(uint256) {
        if (mintableSupply > 500) {
            return 0.03 ether;
        }
        if (mintableSupply > 250) {
            return 0.06 ether;
        }
        if (mintableSupply > 125) {
            return 0.09 ether;
        }
        if (mintableSupply > 62) {
            return 0.12 ether;
        }
    }

    // PawCon NFT
    struct PawSibleToken { 
        bytes32 title;
        bytes32 dna;
        uint256 cost;
        Rarity pawsibility; // token rarity
    }
    
    // whitelist : has some previleges as to NFTs e.g don't have to pay minting fee
    // done with modifier onlyOwner from Ownable.sol
    mapping(address => bool) public whitelisted;

    // token list
    PawSibleToken[] public PawSibleTokenList;

    // ERC721 inheritance
    constructor() ERC721("PawCon NFT", "ASUN") {}
    
    // read token
    function getPawSibleToken(uint256 _index) public view returns(PawSibleToken memory){
        return PawSibleTokenList[_index];
    }

    // make token the rarest
    function makeFullyLoaf(uint256 _index) public onlyOwner { 
        PawSibleToken memory token = getPawSibleToken(_index);
        token.pawsibility = Rarity.FULLY_LOAF;
        PawSibleTokenList[_index] = token;
    }

    // Withdraw contract's balance
    function withdraw(address payable _user) public payable onlyOwner {
        // address.call returns two values : success condition, bytes memory
        (bool isSent, ) = _user.call{ value : address(this).balance }("");
        require(isSent, "Withdrawl failed");
    }

    // receive sent ethers
    receive() external payable {}
    fallback() external payable {}
}