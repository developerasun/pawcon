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
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract Churu is ERC20, AccessControl {
    // add role-based access control : admin, minter, burner
    bytes32 public constant creator = "Jake Sung";
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");

    uint256 initialSupply = 10^9; // initial supply is 10 billion Churu
    uint256 cost = 0.03 ether;

    mapping(address=>uint256) public churuAmountPerHolder;

    constructor()ERC20("Churu", "CHR"){
        _mint(msg.sender, initialSupply); // Create 10 billion Churu when deployed
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender); // set admin
    }

    // ======================== Mint zone ======================== // 
    // 1. Minter : mint Churu 
    // 2. Burner : burn Churu 
    function mint(address _to, uint256 _amount) public payable onlyRole(MINTER_ROLE) {
        // FIX logic here : set Minter, mint amount limit
        // require(msg.sender == "MINTER", "Only minter can mint Churu.");
        _mint(_to, _amount);
        churuAmountPerHolder[_to] += _amount; 
    }

    function burn(address _to, uint256 _amount) public onlyRole(BURNER_ROLE) {
        require(churuAmountPerHolder[_to] > _amount, "Not enough token to burn");
        _burn(_to, _amount);
        churuAmountPerHolder[_to] -= _amount;
    }
    // ======================== Mint zone ======================== //

    // get current Churu amount 
    function getChuruAmount(address _address) public view returns(uint256)  {
        return churuAmountPerHolder[_address];
    }


    // ======================== Balance zone ======================== // 
    // 1. transfer Churu to another account
    // 2. withdraw Churu in this contract(admin)
    // ======================== Balance zone ======================== // 
}
