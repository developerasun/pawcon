// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

/// @title A title that should describe the contract/interface
/// @author The name of the author
/// @notice Explain to an end user what this does
/// @dev Explain to a developer any extra details

interface IPresale {
    // call signature here
    function isPresale() external; // check for presale d-day
    function isWhitelist(address _address) external;
    function setWhitelist(address _address) external;
    function setDiscount(address _address) external;
}