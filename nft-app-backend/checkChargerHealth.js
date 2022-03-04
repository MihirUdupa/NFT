const fs = require('fs')
let volt = require('./Voltage')
const totalHealth = './JSON/chargerDetails.json'

async function getAllChargers(){
    let names
    let chargId
    let totalRemainingHealth
    let JSONdata = fs.readFileSync(totalHealth);
    let oldJSON = JSON.parse(JSONdata)
    for(let i=0;i<oldJSON.ChargerDetails.length;i++){
        names = Object.keys(oldJSON.ChargerDetails[i])[0];
        for(let j=0;j<oldJSON.ChargerDetails[i][names].length;j++){
            chargId = oldJSON.ChargerDetails[i][names][j].charger_id
            totalRemainingHealth = 1000000 - parseInt(oldJSON.ChargerDetails[i][names][j].remaining_health)
            if(totalRemainingHealth <= 1000000){
                //calling voltage file
                volt.voltage(names,chargId)
            }
            await sleep(5000)
        }
    }
}

function sleep(ms){
    return new Promise(resolve => setInterval(resolve, ms));
}

// getAllChargers()

module.exports={
    getAllChargers:getAllChargers
}