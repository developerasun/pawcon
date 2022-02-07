// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// add natspac to contract
/// @title A title that should describe the contract/interface
/// @author The name of the author
/// @notice Explain to an end user what this does
/// @dev Explain to a developer any extra details
contract NFT is ERC721Enumerable, Ownable { 
    
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
    function withdraw(address _user) public payable onlyOwner {
        // address.call returns two values : success condition, bytes memory
        (bool isSent, ) = _user.call{ value : address(this).balance }("");
        require(isSent, "Withdrawl failed");
    }

    // receive sent ethers
    receive() external payable {}
    fallback() external payable {}
}