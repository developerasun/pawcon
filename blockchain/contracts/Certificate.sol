// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "./interface/ICertificate.sol";

// FIX this : create certificate object
struct MyCert { 
    bytes32 holder;
    string expire;
    bytes32 issuer; 
}

/// @title A title that should describe the contract/interface
/// @author The name of the author
/// @notice Explain to an end user what this does
/// @dev Explain to a developer any extra details
contract Certificate is ICertificate { 
    address issuer; 
    uint256 inYear = 1 days * 365;
    uint256 public issueCost = 0.05 ether;

    // set issuer to contract invoker
    constructor () {
        issuer = msg.sender;
    }

    /// @dev certificate holder and amount of certificates
    mapping(address => uint256) public certificateHolders;

    // issue one certificate
    function issueOne(address _holder) public payable override {
        require(msg.value > issueCost, "Certificate costs 0.05 ether");
        certificateHolders[_holder] = certificateHolders[_holder] + 1;
    }

    // NOT TESTED
    function expiresCert(uint256 _date) internal override { 
        // expire the certificate in one year from issurance
    }


    //===================================================//
    // Withdraw ethers in contract
    function withdraw() public payable {
        require(msg.sender == issuer, "Only certificate issuer can invoke this.");
        (bool isSent, ) = payable(address(msg.sender)).call { value : address(this).balance }(""); 
        require(isSent);
    }

    // check contract balance
    function getBalance() public view onlyIssuer returns (uint256) {
        return address(this).balance;
    }
}