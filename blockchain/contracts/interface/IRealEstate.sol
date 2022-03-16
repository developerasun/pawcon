// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

/// @title A title that should describe the contract/interface
/// @author The name of the author
/// @notice Explain to an end user what this does
/// @dev Explain to a developer any extra details
interface IRealEstate {

    // check if a property is buyable
    function isBuyable(uint256 _propertyId) external;

    // buy the property
    function buyProperty(address _address) external;

    // move ownership to the buyer
    function transferDeed(address _buyer) external;

    // set owner for the bought property
    function setPropertyOwner(uint256 _owner) external;
}