// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;
import "./interface/ICertificate.sol";
import "./token/ERC721/CuriousPawoneer.sol";
import "hardhat/console.sol";

/// @author Jake Sung
/// @dev Legendary pawoneer can have a certificate. up to 1 year period 
contract Certificate is ICertificate { 
    address public issuer; 
    uint256 public issueCost = 0.01 ether;
    CuriousPawoneer cp;
    expiration public exp = expiration.SHORT; // expiration date
    
    // set issuer to contract invoker
    constructor (address _curiousPawoneer) {
        cp = CuriousPawoneer(_curiousPawoneer);
        issuer = msg.sender;
    }

    /// @dev certificate holder and if has a certificate
    mapping(address => bool) public certificateHolders;
    mapping(uint256 => uint256) public certificateExpiration;


    /// @dev modifier for expiration check
    modifier isExpired(uint256 _tokenId) {
        require(block.timestamp > certificateExpiration[_tokenId]);
        _;
    }

    // =============== ICertificate implementation =============== //
    // 1. holder can choose certification period
    // 1. only legendary pawoneer can have certification
    // 1. certificate expires after the period

    // issue one certificate
    function issueOne(address _holder, uint256 _tokenId, uint256 _date) public payable override {
        require(msg.value >= issueCost, "Certificate costs 0.01 ether");
        require(cp.getTokenRarity(_tokenId) == 3, "Only legendary Pawoneer.");
        certificateHolders[_holder] = true;
        setExpiration(_date, _tokenId);
    }

    // set expiration date. TO DO : use expiration enum here
    function setExpiration(uint256 _date, uint256 _tokenId) public override {
        require(_date == 0 || _date == 1 || _date == 2 , "Set proper date");
        if (_date == 0) certificateExpiration[_tokenId] = block.timestamp + 180 days; // 6 month expiration 
        if (_date == 1) certificateExpiration[_tokenId] = block.timestamp + 270 days; // 9 month expiration 
        if (_date == 2) certificateExpiration[_tokenId] = block.timestamp + 365 days; // 12 month expiration 
    }

    // expire the certificate
    function expireOne(address _holder, uint256 _tokenId) public override isExpired(_tokenId) {
        if (block.timestamp > certificateExpiration[_tokenId]) {
            certificateExpiration[_tokenId] = 0; // reset expiration
            certificateHolders[_holder] = false; // reset holder
        }
    }
    function extendExpiration(uint256 _prev, uint256 _to) public override {
        // add logic here
    }
    // =============== ICertificate implementation =============== //
    


    // =============== Finance zone =============== //
    // Withdraw ethers in contract
    function withdraw() public payable {
        (bool isSent, ) = payable(address(msg.sender)).call { value : address(this).balance }(""); 
        require(isSent);
    }
    // =============== Finance zone =============== //

}