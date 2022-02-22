const path = './JSON/batteryDetails.json'
const fs = require('fs');

function generate(battery_id,name,cycle){
    console.log(battery_id,name,cycle)
    let Username = name;
    let battery_Id = battery_id
    let cycleDone = cycle;

    if(fs.existsSync(path)){
        let JSONdata = fs.readFileSync('./JSON/batteryDetails.json');
        let oldJSON = JSON.parse(JSONdata)
        // fetching the existing customers data
        for(let i=0;i<oldJSON.Batterydata.length;i++){
            let user = Object.keys(oldJSON.Batterydata[i])[0]
            if(user== Username){
                for(let j=0;j<oldJSON.Batterydata[i][Username].length;j++){
                    if(oldJSON.Batterydata[i][Username][j].battery_id == battery_Id){
                        let remaining_Cycle = parseInt(oldJSON.Batterydata[i][Username][j].remaining_cycle);
                        let totalCC = parseInt(oldJSON.Batterydata[i][Username][j].totalCC);
                        let totalCost = parseInt(oldJSON.Batterydata[i][Username][j].battery_Cost);
                        if(remaining_Cycle != 0){
                            // console.log(remaining_Cycle,totalCC,totalCost)
                            calculateCC(totalCC,cycleDone,totalCost,remaining_Cycle,battery_Id,Username)
                        }
                    }
                }
            }
        }
    }
}

//calculation of cc 
function calculateCC(totalCC,cycle,totalCost,remaining_Cycle,id,Username){
    console.log(totalCC,cycle,totalCost,remaining_Cycle,id,Username)
    let cost = totalCost/500;
    let ccEarned = cost*2*cycle;
    ccEarned = totalCC+ccEarned;
    totalCycle = remaining_Cycle - cycle;
    writeData(totalCycle,ccEarned,id,Username)
}

function writeData(totalCycle,ccEarned,id,Username){
    console.log("inside writing function of ccCalculator")
    //writing the new and calculated data
    let JSONdata = fs.readFileSync('./JSON/batteryDetails.json');
    let oldJSON = JSON.parse(JSONdata)
    for(let i=0;i<oldJSON.Batterydata.length;i++){
        let user = Object.keys(oldJSON.Batterydata[i])[0]
        if(user == Username){
            for(let j=0;j<oldJSON.Batterydata[i][Username].length;j++){
                if(id == oldJSON.Batterydata[i][Username][j].battery_id){
                    oldJSON.Batterydata[i][Username][j].totalCC = ccEarned.toString();
                    oldJSON.Batterydata[i][Username][j].remaining_cycle = totalCycle.toString();
                }
            }
        }
    }
    writeFile(oldJSON)
    console.log("Data Appended")
}

function writeFile(oldJSON){
    let newData = JSON.stringify(oldJSON)
    fs.writeFile("./JSON/batteryDetails.json", newData, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
        console.log("JSON file has been saved.");
    });
}

module.exports={
    generate:generate
}