require("dotenv").config();
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const API_URL = process.env.MATIC_API_URL;
const web3 = createAlchemyWeb3(API_URL);
const Contract = require("./artifacts/contracts/MyNFT.sol/MyNFT.json");
const contractAddress = "0xa838C42cdcCBAd34660224001c06c1fCa7239FD1";
const contract = new web3.eth.Contract(Contract.abi, contractAddress);
const fs = require('fs');

function updateData(name,CPoints,id){
    let PRIVATE_KEY
    let PUBLIC_KEY
    let JSONdata = fs.readFileSync('./JSON/address.json');
    let oldJSON = JSON.parse(JSONdata)
    return new Promise((res,rej) =>{
        for(let i=0;i<oldJSON.Address.length;i++){
            let user = Object.keys(oldJSON.Address[i])[0]
            if(user == name){
                for(let j=0;j<oldJSON.Address[i][name].length;j++){
                    PRIVATE_KEY = oldJSON.Address[i][name][j].Private_Key
                    PUBLIC_KEY = oldJSON.Address[i][name][j].Public_Key
                }
            }
        }
        const PUBLIC_KEY1 = process.env[PUBLIC_KEY];
        const PRIVATE_KEY1 = process.env[PRIVATE_KEY];
        setNFTCP(CPoints,id,PUBLIC_KEY1,PRIVATE_KEY1).then(hash =>{
            res(hash)
        }).catch(err =>{
            rej(err)
        })
    })
}

async function setNFTCP(CPoints,id,PUBKey,PRIKey){
    return new Promise(async (res,rej) =>{
        const token = id;
        const nonce = await web3.eth.getTransactionCount(PUBKey,'latest')
        const CP = CPoints;
        const data = await contract.methods.setCarbonPoints(token,CP,PUBKey,PUBKey).encodeABI()
        const trx = {
            'from': PUBKey,
            'to': contractAddress,
            'nonce': nonce,
            'gas': 500000,
            'data': data
        }

        const signPromise = web3.eth.accounts.signTransaction(trx, PRIKey)
        signPromise.then((signedTx) => {
            web3.eth.sendSignedTransaction(signedTx.rawTransaction,function(err,hash){
                if(!err){
                    console.log("The hash of your transaction is: ",hash,"\nCheck Alchemy's Mempool to view the status of your transaction!");
                    res(hash)
                }else{
                    console.log("Something went wrong when submitting your transaction: ",err);
                }
            }).catch((err) =>{
                rej(err)
                console.log(" Promise failed:", err);
            })
        })
    })
}

module.exports = {
    updateData:updateData
}