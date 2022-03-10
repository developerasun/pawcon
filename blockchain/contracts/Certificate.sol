// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;
import "./interface/ICertificate.sol";
import "./token/ERC721/CuriousPawoneer.sol";
import "hardhat/console.sol";

/// @author Jake Sung
/// @dev Legendary pawoneer can have a certificate. up to 1 year period 
contract Certificate is ICertificate { 
    address public issuer; 

    uint256 public constant SHORT = 180 days;
    uint256 public constant MIDDLE = 270 days;
    uint256 public constant LONG = 365 days;
    uint256 public issueCost = 0.01 ether;
    uint256 public extendCost = 0.02 ether;

    CuriousPawoneer cp; // get CuriousPawoneer contract

    // set issuer to contract invoker
    constructor (address _curiousPawoneer) {
        cp = CuriousPawoneer(_curiousPawoneer);
        console.log("Curious Pawoneer deployed at : ", _curiousPawoneer);
        issuer = msg.sender;
        console.log("Contract owner is : ", issuer);
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

    // Issue a certificate
    function issueOne(address _holder, uint256 _tokenId, uint256 _date) public payable override {
        require(msg.value >= issueCost, "Certificate costs 0.01 ether");
        require(cp.getTokenRarity(_tokenId) == 3, "Only legendary Pawoneer.");
        certificateHolders[_holder] = true;
        setExpiration(_date, _tokenId);
    }

    // Set an expiration date
    function setExpiration(uint256 _date, uint256 _tokenId) public override {
        require(_date == SHORT || _date == MIDDLE || _date == LONG , "Set proper date");
        if (_date == 0) certificateExpiration[_tokenId] = block.timestamp + SHORT; // 6 month expiration 
        if (_date == 1) certificateExpiration[_tokenId] = block.timestamp + MIDDLE; // 9 month expiration 
        if (_date == 2) certificateExpiration[_tokenId] = block.timestamp + LONG; // 12 month expiration 
    }

    // Expire the certificate
    function expireOne(address _holder, uint256 _tokenId) public override isExpired(_tokenId) {
        if (block.timestamp > certificateExpiration[_tokenId]) {
            certificateExpiration[_tokenId] = 0; // reset expiration
            certificateHolders[_holder] = false; // reset holder
            console.log(_tokenId, "owned by", _holder, "has expired");
        }
    }

    // Extend the ceritifcate's expiration date
    function extendExpiration(uint256 _tokenId, uint256 _to) public payable override {
        require(certificateExpiration[_tokenId] > 0, "Certificate for the token has expired");
        require(msg.value > extendCost, "Enter a proper cost");
        certificateExpiration[_tokenId] += _to;
        console.log(_tokenId, "expiration has extended by", _to);
    }

    // Check a current expiration date
    function getExpiration(uint256 _tokenId) public view returns(uint256) {
        return certificateExpiration[_tokenId];
    }
    // =============== ICertificate implementation =============== //
    


    // =============== Finance zone =============== //
    // Withdraw ethers in contract
    function withdraw() public payable {
        require(issuer == msg.sender, "Only issuer");
        (bool isSent, ) = payable(address(this)).call { value : address(this).balance }(""); 
        require(isSent);
        console.log(address(this).balance, "is transferred");
    }
    // =============== Finance zone =============== //

}