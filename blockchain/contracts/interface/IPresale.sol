// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

/// @title A title that should describe the contract/interface
/// @author The name of the author
/// @notice Explain to an end user what this does
/// @dev Explain to a developer any extra details

interface IPresale {
    // getting value : getter => getXXX
    // setting value : setter => setYYY

    // event here

    // call signature here
    function setMintingLimit(uint256 _limit) external;
    function addToWhiteList(address _address) external;
}