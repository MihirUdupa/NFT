require("dotenv").config();
const API_URL = process.env.MATIC_API_URL;
const PUBLIC_KEY = process.env.VAGEESH_PUBLIC_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

const Contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

const contractAddress = "0xa838C42cdcCBAd34660224001c06c1fCa7239FD1";

const contract = new web3.eth.Contract(Contract.abi, contractAddress);

async function getCP(){
    const token = 4;
    const CP = await contract.methods.getCarbonPoints(token,PUBLIC_KEY).call()
    console.log("The Current Price of NFT is ",CP);
}

getCP()