// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @title PawCon Project Overview
/// @author Jake Sung
/// @notice Read PawCon Project overviews
/// @dev Suggest what should be included as project milestone
contract Report {
    string creator = "Jake Sung"; // Jake Sung

    // set project milestone
    struct Milestone { 
        uint256 contributors;
        uint256 users;
        uint256 artworks;
    }

    Milestone genesis = Milestone(0,0,0);
    Milestone milestone = Milestone(0,0,0);

    function getCreator() public view returns(string memory) {
        return creator;
    }

    // get initial project performance
    function getGenesis() public view returns(Milestone memory) {
        return genesis;
    }

    // update the performance
    function updateMilestone(
        uint256 _contributors, 
        uint256 _users, 
        uint256 _artworks
    ) public returns(Milestone memory) {
        Milestone memory updatedMilestone = Milestone(_contributors, _users, _artworks);
        milestone = updatedMilestone;
        return milestone;
    }

    function getMilestone() public view returns(Milestone memory) {
        return milestone;
    }
    
}