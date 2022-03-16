// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

/// @title A title that should describe the contract/interface
/// @author The name of the author
/// @notice Explain to an end user what this does
/// @dev Explain to a developer any extra details
interface ICopyright {
    function isCreator(address _creator) external;
    function isOnPublicDomain(uint256 _creationId) external;
    function setRoyalty(uint256 _ratio) external;
    function tranferOwnership(address _sender, address _receiver) external;
}