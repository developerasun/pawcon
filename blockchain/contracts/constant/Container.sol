// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

/// @dev adding lifecycle to token(e.g : halving mintable supply)
struct lifecycle { 
    uint256 birth;
    uint256 halfLife;
}

enum Rarity { 
    QUARTER_LOAF,
    HALF_LOAF,
    FULLY_LOAF
}

/// @title A title that should describe the contract/interface
/// @author The name of the author
/// @notice Explain to an end user what this does
/// @dev Explain to a developer any extra details
contract Container { 

    // grouping by the same type(lowering gas)
    bytes32 public constant creator = "Jake Sung"; 

    uint256 public cost = 0.03 ether;
    uint256 public constant whitelistMintingLimit = 3; 
    uint256 public constant maxSupply = 10000;
    uint256 inDay =  24 hours;
    uint256 inMonth = 4 weeks;
    uint256 inYear = inMonth * 12;
}