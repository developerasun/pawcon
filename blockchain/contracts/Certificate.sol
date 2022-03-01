// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;
import "./interface/ICertificate.sol";

/// @author Jake Sung
/// @dev Certificate is granted to legendary Curious Pawoneers. 2 year period.
contract Certificate is ICertificate { 
    address private issuer; 
    // expiration date
    uint256 public short = 180;
    uint256 public middle = 365;
    uint256 public long = middle * 2; 
    uint256 public issueCost = 0.05 ether;
    expiration public exp; // FIX this later
    
    // set issuer to contract invoker
    constructor () {
        issuer = msg.sender;
    }

    /// @dev certificate holder and amount of certificates
    mapping(address => uint256) public certificateHolders;

    // =============== ICertificate implementation =============== //
    // issue one certificate
    function issueOne(address _holder) public payable override {
        require(msg.value > issueCost, "Certificate costs 0.05 ether");
        certificateHolders[_holder] = certificateHolders[_holder] + 1;
    }
    
    function expireOne(uint256 _date) public override {
        // add logic here
    }
    function extendExpiration(uint256 _prev, uint256 _to) public override {
        // add logic here
    }

    function setExpiration(uint256 _date) public override {
        // add logic here
    }
    // =============== ICertificate implementation =============== //
    


    //===================================================//
    // Withdraw ethers in contract
    function withdraw() public payable {
        require(msg.sender == issuer, "Only certificate issuer can invoke this.");
        (bool isSent, ) = payable(address(msg.sender)).call { value : address(this).balance }(""); 
        require(isSent);
    }

    // check contract balance
    function getBalance() public view returns (uint256) {
        require(issuer == msg.sender, "Only owner");
        return address(this).balance;
    }
}