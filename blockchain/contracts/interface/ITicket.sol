// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

/// @title A title that should describe the contract/interface
/// @author The name of the author
/// @notice Explain to an end user what this does
/// @dev Explain to a developer any extra details
interface ITicket {
    // A ticket has expiration date
    enum expiration { 
        SHORT, 
        MIDDLE, 
        LONG
    }

    // 1. purchase ticket : increase ticket amount
    function purchaseTicket(uint256 _amount) external ;
    // 2. use ticket : decrease ticket amount
    function useTicket(uint256 _amount) external;
    // 3. set expiration date. only issuer.
    function setExpiration(uint256 _date) external ;
    // 4. extends certificate expiration date from _prev to _to. requires a fee
    function extendExpiration(uint256 _prev, uint256 _to) external ;
    // 5. check if one is a ticket holder
    function hasTicket(address _address) external;
    function isExpired(uint256) external;
}