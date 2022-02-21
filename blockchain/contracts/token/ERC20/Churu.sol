// SPDX-License-Identifier: MIT
/*
       /$$                               /$$                                                                               
      | $$                              | $$                                                                               
  /$$$$$$$  /$$$$$$  /$$    /$$ /$$$$$$ | $$  /$$$$$$   /$$$$$$   /$$$$$$   /$$$$$$  /$$$$$$   /$$$$$$$ /$$   /$$ /$$$$$$$ 
 /$$__  $$ /$$__  $$|  $$  /$$//$$__  $$| $$ /$$__  $$ /$$__  $$ /$$__  $$ /$$__  $$|____  $$ /$$_____/| $$  | $$| $$__  $$
| $$  | $$| $$$$$$$$ \  $$/$$/| $$$$$$$$| $$| $$  \ $$| $$  \ $$| $$$$$$$$| $$  \__/ /$$$$$$$|  $$$$$$ | $$  | $$| $$  \ $$
| $$  | $$| $$_____/  \  $$$/ | $$_____/| $$| $$  | $$| $$  | $$| $$_____/| $$      /$$__  $$ \____  $$| $$  | $$| $$  | $$
|  $$$$$$$|  $$$$$$$   \  $/  |  $$$$$$$| $$|  $$$$$$/| $$$$$$$/|  $$$$$$$| $$     |  $$$$$$$ /$$$$$$$/|  $$$$$$/| $$  | $$
 \_______/ \_______/    \_/    \_______/|__/ \______/ | $$____/  \_______/|__/      \_______/|_______/  \______/ |__/  |__/
                                                      | $$                                                                 
                                                      | $$                                                                 
                                                      |__/                                                                 
*/
pragma solidity ^0.8.10;
import "node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Churu is ERC20 {
    uint256 initialSupply = 1000;
    uint256 cost = 0.03 ether;

    mapping(address=>uint256) public churuAmountPerHolder;

    // Create 1000 Churu when deployed
    constructor()ERC20("Churu", "CHR"){
        _mint(msg.sender, initialSupply);
    }

    // get current Churu amount 
    function getChuruAmount(address _address) public view returns(uint256) {
        return churuAmountPerHolder[_address];
    }

    // mint Churu
    function mint(address _to, uint256 _amount) public payable {
        require(msg.value >= cost, "Minting Churu cost 0.03 ether");
        _mint(_to, _amount);
        churuAmountPerHolder[_to] = _amount; 
    }
}
