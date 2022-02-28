const express = require('express');
const fs = require('fs');
const batteryFile = "./JSON/battery.json";
const chargerFile = "./JSON/charger.json";
const batteryDetails = './JSON/batteryDetails.json'
let Cyclecalculator = require('./cycleCounter')

const cors = require('cors');



const app = express()
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.post('/add/battery_data',function(req,res){
    let name = req.body.name;
    let bat_id = req.body.battery_id;
    let nft_id = req.body.nft_id;
    let trns_id = req.body.trns_id;
    let nft_cost = req.body.nft_cost;
    let bought_status = req.body.bought_status;
    let respData = ""

    let x = {
        "battery_id":bat_id,
        "nft_id":nft_id,
        "transaction_id":trns_id,
        "nft_cost":nft_cost     
    }

    //Writing to file
    if (fs.existsSync(batteryFile)) {
        let JSONdata = fs.readFileSync(batteryFile);
        let customerExists = false
        let batteryExists = false
        let oldJSON = JSON.parse(JSONdata)
        let batteryDatainserted = false
        for(let i=0;i<oldJSON.Userdata.length;i++){
            if(name == Object.keys(oldJSON.Userdata[i])[0]){
                for(let j=0;j<oldJSON.Userdata[i][name].length;j++){
                    if(oldJSON.Userdata[i][name][j].battery_id == bat_id){
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
            addBatteryDetails(name,batteryDetails,bat_id)
            respData = "battery Data inserted"
        }
    }
    res.json({data: respData})
    
});

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

app.get('/getBatteryData',function(req,res){
    let data = req.query.name
    let isValidcreadentails = false
    let respData = []
    //reading the files for nft_id,battery_id,date,battery_slno
    let JSONdata = fs.readFileSync("./JSON/battery.json")
    let oldJSON = JSON.parse(JSONdata)
    for(let i=0;i<oldJSON.Userdata.length;i++){
        if(data == Object.keys(oldJSON.Userdata[i])[0]){
            respData = oldJSON.Userdata[i][data]
            isValidcreadentails = true
            break
        }
    }

    // getting total cc
    if(isValidcreadentails == true){
        let JSONdata1 = fs.readFileSync("./JSON/batteryDetails.json")
        let OldJSON1 = JSON.parse(JSONdata1)
        batteryDetailsBlock:
            for(let i=0;i<OldJSON1.Batterydata.length;i++){
                if(data == Object.keys(OldJSON1.Batterydata[i])[0]){
                    for(let j=0;j<OldJSON1.Batterydata[i][data].length;j++){
                        for(let k=0;k<respData.length;k++){
                            if(respData[k].battery_id == OldJSON1.Batterydata[i][data][j].battery_id){
                                respData[k].CCredit = OldJSON1.Batterydata[i][data][j].totalCC
                            }
                        }
                    }
                break batteryDetailsBlock
                }
            }  
    }
   
    //sending the data
    res.json({message:'Success',data:respData})
});

app.post('/getChargerData',function(req,res){

});


app.listen(5000)

function addBatteryDetails(Username,fileName,battery_Id){
    let JSONdata = fs.readFileSync(batteryDetails);
    let oldJSON = JSON.parse(JSONdata)
    let dataExists = false
    for(let i=0;i<oldJSON.Batterydata.length;i++){
        let user = Object.keys(oldJSON.Batterydata[i])[0]
        if(user == Username){
            dataExists = true
            oldJSON.Batterydata[i][Username].push({
                "battery_id":battery_Id,
                "max_cycles":"500",
                "remaining_cycle":"500",
                "totalCC":"0",
                "battery_Cost":20000,
                "totalCycle":0
            })
        }
    }
    if(!dataExists){
        oldJSON.Batterydata.push({
            [Username]:[{
                "battery_id":battery_Id,
                "max_cycles":"500",
                "remaining_cycle":"500",
                "totalCC":"0",
                "battery_Cost":20000,
                "totalCycle":0
            }]
        })
    }
    writeFile(oldJSON,fileName)
}

function writeFile(oldJSON,fileName){
    let newData = JSON.stringify(oldJSON)
    fs.writeFile(fileName, newData, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
        // console.log("Details added successfully")
        // console.log("JSON file has been saved.");
    });
}


// setInterval(()=>{
//     Cyclecalculator.getAllBatteries()
// },90000)