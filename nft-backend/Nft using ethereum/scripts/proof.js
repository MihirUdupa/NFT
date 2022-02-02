require("dotenv").config();
const API_URL = process.env.API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);
const Contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
const contractAddress = "0xB1Db3f70D72b234006E22a40C8A75ac1d8eDdd70";

const contract = new web3.eth.Contract(Contract.abi, contractAddress);

async function getOwner(){
    const tokenID = 1;
    const owner = await contract.methods.ownerOf(tokenID).call();
    console.log("The Owner of the NFT is ",owner)
}

// async function setNFTPrice(){
//     const token  = 1;
//     const price = 20;
//     const amount = await contract.methods.setPrice(token,price,PUBLIC_KEY,PUBLIC_KEY).call();
//     console.log("The Amount is ",amount)
// }

// async function getPrice(){
//     const tokenID = 1;
//     price = await contract.methods.getPrice(tokenID, PUBLIC_KEY).call();
//     console.log("The Price is ",price)
// }

getOwner()
// setNFTPrice()
// getPrice()
