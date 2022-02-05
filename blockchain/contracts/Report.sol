// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

/// @title PawCon Project Overview
/// @author Jake Sung
/// @notice Read PawCon Project overviews
/// @dev Suggest what should be included as project milestone
contract Report {
    bytes32 creator = "Jake Sung"; // author 

    // set project milestone
    struct Milestone { 
        uint256 contributors;
        uint256 users;
        uint256 artworks;
    }

    Milestone genesis = Milestone(0,0,0);
    Milestone milestone = Milestone(0,0,0);

    // getters : creator, genesis, milestone
    function getCreator() public view returns(bytes32) {
        return creator;
    }

    function getGenesis() public view returns(Milestone memory) {
        return genesis;
    }

    function getMilestone() public view returns(Milestone memory) {
        return milestone;
    }

    // setter : update the milestone
    function updateMilestone(
        uint256 _contributors, 
        uint256 _users, 
        uint256 _artworks
    ) public returns(Milestone memory) {
        Milestone memory updatedMilestone = Milestone(_contributors, _users, _artworks);
        milestone = updatedMilestone;
        return milestone;
    }
}