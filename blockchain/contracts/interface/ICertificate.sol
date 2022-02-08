// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

/// @title A title that should describe the contract/interface
/// @author The name of the author
/// @notice Explain to an end user what this does
/// @dev Explain to a developer any extra details
contract ICertificate {

    // restricted function only can be called by DeveloperAsun
    modifier onlyIssuer() {
        require(msg.sender == address(this));
        _;
    }

    // issue certificate
    function issueOne(address _holder) public payable{}

    // NOT DONE : set expiration date to certificate 
    function setExpiration(uint256 _date) public onlyIssuer {}
    function getExpiration(uint256 _date) public view returns (uint256){}
    
    // extend certificate expiration date from _prev to _to.
    function extendExpiration(uint256 _prev, uint256 _to) public {}
    function expiresCert(uint256 _date) internal {}
}