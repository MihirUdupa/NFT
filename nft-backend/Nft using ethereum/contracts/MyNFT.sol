//Contract based on [https://docs.openzeppelin.com/contracts/3.x/erc721](https://docs.openzeppelin.com/contracts/3.x/erc721)
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "hardhat/console.sol";

contract MyNFT is ERC721URIStorage, Ownable {
    event NftBought(address _seller, address _buyer, uint256 _price);
    event Transfer1(address indexed _from, address indexed _to, uint256 indexed _tokenId);
    mapping(uint256 => address) internal idToOwner;
    using Counters for Counters.Counter;
    mapping (uint256 => uint256) public tokenIdToPrice;
    mapping (uint256 => address) public tokenIdToTokenAddress;
    Counters.Counter private _tokenIds;
    constructor() public ERC721("MyNFT", "NFT") {}

    function mintNFT(address recipient, string memory tokenURI)
        public onlyOwner
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    //selling NFT
   
    // The following functions are overrides required by Solidity.

    //function to set the price
    function setPrice(uint256 _tokenId, uint256 _price, address _tokenAddress, address _ownerAddress) public {
        require(_ownerAddress == ownerOf(_tokenId), 'Not owner of this token');
        tokenIdToPrice[_tokenId] = _price;
        tokenIdToTokenAddress[_tokenId] = _tokenAddress;
        // uint256 priceda = tokenIdToPrice[_tokenId];
        // return priceda;
    }

    //function to transfer NFT
    function transfer(address _to, uint256 _tokenId) public {
        require(msg.sender == idToOwner[_tokenId]);
        idToOwner[_tokenId] = _to;
        emit Transfer1(msg.sender, _to, _tokenId);
    }

    //function to get the Price
    function getPrice(uint256 _tokenId, address _tokenAddress) public returns (uint256) {
        tokenIdToTokenAddress[_tokenId] = _tokenAddress;
        uint256 priceda = tokenIdToPrice[_tokenId];
        return priceda;
    }

    //function to allow the buyer to buy
    function allowBuy(uint256 _tokenId, uint256 _price, address _ownerAddress) external {
        require(_ownerAddress == ownerOf(_tokenId), 'Not owner of this token');
        require(_price > 0, 'Price zero');
        tokenIdToPrice[_tokenId] = _price;
    }

    //function to buy the NFT
    function buy(uint256 _tokenId, address _buyeraddress) external payable {
        uint256 price = tokenIdToPrice[_tokenId];
        require(price > 0, 'This token is not for sale');
        //require(msg.value == price, 'Incorrect value');
        
        address seller = ownerOf(_tokenId);
        _transfer(seller, _buyeraddress, _tokenId);
        require(_buyeraddress == ownerOf(_tokenId), 'Not owner of this token');

        tokenIdToPrice[_tokenId] = 0; // not for sale anymore
        payable(seller).transfer(msg.value); // send the ETH to the seller

        emit NftBought(seller, _buyeraddress, msg.value);
    }
}
