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
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "../ERC20/Churu.sol";

/// @title ERC721 implementation of CuriousPawoneer NFT
/// @author DeveloperAsun(Jake Sung)
contract CuriousPawoneer is ERC721, Ownable, Pausable, ReentrancyGuard {
    // import libraries
    using Strings for uint256; 
    using Counters for Counters.Counter;

    // ======================== token detail setting : NOT TESTED ================== //
    bytes32 public constant creator = "Jake Sung"; 
    uint256 public cost = 0.03 ether;
    uint256 public giveaway = 10;
    uint256 public requiredChuru = 100; // hold 100 churu to mint curious pawoneer
    uint256 public totalSupply = 1000; // adjust amount later
    uint256 nonce; // for random number

    // 0, 1, 2, 3, 4
    enum Rarity { 
        COMMON,
        RARE,
        EPIC, 
        LEGENDARY
    }
    Rarity public rarity = Rarity.COMMON;
    // ======================== token detail : NOT TESTED ================== //
    
    // ======================== IPFS setting : NOT TESTED ================== //
    string public baseURI; // IPFS CID
    string public baseImageURI; 
    string public baseMetadataURI; 
    string baseImageExtension = ".png"; 
    string baseMetadataExtension = ".json"; 
    string ipfsPrefix = 'ipfs://';
    // ======================== IPFS setting : NOT TESTED ================== //

    // ======================== Mapping setting : NOT TESTED ================== //
    mapping(address=>bool) public whiltelist; // set whitelist
    mapping(uint256=>uint256) public tokenRarity; // key : tokenId, value : rarity
    // ======================== Mapping setting : NOT TESTED ================== //

    Counters.Counter mintCount;
    Churu public churu;

    // ======================== Token inheritance setting : NOT TESTED ================== //
    // initialize ERC721 and ERC20
    constructor(address _churu, uint256 _nonce, string memory ipfsCid)ERC721("Curious Pawoneer", "CP"){ 
        churu = Churu(_churu);
        nonce = _nonce; // nonce added when deployed
        setBaseURI(ipfsCid); // set IPFS URI when deployed
    }
    // ======================== Token inheritance setting : NOT TESTED ================== //
    
    // ======================== Modifier setting : NOT TESTED ================== //
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
    // ======================== Modifier setting : NOT TESTED ================== //
    
    // ======================== Minting zone : NOT TESTED ================== // 
    function mintNFT(address to, uint256 tokenId) private { 
        // choose _safeMint over _mint whenever possible
        _safeMint(to, tokenId);
        tokenRarity[tokenId] = uint256(rarity); // default rarity is common(0)
        // token URI is set to : 'ipfs://cid/tokenId' 
        setTokenImageURI(tokenId); // 'ipfs://cid/tokenId.png'
        setTokenMetadataURI(tokenId); // 'ipfs://cid/tokenId.json'
    }

    // set minting condition
    function mint(address to, uint256 tokenId) public payable whenNotPaused setCost{ 
        // minting requires to have 100 churu
        require(churu.getChuruAmount(to) > requiredChuru, "You have to have more than 100 Churu");
        
        // non-whitelist mint costs 0.03 ether
        if (!whiltelist[to]) {
            require(msg.value > cost, "Enter a proper ether amount."); 
            mintNFT(to, tokenId);
        } 
        // whitelist can mint free for up to 10 giveaways(total)
        else if (whiltelist[to] && giveaway > 0) { 
            mintNFT(to, tokenId);
            giveaway--;
        } 
        else { 
            require(msg.value > cost, "Enter a proper ether amount");
            mintNFT(to, tokenId);
        }
        // increase mint amount for dynamic cost
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
    // ======================== Minting zone : NOT TESTED ======================== // 

    // ======================== IPFS & Token URI zone : NOT TESTED ======================== // 
    // how Token URI works : tokenURI : baseURI + tokenId
    // 1. set _baseURI
    // 2. user mint a NFT and the token id is created
    // 3. set tokenURI by combining _baseURI and tokenId
    // 4. front end will instantiate a contract and get the token URI
    // 5. front end displays the token 
    
    // how IPFS works : gateway + CID + file name(token + file extension)
    // 1. upload NFT media to Pinata or IPFS desktop to get CID
    // 2. concatenate prefix 'ipfs://' with the CID for opensea metadata standard
    // 3. set it as baseURI in during deploy (in constructor)
    // 4. metadata should be in .json, NFT image should be in .png <=> communicate this with front end

    // 1. set baseURI first with IPFS CID
    // 2. set baseImageURI / baseMetadataURI
    // 3. get baseImageURI / baseMetadataURI
    function _baseURI(string memory ipfsCid) internal view virtual returns (string memory) {
        // ipfs:// => opensea metadata standard
        // baseURI result =>  ipfs://cid/
        return string(abi.encodePacked(ipfsPrefix, ipfsCid, "/"));
    }

    /// @dev set baseURI with IPFS CID(content identifier, hash)
    function setBaseURI(string memory ipfsCid) internal { 
        baseURI = _baseURI(ipfsCid); 
    }

    // change to new baseURI. Without this method, baseURI will be never changed once deployed. 
    function resetNewBaseURI(string memory ipfsCid) public {
        setBaseURI(ipfsCid);
    }

    function getBaseURI() public view returns(string memory) {
        return baseURI;
    }

    /// @dev set NFT metadataURI
    function setTokenMetadataURI(uint256 tokenId) public {
        // tokenURI should be : 'ipfs://cid/tokenId.json'
        baseMetadataURI = string(abi.encodePacked(tokenURI(tokenId), baseMetadataExtension));
    }

    /// @dev set NFT imageURI
    function setTokenImageURI(uint256 tokenId) public {
        // tokenURI should be : 'ipfs://cid/tokenId.png' 
        baseImageURI = string(abi.encodePacked(tokenURI(tokenId), baseImageExtension));
    }
    
    // front end will invoke this to get tokenURI
    function getTokenURIs() public view returns(string[2] memory){
        // combine baseURI with tokenId and  returns a string         
        return [baseImageURI, baseMetadataURI];
    }
    // ======================== IPFS & Token URI zone : NOT TESTED ================== // 


    // ======================== Balance zone : NOT TESTED ================== // 
    // 1. withdraw ether
    // 2. set 5% contract loyalty 
    function withdraw() public payable onlyOwner nonReentrant {
        (bool isSent, ) = payable(address(this)).call{ value : address(this).balance }("");
        require(isSent, "Only owner.");
    }
    // ======================== Balance zone : NOT TESTED ================== // 
}