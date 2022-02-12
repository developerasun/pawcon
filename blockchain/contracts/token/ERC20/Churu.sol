// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;
import "../../../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Churu is ERC20 {
    uint256 initialSupply = 1000;
    
    // Create 1000 Churu when deployed
    constructor()ERC20("Churu", "CHR"){
        _mint(msg.sender, initialSupply);
    }
}