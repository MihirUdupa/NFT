require("dotenv").config();
const API_URL = process.env.MATIC_API_URL;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);
const Contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
const contractAddress = "0xa838C42cdcCBAd34660224001c06c1fCa7239FD1";

const contract = new web3.eth.Contract(Contract.abi, contractAddress);

async function getOwner(){
    const tokenID = 5;
    const owner = await contract.methods.ownerOf(tokenID).call();
    console.log("The Owner of the NFT is ",owner)
}

getOwner()