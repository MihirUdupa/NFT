const express = require('express');
const fs = require('fs');
const batteryFile = "./JSON/battery.json";
const chargerFile = "./JSON/charger.json";
const batteryDetails = './JSON/batteryDetails.json';
const chargerDetails = './JSON/chargerDetails.json';
const batteryData = './JSON/batteryData.json';
const chargerData = './JSON/chargerData.json';
require("dotenv").config();
let Cyclecalculator = require('./cycleCounter');
let chargeCalculator = require('./checkChargerHealth');
// blockchain req's
const API_URL = process.env.MATIC_API_URL;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);
const Contract = require("./artifacts/contracts/MyNFT.sol/MyNFT.json");
const contractAddress = "0xa838C42cdcCBAd34660224001c06c1fCa7239FD1";
const contract = new web3.eth.Contract(Contract.abi, contractAddress);
const cors = require('cors');



const app = express()
app.use(express.urlencoded({extended:false}))
app.use(cors())

//inserting data
app.post('/add/data',function(req,res){
    let name = req.body.name;
    let id = req.body.id;
    let nft_id = req.body.nft_id;
    let trns_id = req.body.trns_id;
    let nft_cost = req.body.nft_cost;
    let bought_status = req.body.bought_status;
    let respData = ""

    let x = {
        "battery_id":id,
        "nft_id":nft_id,
        "transaction_id":trns_id,
        "nft_cost":nft_cost     
    }

    let y = {
        "charger_id":id,
        "nft_id":nft_id,
        "transaction_id":trns_id,
        "nft_cost":nft_cost
    }
    if(bought_status == "battery"){
        //Writing battery to file
        if (fs.existsSync(batteryFile)) {
            let JSONdata = fs.readFileSync(batteryFile);
            let customerExists = false
            let batteryExists = false
            let oldJSON = JSON.parse(JSONdata)
            let batteryDatainserted = false
            for(let i=0;i<oldJSON.Userdata.length;i++){
                if(name == Object.keys(oldJSON.Userdata[i])[0]){
                    for(let j=0;j<oldJSON.Userdata[i][name].length;j++){
                        if(oldJSON.Userdata[i][name][j].battery_id == id){
                            customerExists = true
                            batteryExists = true
                        }
                    }
                    if(!batteryExists){
                        oldJSON.Userdata[i][name].push(x)
                        customerExists = true
                        batteryDatainserted = true
                    }else{
                    respData = "battery Already Exists"
                    }
                }
            }
            if(customerExists == false ) {
                batteryDatainserted = true
                oldJSON.Userdata.push({
                    [name]:[x]
                }) 
            }
            if(batteryDatainserted == true){
                //updating the battery file
                writeFile(oldJSON,batteryFile)
                //updating the batteryDetails file
                addDetails(name,batteryDetails,id,bought_status)
                respData = "battery Data inserted"
            }
        }
    }else{
        //Writing to charger file
        if (fs.existsSync(chargerFile)) {
            let JSONdata = fs.readFileSync(chargerFile);
            let customerExists = false
            let chargerExists = false
            let oldJSON = JSON.parse(JSONdata)
            let chargerDatainserted = false
            for(let i=0;i<oldJSON.ChargerData.length;i++){
                if(name == Object.keys(oldJSON.ChargerData[i])[0]){
                    for(let j=0;j<oldJSON.ChargerData[i][name].length;j++){
                        if(oldJSON.ChargerData[i][name][j].charger_id == id){
                            customerExists = true
                            chargerExists = true
                        }
                    }
                    if(!chargerExists){
                        oldJSON.ChargerData[i][name].push(y)
                        customerExists = true
                        chargerDatainserted = true
                    }else{
                    respData = "charger Already Exists"
                    }
                }
            }
            if(customerExists == false ) {
                chargerDatainserted = true
                oldJSON.ChargerData.push({
                    [name]:[y]
                }) 
            }
            if(chargerDatainserted == true){
                //updating the charger file
                writeFile(oldJSON,chargerFile)
                //updating the chargerDetails file
                addDetails(name,chargerDetails,id,bought_status)
                respData = "charger Data inserted"
            }
        }
    }
    res.json({data: respData})
});


//checking the user login
app.post('/checkUser',function(req,res){
    let data = JSON.parse(Object.keys(req.body)[0]);
    let name = data.name
    let password = data.pass
    
    // checking if user exists
    let JSONdata = fs.readFileSync("login.json");
    let loginData = JSON.parse(JSONdata)
    let isValidcreadentails = false
    for(let i=0;i<loginData.login.length;i++){
        if(name == loginData.login[i].name && password == loginData.login[i].password){
            data = {
                name:name,
                status:1
            }
            isValidcreadentails = true
            res.json({message:'Successs',data:data})
        }
    }
    if(!isValidcreadentails){
        data={
            status:0
        }
        res.json({message:'fail',data:data})
    }
});


