const fs = require('fs');
const HealthData = './JSON/chargerDetails.json'
let CCGen = require('./ccCalculatorCharger')

async function voltage(name,ChrgId){
    let VoltageConsumed = 0
    let health = readHelath(name,ChrgId)
    do{
        await sleep(50)
        console.log("Using the charger Deployed by: "+name+" with ID :"+ChrgId+"\nVoltage Consumed is "+VoltageConsumed+" Wh")
        // for(let i=1;i<101;i++){
        // }
        VoltageConsumed++
    }while(VoltageConsumed != 2000)
    updateFile(name,ChrgId,health)
}

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}

function readHelath(name,ChrgId){
    let JSONdata = fs.readFileSync(HealthData)
    let oldJSON = JSON.parse(JSONdata)
    for(let i=0;i<oldJSON.ChargerDetails.length;i++){        
        let User = Object.keys(oldJSON.ChargerDetails[i])[0]
        if(User == name){
            for(let j=0;j<oldJSON.ChargerDetails[i][User].length;j++){
                if(ChrgId == oldJSON.ChargerDetails[i][User][j].charger_id){
                    return parseInt(oldJSON.ChargerDetails[i][User][j].Voltage_Cycles)
                }
            }
        }
    }
}

async function updateFile(name,ChrgId,health){
    let healthCycleData = health
    let JSONdata = fs.readFileSync(HealthData)
    let oldJSON = JSON.parse(JSONdata)
    for(let i=0;i<oldJSON.ChargerDetails.length;i++){
        if(name == Object.keys(oldJSON.ChargerDetails[i])[0]){
            for(let j=0;j<oldJSON.ChargerDetails[i][name].length;j++){
                if(ChrgId == oldJSON.ChargerDetails[i][name][j].charger_id){
                    if(health == 50){
                        health = 0
                    }else{
                        console.log(typeof health)
                        health = health + 1
                    }
                    oldJSON.ChargerDetails[i][name][j].Voltage_Cycles = health
                }
            }
        }
    }
    writeData(oldJSON)
    console.log(healthCycleData)
    if(healthCycleData == 50){
        await sleep(1000)
        healthCycleData = 50 * 2000
        //calling the calculate cc file
        CCGen.Generate(ChrgId,name,healthCycleData)
    }
}

function writeData(oldJSON){
    let newData = JSON.stringify(oldJSON)
    fs.writeFile(HealthData,newData,'utf-8',function(err){
        if(err){
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
        console.log("Details added successfully from file BatteryCharger")
    })
}

// voltage()

module.exports={
    voltage:voltage
}