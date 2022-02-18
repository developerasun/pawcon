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
import "node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "node_modules/@openzeppelin/contracts/utils/Counters.sol";
import "node_modules/@openzeppelin/contracts/security/Pausable.sol";
import "'node_modules/@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "ERC20/Churu.sol";

contract CuriousPawoneer is ERC721, Ownable, Pausable, ReentrancyGuard{
    // import libraries
    using Strings for uint256; 
    using Counters for Counters.Counter;

    // 0, 1, 2, 3, 4
    enum Rarity { 
        COMMON,
        RARE,
        EPIC, 
        LEGENDARY
    }

    /// @dev set token detail
    bytes32 public constant creator = "Jake Sung"; 
    uint256 public cost = 0.03 ether;
    uint256 public giveaway = 10;
    uint256 public requiredChuru = 100; // hold 100 churu to mint curious pawoneer
    uint256 public totalSupply = 1000; // adjust amount later
    uint256 nonce; // for random number
    string baseURI;
    Rarity public rarity = Rarity.COMMON;
    mapping(address=>bool) public whiltelist; // set whitelist
    mapping(uint256=>uint256) public tokenRarity; // key : tokenId, value : rarity

    Counters.Counter mintCount;
    Churu public churu;

    // initialize ERC721 and ERC20
    constructor(address _churu, uint256 _nonce)ERC721("Curious Pawoneer", "CP"){ 
        churu = Churu(_churu);
        nonce = _nonce; // nonce added when deployed
        setBaseURI(); // set IPFS URI when deployed
    }
    
    /// @dev set dynamic cost based on total supply
    modifier setCost() {
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
        _;
    }
    
    // ======================== Minting zone : NOT TESTED ================== // 
    // set minting condition
    function mint(address to, uint256 tokenId) public payable whenNotPaused setCost{ 
        // minting requires to have 100 churu
        require(churu.getChuruAmount(to) > requiredChuru, "You have to have more than 100 Churu");
        
        // non-whitelist mint costs 0.03 ether
        if (!whiltelist[to]) {
            require(msg.value > cost, "Enter a proper ether amount."); 
            // choose _safeMint over _mint whenever possible
            // (recommended practice by openzeppelin)
            _safeMint(to, tokenId);
            tokenRarity[tokenId] = uint256(rarity); // default rarity is common(0)
        } else { 
            // whitelist mint giveway up to 10
            require(giveaway > 0, "Giveaway out of stock");
            _safeMint(to, tokenId);
            tokenRarity[tokenId] = uint256(rarity); // default rarity is common(0)
            giveaway--;
        }
        mintCount.increment();
    }

    // set burning condition
    function burn(uint256 tokenId) public { 
        // set Legendary rarity can't be deleted
        require(tokenRarity[tokenId] != 3, "Legendary Pawoneer can't be deleted");
        _burn(tokenId); // delete nft
    }

    // set random rarity
    function getRandomNumber() internal returns(uint256) { 
        uint256 rand = uint256(keccak256(abi.encodePacked(
            nonce, block.difficulty, msg.sender
        ))) % 4; // Rarity ranges from 0 ~ 3
        nonce++; // increase nonce
        return rand;
    }

    function resetRarity(uint256 tokenId) public payable returns(uint256) {
        require(msg.value > cost, "Reset rarity cost 0.03 ether");
        uint256 rand = getRandomNumber();
        tokenRarity[tokenId] = rand;
        return rand;
    }
    // ======================== Minting zone ================== // 
    
    // ======================== Finance zone ================== // 
    // withdraw ether. Ownable.sol sets owner as one deploying contract by default(can be changed)
    function withdraw() public payable onlyOwner nonReentrant {
        (bool isSent, ) = payable(address(this)).call{ value : address(this).balance }("");
        require(isSent, "Only owner.");
    }
    // ======================== Finance zone ================== // 
    
    // ======================== Change zone ================== // 
    // how it works : tokenURI : baseURI + tokenId
    // 1. set _baseURI
    // 2. user mint a NFT and the token id is created
    // 3. set tokenURI by combining _baseURI and tokenId
    // 4. front end will instantiate a contract and get the token URI
    // 5. front end displays the token 
    // tokenURI : url where json file is hosted
    // overriding _baseURI from ERC721 
    
    function _baseURI() internal view virtual override returns (string memory) {
        return "ipfs:someIPFSAddressHere/"; // FIX : change this later
    }

    /// @dev call setBaseURI in constructor
    function setBaseURI() internal { 
        baseURI = _baseURI(); 
    }

    // front end will invoke this to get tokenURI
    function getTokenURI(uint256 tokenId) public view returns(string memory){
        // combine baseURI with tokenId and  returns a string         
        return tokenURI(tokenId);
    }
    // ======================== Change zone ================== // 
}
