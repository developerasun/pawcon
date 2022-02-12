// SPDX-License-Identifier: MIT
/*
       /$$                               /$$                                                                               
      | $$                              | $$                                                                               
  /$$$$$$$  /$$$$$$  /$$    /$$ /$$$$$$ | $$  /$$$$$$   /$$$$$$   /$$$$$$   /$$$$$$  /$$$$$$   /$$$$$$$ /$$   /$$ /$$$$$$$ 
 /$$__  $$ /$$__  $$|  $$  /$$//$$__  $$| $$ /$$__  $$ /$$__  $$ /$$__  $$ /$$__  $$|____  $$ /$$_____/| $$  | $$| $$__  $$
| $$  | $$| $$$$$$$$ \  $$/$$/| $$$$$$$$| $$| $$  \ $$| $$  \ $$| $$$$$$$$| $$  \__/ /$$$$$$$|  $$$$$$ | $$  | $$| $$  \ $$
| $$  | $$| $$_____/  \  $$$/ | $$_____/| $$| $$  | $$| $$  | $$| $$_____/| $$      /$$__  $$ \____  $$| $$  | $$| $$  | $$
|  $$$$$$$|  $$$$$$$   \  $/  |  $$$$$$$| $$|  $$$$$$/| $$$$$$$/|  $$$$$$$| $$     |  $$$$$$$ /$$$$$$$/|  $$$$$$/| $$  | $$
 \_______/ \_______/    \_/    \_______/|__/ \______/ | $$____/  \_______/|__/      \_______/|_______/  \______/ |__/  |__/
                                                      | $$                                                                 
                                                      | $$                                                                 
                                                      |__/                                                                 
*/

pragma solidity ^0.8.10;
import "../../../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../../../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "../../../node_modules/@openzeppelin/contracts/utils/Counters.sol";
import "../../constant/Container.sol";

contract CuriousPawoneer is ERC721, Ownable {
    // import libraries
    using Strings for uint256; 
    using Counters for Counters.Counter;

    /// @dev set token detail
    uint256 cost = 0.03 ether;
    uint256 mintingLimitPerHolder = 3;
    Counters.Counter mintCount;
    uint256 totalSupply = 10; // adjust amount later

    // initialize ERC721
    constructor()ERC721("Curious Pawoneer", "CP"){ }

    /// @dev set dynamic cost based on total supply
    function setCost() internal onlyOwner {
        if (mintCount.current() < 3) { 
            cost = 0.03 ether;
        }
        if (mintCount.current() >= 3) {
            cost = 0.06 ether;
        }
        if (mintCount.current() < 7) {
            cost = 0.09 ether;
        }
        if (mintCount.current() >= 7) {
            cost = 0.12 ether;
        }
    }

    // tokenURI : url where json file is hosted

    // overriding _baseURI from ERC721 
    function _baseURI() internal view virtual override returns (string memory) {
        return "testing";
    }

    function setTokenURI() public view returns(bytes memory){
        // concat base URI and token URI 
        return abi.encodePacked("some http url", _baseURI()); 
    }

    function mint(address to, uint256 tokenId) public payable { 
        require(msg.value > cost, "Minting costs 0.03 ether"); 
        // choose _safeMint over _mint whenever possible(recommended practice by openzeppelin)
        _safeMint(to, tokenId);
        mintCount.increment();
        setCost();
    }

    function burn(uint256 tokenId) public { 
        _burn(tokenId); // delete nft
    }

    // withdraw ether. Ownable.sol sets owner as one deploying contract by default(can be changed)
    function withdraw() public payable onlyOwner {
        (bool isSent, ) = payable(msg.sender).call{ value : address(this).balance }("");
        require(isSent);
    }
}