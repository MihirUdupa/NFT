require("dotenv").config();
const API_URL = process.env.MATIC_API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PRIVATE_KEY1 = process.env.PRIVATE_KEY1;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

const Contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

const contractAddress = "0xa838C42cdcCBAd34660224001c06c1fCa7239FD1";
const buyerAddress = "0x171d14624db213201388631B904742b56Fa2fa88";

const contract = new web3.eth.Contract(Contract.abi, contractAddress);

//function call to transfer NFT
async function sendNFT(){
    const token  = 5;
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest');
    const trx = {
        'from': PUBLIC_KEY,
        'to': contractAddress,
        'nonce': nonce,
        'gas': 500000,
        'data': contract.methods.transferFrom(PUBLIC_KEY,buyerAddress,token).encodeABI()
    }
    
    
    const signPromise = web3.eth.accounts.signTransaction(trx, PRIVATE_KEY)
    signPromise.then((signedTx) => {
        web3.eth.sendSignedTransaction(signedTx.rawTransaction,function(err,hash){
            if(!err){
                console.log("The hash of your transaction is: ",hash,"\nCheck Alchemy's Mempool to view the status of your transaction!\nTransfering the NFT to the buyer\ncheck again by calling the proof.js file");
                
            }else{
                console.log("Something went wrong when submitting your transaction: \n",err);
            }
        }).catch((err) =>{
            console.log(" Promise failed:", err);
        })
    })
}


//main functions
sendNFT()