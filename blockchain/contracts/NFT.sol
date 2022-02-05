// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT is ERC721 { 
    // 1, 2 in order
    enum Rarity { 
        QUARTER_LOAF,
        HALF_LOAF,
        FULLY_LOAF
    }
    
    // PawCon NFT
    struct PawSibleToken { 
        bytes32 title;
        bytes32 dna;
        Rarity pawsibility; // token rarity
    }

    PawSibleToken[] public PawSibleTokenList;

    // ERC721 inheritance
    constructor() ERC721("PawCon NFT", "ASUN") {}
    
    // read token
    function getPawSibleToken(uint256 _index) public view returns(PawSibleToken memory){
        return PawSibleTokenList[_index];
    }

    // make token the rarest
    function makeFullyLoaf(uint256 _index) public { 
        PawSibleToken memory token = getPawSibleToken(_index);
        token.pawsibility = Rarity.FULLY_LOAF;
        PawSibleTokenList[_index] = token;
    }
}