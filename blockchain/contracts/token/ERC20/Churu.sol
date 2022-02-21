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
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract Churu is ERC20, AccessControl {
    // add role-based access control : admin, minter, burner
    bytes32 public constant creator = "Jake Sung"; 
    uint256 initialSupply = 10^9; // initial supply is 10 billion Churu
    uint256 cost = 0.03 ether;

    mapping(address=>uint256) public churuAmountPerHolder;

    // Create 1000 Churu when deployed
    constructor()ERC20("Churu", "CHR"){
        _mint(msg.sender, initialSupply);
    }

    // ======================== Mint zone ======================== // 
    // 1. Minter : mint Churu 
    // 2. Burner : burn Churu 
    // 3. Admin : set roles
    function mint(address _to, uint256 _amount) public payable {
        // FIX logic here : set Minter, mint amount limit
        // require(msg.sender == "MINTER", "Only minter can mint Churu.");
        _mint(_to, _amount);
        churuAmountPerHolder[_to] = _amount; 
    }
    // ======================== Mint zone ======================== //



    // get current Churu amount 
    function getChuruAmount(address _address) public view returns(uint256) {
        return churuAmountPerHolder[_address];
    }


    // ======================== Finance zone ======================== // 
    // 1. transfer Churu to another account
    // 2. withdraw Churu in this contract(admin)
    // ======================== Finance zone ======================== // 
}
