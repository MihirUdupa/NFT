require("dotenv").config();
const API_URL = process.env.API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PRIVATE_KEY1 = process.env.PRIVATE_KEY1;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

const Contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

const contractAddress = "0xB1Db3f70D72b234006E22a40C8A75ac1d8eDdd70";
const buyerAddress = "0xF1094AaB86CB52018d1c64C272F72089C6c8C783";

const contract = new web3.eth.Contract(Contract.abi, contractAddress);

//function call to set the price for the NFT
async function setNFTPrice(){
    const token  = 1;
    const nonce = await web3.eth.getTransactionCount(buyerAddress, 'latest');
    const price = 10;
    const data = await contract.methods.setPrice(1,price,buyerAddress,buyerAddress).encodeABI()
    const trx = {
        'from': buyerAddress,
        'to': contractAddress,
        'nonce': nonce,
        'gas': 500000,
        'data': data
    }
    
    const signPromise = web3.eth.accounts.signTransaction(trx, PRIVATE_KEY1)
    signPromise.then((signedTx) => {
        web3.eth.sendSignedTransaction(signedTx.rawTransaction,function(err,hash){
            if(!err){
                console.log("The hash of your transaction is: ",hash,"\nCheck Alchemy's Mempool to view the status of your transaction!");
                
            }else{
                console.log("Something went wrong when submitting your transaction: ",err);
            }
        }).catch((err) =>{
            console.log(" Promise failed:", err);
        })
    })
}

//function call to get the price of NFT
async function getP(){
    const token = 1;
    const price = await contract.methods.getPrice(1,buyerAddress).call()
    console.log("The Current Price of NFT is ",price);
}

//function call to transfer NFT
async function sendNFT(){
    const token  = 1;
    const nonce = await web3.eth.getTransactionCount(buyerAddress, 'latest');
    
    const trx = {
        'from': buyerAddress,
        'to': contractAddress,
        'nonce': nonce,
        'gas': 500000,
        'data': contract.methods.transferFrom(buyerAddress,PUBLIC_KEY,1).encodeABI()
    }
    
    
    const signPromise = web3.eth.accounts.signTransaction(trx, PRIVATE_KEY1)
    signPromise.then((signedTx) => {
        web3.eth.sendSignedTransaction(signedTx.rawTransaction,function(err,hash){
            if(!err){
                console.log("The hash of your transaction is: ",hash,"\nCheck Alchemy's Mempool to view the status of your transaction!\nTransfering the NFT to the buyer\ncheck again by calling the proof.js file");
                
            }else{
                console.log("Something went wrong when submitting your transaction: ",err);
            }
        }).catch((err) =>{
            console.log(" Promise failed:", err);
        })
    })
}


//main function
// setNFTPrice()
// getP()
sendNFT()