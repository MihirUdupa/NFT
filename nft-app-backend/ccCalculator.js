const path = './JSON/batteryDetails.json'
const fs = require('fs');
const dateTime = require('node-datetime');
let updateBlockchain = require('./upDateBlockchain')

function generate(battery_id,name,cycle){
    let Username = name;
    let battery_Id = battery_id;
    let cycleDone = cycle;
    let NFT_ID;
    let nftUserFound = false;

    //fetching the NFT_ID of the battery
    let nftdata = fs.readFileSync('./JSON/battery.json');
    let olddata = JSON.parse(nftdata)
    for(let a=0;a<olddata.Userdata.length;a++){
        let nftUser = Object.keys(olddata.Userdata[a])[0]
        if(nftUser == Username){
            for(let b=0;b<olddata.Userdata[a][Username].length;b++){
                NFT_ID = parseInt(olddata.Userdata[a][Username][b].nft_id)
                nftUserFound = true
            }
        }
    }

    if(nftUserFound == true){
        if(fs.existsSync(path)){
            // fetching the existing customers data
            let JSONdata = fs.readFileSync('./JSON/batteryDetails.json');
            let oldJSON = JSON.parse(JSONdata)
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
                                calculateCC(totalCC,cycleDone,totalCost,remaining_Cycle,battery_Id,Username,NFT_ID)
                            }
                        }
                    }
                }
            }
        }
    }
}

//calculation of cc 
function calculateCC(totalCC,cycle,totalCost,remaining_Cycle,id,Username,NFT_ID){
    console.log(totalCC,cycle,totalCost,remaining_Cycle,id,Username)
    let cost = totalCost/500;
    let ccEarned = cost*2*cycle;
    ccEarned = ccEarned / 100;
    ccEarned = totalCC+ccEarned;
    totalCycle = remaining_Cycle - cycle;
    writeData(totalCycle,ccEarned,id,Username,NFT_ID)
}

function writeData(totalCycle,ccEarned,id,Username,NFT_ID){
    let hash
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
    updateBlockchain.updateData(Username,ccEarned,NFT_ID).then(hash =>{
        writeFile(Username,oldJSON,id,hash)
        console.log("Data Appended")
    })
}

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}

async function writeFile(Username,oldJSON,id,hash){
    console.log(hash)
    let newData = JSON.stringify(oldJSON)
    fs.writeFile("./JSON/batteryDetails.json", newData, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
        console.log("JSON file has been saved.");
    });
    await sleep(1000)
    storeData(Username,id,hash)
}

function storeData(Username,id,hash){
    let dt = dateTime.create();
    let formatted = dt.format('Y-m-d H:M:S'); 

    let x = {
        'time': formatted,
        'hash':hash
    }

    let JSONdataStore = fs.readFileSync('./JSON/batteryData.json');
    let customerExists = false
    let batteryExists = false
    let oldJSONdata = JSON.parse(JSONdataStore)
    for(let i=0;i<oldJSONdata.Data.length;i++){
        if(Username == Object.keys(oldJSONdata.Data[i])[0]){
            customerExists = true
            for(let j=0;j<oldJSONdata.Data[i][Username].length;j++){
                if(id == Object.keys(oldJSONdata.Data[i][Username][j])[0]){
                    batteryExists = true
                    oldJSONdata.Data[i][Username][j][id].push(x)
                }
            }
        }
        if(!batteryExists && customerExists){
            oldJSONdata.Data[i][Username].push({[id]:[x]})
        }
    }

    if(customerExists == false){
        oldJSONdata.Data.push({
            [Username]:[{
                [id]:[x]
            }]
        })
    }

    let newData = JSON.stringify(oldJSONdata)
    fs.writeFile('./JSON/batteryData.json', newData, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
    });
}

// generate(5,"Vageesh",50)

module.exports={
    generate:generate
}