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
import "../../../node_modules/@openzeppelin/contracts/security/Pausable.sol";
import "../../../node_modules/@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "../../constant/Container.sol";
import "../ERC20/Churu.sol";

contract CuriousPawoneer is ERC721, Ownable, Pausable, ReentrancyGuard{
    // import libraries
    using Strings for uint256; 
    using Counters for Counters.Counter;

    Churu public churu;

    // initialize ERC721 and ERC20
    constructor(address _address)ERC721("Curious Pawoneer", "CP"){ 
        churu = Churu(_address);
    }

    /// @dev set token detail
    uint256 cost = 0.03 ether;
    uint256 freeMintingPerWhitelist = 10;
    uint256 mintPerAccount = 3;
    uint256 totalSupply = 1000; // adjust amount later
    uint256 requiredChuru = 100; // hold 100 churu to min curious pawoneer
    Counters.Counter mintCount;

    // set whitelist
    mapping(address=>bool) public whiltelist;

    /// @dev set dynamic cost based on total supply
    function setCost() public onlyOwner {
        if (mintCount.current() < 300) { 
            cost = 0.03 ether;
        }
        if (mintCount.current() >= 300) {
            cost *= 2;
        }
        if (mintCount.current() < 700) {
            cost *= 2;
        }
        if (mintCount.current() >= 700) {
            cost *= 2;
        }
    }

    // set minting condition
    function mint(address to, uint256 tokenId, uint256 amount) public payable whenNotPaused { 
        // minting requires to have 100 churu
        require(churu.getChuruAmount(to) > requiredChuru, "You have to have more than 100 Churu");

        // non-whitelist mint costs 0.03 ether
        if (!whiltelist[to]) {
            require(msg.value > cost, "Enter a proper ether amount."); 
            require(amount < mintPerAccount, "Can mint up to 3.");
            // choose _safeMint over _mint whenever possible
            // (recommended practice by openzeppelin)
            _safeMint(to, tokenId);
            mintCount.increment();
            setCost();
        }

        // whitelist mint free up to 10
        if (whiltelist[to]) {
            require(amount < freeMintingPerWhitelist, "Can mint up to 10.");
            _safeMint(to, tokenId);
            mintCount.increment();
            setCost();
        }
    }

    // set burning condition
    function burn(uint256 tokenId) public { 
        _burn(tokenId); // delete nft
    }


    // ======================== Finance zone ================== // 
    // withdraw ether. Ownable.sol sets owner as one deploying contract by default(can be changed)
    function withdraw() public payable onlyOwner nonReentrant {
        (bool isSent, ) = payable(msg.sender).call{ value : address(this).balance }("");
        require(isSent);
    }

    

    // ======================== Finance zone ================== // 
    
    // ======================== Change zone ================== // 
    // tokenURI : url where json file is hosted
    
    // overriding _baseURI from ERC721 
    function _baseURI() internal view virtual override returns (string memory) {
        return "testing";
    }
    
    function setTokenURI() public view returns(bytes memory){
        // concat base URI and token URI 
        return abi.encodePacked("some http url", _baseURI()); 
    }

    // ======================== Change zone ================== // 
}