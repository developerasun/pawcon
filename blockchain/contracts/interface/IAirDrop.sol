// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

/// @title A title that should describe the contract/interface
/// @author The name of the author
/// @notice Explain to an end user what this does
/// @dev Explain to a developer any extra details
interface IAirDrop { 

    function isOnTheList(address _address) external;
    function drop(address _address, uint256 _amount) external;
    function getDropAmount(address _address) external;
}