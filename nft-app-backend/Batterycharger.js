let calculate = require('./ccCalculator')
const totalCyclesDone = './JSON/batteryDetails.json';
const fs = require('fs');

async function charge(battery_id,name){
    for(let i=1;i<101;i++){
        console.log("charging battery for User: "+name+" with battery Id: "+battery_id+" \nBattery % is: "+i+"%" )
        await sleep(100);
        if(i == 100){
            let data = readCycles(name,battery_id)
            console.log(parseInt(data))
            updateFile(name,battery_id,data)
        }
    }
}

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}

function readCycles(name,id){
    let JSONdata = fs.readFileSync(totalCyclesDone);
    let oldJSON = JSON.parse(JSONdata)
    for(let i=0;i<oldJSON.Batterydata.length;i++){
        let user = Object.keys(oldJSON.Batterydata[i])[0]
        if(user == name){
            for(let j=0;j<oldJSON.Batterydata[i][user].length;j++){
                if(id == oldJSON.Batterydata[i][name][j].battery_id){
                    return oldJSON.Batterydata[i][name][j].total_cycles
                }
            }
        }
    }
}

async function updateFile(name,id,cycle){
    let cycleData = cycle
    let JSONdata = fs.readFileSync(totalCyclesDone);
    let oldJSON = JSON.parse(JSONdata)
    for(let i=0;i<oldJSON.Batterydata.length;i++){
        let user = Object.keys(oldJSON.Batterydata[i])[0]
        if(user == name){
            for(let j=0;j<oldJSON.Batterydata[i][user].length;j++){
                if(id == oldJSON.Batterydata[i][name][j].battery_id){
                    if(cycle == 50){
                        cycle = 0
                    }else{
                        cycle = cycle + 1
                    }
                    oldJSON.Batterydata[i][name][j].total_cycles = cycle
                }
            }
        }
    }
    writedata(oldJSON)
    if(cycleData == 50){
        await sleep(1000)
        calculate.generate(id,name,cycleData)
    }
}

function writedata(oldJSON){
    let newData = JSON.stringify(oldJSON)
    fs.writeFile(totalCyclesDone, newData, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
        console.log("Details added successfully from file BatteryCharger")
    });
}


// for (let i=50;i<=50;i++){
//     console.log(i)
//     charge(2,"Mihir")
// }

module.exports={
    charge:charge
}