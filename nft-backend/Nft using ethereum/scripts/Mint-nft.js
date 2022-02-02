require("dotenv").config();
const API_URL = process.env.API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
// console.log(JSON.stringify(contract.abi))
const contractAddress = "0xc14d91E85528EF5f77567A90526470599f28dC84";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

async function mintNFT(tokenURI){
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest');

    const trx={
        'from':PUBLIC_KEY,
        'to':contractAddress,
        'nonce':nonce,
        'gas': 500000,
        'data': nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI(),
    }

    const signPromise = web3.eth.accounts.signTransaction(trx, PRIVATE_KEY)
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

mintNFT("https://gateway.pinata.cloud/ipfs/Qmf8DxK3BjitunCe2fqQo3PRjXdBj1zdFqvT15cSY9Vn1o")

//getting the transaction details
