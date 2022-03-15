// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

/// @title A title that should describe the contract/interface
/// @author The name of the author
/// @notice Explakin to an end user what this does
/// @dev Explain to a developer any extra details
interface ICertificate {

    // 1. issue certificate 
    function issueOne(address _holder, uint256 _tokenId, uint256 _date) external payable;
    // 2. expire certificate
    function expireOne(address _holder, uint256 _tokenId) external ;
    // 3. extends certificate expiration date from _prev to _to. requires a fee
    function extendExpiration(uint256 _tokenId, uint256 _to) external payable ;
    // 4. set expiration
    function setExpiration(uint256 _date, uint256 _tokenId) external ;
}