//getting battery data
app.get('/getBatteryData',async function(req,res){
    let data = req.query.name
    let respData = []
    let nft_id
    let battery_ID 

    // getting total cc
    let PUBLIC_KEY
    let JSONdata1 = fs.readFileSync('./JSON/address.json');
    let oldJSON1 = JSON.parse(JSONdata1)
    for(let i=0;i<oldJSON1.Address.length;i++){
        let user = Object.keys(oldJSON1.Address[i])[0]
        if(user == data){
            for(let j=0;j<oldJSON1.Address[i][data].length;j++){
                PUBLIC_KEY = oldJSON1.Address[i][data][j].Public_Key
            }
        }
    }

    //reading the files for nft_id,battery_id,
    let JSONdata = fs.readFileSync("./JSON/battery.json")
    let oldJSON = JSON.parse(JSONdata)
    for(let i=0;i<oldJSON.Userdata.length;i++){
        if(data == Object.keys(oldJSON.Userdata[i])[0]){
            for(let j=0;j<oldJSON.Userdata[i][data].length;j++){
                battery_ID = oldJSON.Userdata[i][data][j].battery_id
                nft_id = parseInt(oldJSON.Userdata[i][data][j].nft_id)
                CarbonPoints = await getCP(PUBLIC_KEY,nft_id)
                oldJSON.Userdata[i][data][j].CCredit = CarbonPoints
            }
            respData = oldJSON.Userdata[i][data]
            break
        }
    }

    //sending the data
    res.json({message:'Success',data:respData})
});


//getting charger data
app.get('/getChargerData',async function(req,res){
    let Username = req.query.name
    let respData = []
    let nft_id
    let charger_id

    // getting total cc
    let PUBLIC_KEY
    let JSONdata1 = fs.readFileSync('./JSON/address.json');
    let oldJSON1 = JSON.parse(JSONdata1)
    for(let i=0;i<oldJSON1.Address.length;i++){
        let user = Object.keys(oldJSON1.Address[i])[0]
        if(user == Username){
            for(let j=0;j<oldJSON1.Address[i][Username].length;j++){
                PUBLIC_KEY = oldJSON1.Address[i][Username][j].Public_Key
            }
        }
    }

    //reading the files for nft_id,charger_id,
    let JSONdata = fs.readFileSync("./JSON/charger.json")
    let oldJSON = JSON.parse(JSONdata)
    for(let i=0;i<oldJSON.ChargerData.length;i++){
        if(Username == Object.keys(oldJSON.ChargerData[i])[0]){
            for(let j=0;j<oldJSON.ChargerData[i][Username].length;j++){
                charger_id = oldJSON.ChargerData[i][Username][j].charger_id
                nft_id = parseInt(oldJSON.ChargerData[i][Username][j].nft_id)
                CarbonPoints = await getCP(PUBLIC_KEY,nft_id)
                oldJSON.ChargerData[i][Username][j].CCredit = CarbonPoints
            }
            respData = oldJSON.ChargerData[i][Username]
            break
        }
    }
    //sending the data
    res.json({message:'Success',data:respData})
});


//getting the cc credited details
app.get('/getDetails',function(req,res){
    let productName = req.query.productName
    let name = req.query.name
    let id = req.query.id
    let respData = []
    let JSONdata
    if(productName == 'battery'){
        JSONdata = fs.readFileSync(batteryData)
    }else{
        JSONdata = fs.readFileSync(chargerData)
    }
    let Olddata = JSON.parse(JSONdata)
    for(let i=0;i<Olddata.Data.length;i++){
        if(name == Object.keys(Olddata.Data[i])[0]){
            for(let j=0;j<Olddata.Data[i][name].length;j++){
                if(id == Object.keys(Olddata.Data[i][name][j])[0]){
                    respData = Olddata.Data[i][name][j][id]
                    console.log(respData)
                }
            }
        }
    }
    res.json({message:'Success',data:respData})
})

app.listen(5000)


//Other supportive functions
function addDetails(Username,fileName,battery_Id,bought_status){
    let battery_Data = {
        "battery_id":battery_Id,
        "max_cycles":"500",
        "remaining_cycle":"500",
        "totalCC":"0",
        "battery_Cost":20000,
        "total_cycles":0
    }

    let ChargerData = {
        "charger_id":battery_Id,
        "max_health":"1000000",
        "remaining_health":"1000000",
        "totalCC":"0",
        "charger_Cost":20000,
        "Voltage_Cycles":0
    }
    if (bought_status == "battery"){
        let JSONdata = fs.readFileSync(batteryDetails);
        let oldJSON = JSON.parse(JSONdata)
        let dataExists = false
        for(let i=0;i<oldJSON.Batterydata.length;i++){
            let user = Object.keys(oldJSON.Batterydata[i])[0]
            if(user == Username){
                dataExists = true
                oldJSON.Batterydata[i][Username].push(battery_Data)
            }
        }
        if(!dataExists){
            oldJSON.Batterydata.push({
                [Username]:[battery_Data]
            })
        }
        writeFile(oldJSON,fileName)
    }else{
        let JSONdata = fs.readFileSync(chargerDetails);
        let oldJSON = JSON.parse(JSONdata)
        let dataExists = false
        for(let i=0;i<oldJSON.ChargerDetails.length;i++){
            let user = Object.keys(oldJSON.ChargerDetails[i])[0]
            if(user == Username){
                dataExists = true
                oldJSON.ChargerDetails[i][Username].push(ChargerData)
            }
        }
        if(!dataExists){
            oldJSON.ChargerDetails.push({
                [Username]:[ChargerData]
            })
        }
        writeFile(oldJSON,fileName)
    }
}

function writeFile(oldJSON,fileName){
    let newData = JSON.stringify(oldJSON)
    fs.writeFile(fileName, newData, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
    });
}

//getting the cP from blockchain
async function getCP(PUBLIC_KEY,token_Id){
    const PUBLIC_KEY1 = process.env[PUBLIC_KEY];
    const token = token_Id;
    const CP = await contract.methods.getCarbonPoints(token,PUBLIC_KEY1).call()
    return CP
}

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}

//Main function
async function goToFile(){
    Cyclecalculator.getAllBatteries()
    await sleep(900000);
    chargeCalculator.getAllChargers()
}


setInterval(()=>{
    // goToFile()
    Cyclecalculator.getAllBatteries()
},120000)