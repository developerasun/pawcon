// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

/// @title A title that should describe the contract/interface
/// @author The name of the author
/// @notice Explain to an end user what this does
/// @dev Explain to a developer any extra details
interface ICertificate {
    // A certificate has expiration date
    enum expiration { 
        SHORT, 
        MIDDLE, 
        LONG
    }

    // 1. issue certificate 
    function issueOne(address _holder) external payable;
    // 2. expire certificate
    function expireOne(uint256 _date) external ;
    // 3. extends certificate expiration date from _prev to _to. requires a fee
    function extendExpiration(uint256 _prev, uint256 _to) external ;
    // 4. set expiration
    function setExpiration(uint256 _date) external ;
}