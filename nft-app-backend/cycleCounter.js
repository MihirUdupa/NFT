const totalCyclesDone = './JSON/batteryDetails.json';
const fs = require('fs');
let charge = require('./Batterycharger');

async function getAllBatteries(){
    let names
    let bat_id
    let cycle
    let JSONdata = fs.readFileSync(totalCyclesDone);
    let oldJSON = JSON.parse(JSONdata)
    for(let i=0;i<oldJSON.Batterydata.length;i++){
        names = Object.keys(oldJSON.Batterydata[i])[0]
        for(let j=0;j<oldJSON.Batterydata[i][names].length;j++){
            bat_id = oldJSON.Batterydata[i][names][j].battery_id
            cycle = 500 - parseInt(oldJSON.Batterydata[i][names][j].remaining_cycle)
            if(cycle <= 500){
                //calling the BatteryCharger file
                charge.charge(bat_id,names)
            }
            await sleep(15000)
        }
    }
    return 
}

function sleep(ms) {
    return new Promise(resolve => setInterval(resolve, ms));
}

// getAllBatteries(2,"Mihir")

module.exports={
    getAllBatteries:getAllBatteries
}