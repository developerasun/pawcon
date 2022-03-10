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
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "hardhat/console.sol";

contract Churu is ERC20, AccessControl, Pausable {
    // ERC20 provides two mappings for balance and allowance. 
    // Each time _mint from ERC20 executes, balance and total supply increases. 
    
    address public owner;

    uint256 public constant initialSupply = 1000000000;     // initial supply is 10 billion Churu
    uint256 public cost = 0.03 ether;
    uint256 public mintLimit = 10000;
    
    // ======================== AccessControl zone ======================== // 
    // add role-based access control : admin, minter, burner, destructor
    bytes32 public constant CREATOR = "Jake Sung";
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant DESTRUCTOR_ROLE = keccak256("DESTRUCTOR_ROLE");
    // ======================== AccessControl zone ======================== // 

    constructor()ERC20("Churu", "CHR"){
        owner = msg.sender;
        console.log("Churu owner :", owner);
        // mint 10 billion Churu to sender when deployed
        _mint(owner, initialSupply); // inrease msg.sender's balance and total supply
        
        // Grant the contract deployer the default admin role: it will be able
        // to grant and revoke any roles
        _grantRole(DEFAULT_ADMIN_ROLE, owner);
    }

    // ======================== Mint zone ======================== // 
    // Only minter can mint
    function mint(address _to, uint256 _amount) public payable onlyRole(MINTER_ROLE) whenNotPaused {
        // FIX logic here : set Minter, mint amount limit
        require(_amount < mintLimit, "Mint up to 10000 Churu");
        _mint(_to, _amount);
        // Hardhat support console.log, which can be checked in test codes
        // supported data types : uint, boolean, address
        console.log(_to, "have minted", _amount, "Churu."); 
    }

    // Only burner can burn
    function burn(address _to, uint256 _amount) public onlyRole(BURNER_ROLE) whenNotPaused {
        // check if there is enough token to burn
        require(balanceOf(_to) >= _amount, "Not enough token to burn");
        _burn(_to, _amount);
        console.log(_to, "have burned", _amount, "Churu.");
    }
    // ======================== Mint zone ======================== //

    // ======================== Balance zone ======================== // 
    // only owner can withdraw
    function withdraw() public payable {
        require(msg.sender == owner, "Only owner");
        console.log("msg.sender :", msg.sender);
        console.log("owner :", owner);
        (bool isSent, ) = payable(address(this)).call{ value : address(this).balance }("");
        require(isSent, "Only owner.");
    }
    // ======================== Balance zone ======================== // 

    // ======================== Danger zone : NOT TESTED ================== // 
    // only pauser can pause
    function pauseChuru() public onlyRole(PAUSER_ROLE) {
        _pause(); // change pause state from false to true
        console.log("Contract paused");
    }
    
    // only destructor can destruct
    function destructChuru(address _address) public onlyRole(DESTRUCTOR_ROLE) {
        console.log("all balances transferred to :", _address); 
        console.log("Contract destructed");
        selfdestruct(payable(_address)); // move ether to owner and destroy contract
    }
    // ======================== Danger zone : NOT TESTED ================== // 
}
