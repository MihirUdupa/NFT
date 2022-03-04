const chargerHealth = './JSON/chargerDetails.json'
const fs = require('fs');
let updateBlockchain = require('./upDateBlockchain')
const dateTime = require('node-datetime');

function Generate(chargId,name,Health){
    let Username = name;
    let NFT_ID;
    let nftUserFound = false;
    //fetching the NFT_ID of the charger
    let nftdata = fs.readFileSync('./JSON/charger.json');
    let olddata = JSON.parse(nftdata)
    for(let a=0;a<olddata.ChargerData.length;a++){
        let nftUser = Object.keys(olddata.ChargerData[a])[0]
        if(nftUser == Username){
            for(let b=0;b<olddata.ChargerData[a][Username].length;b++){
                NFT_ID = parseInt(olddata.ChargerData[a][Username][b].nft_id)
                nftUserFound = true
            }
        }
    }
    if(nftUserFound == true){
        if(fs.existsSync(chargerHealth)){
            let JSONdata = fs.readFileSync(chargerHealth)
            let oldJSON = JSON.parse(JSONdata)
            for(let i=0;i<oldJSON.ChargerDetails.length;i++){
                let User = Object.keys(oldJSON.ChargerDetails[i])[0]
                if(User == name){
                    for(let j=0;j<oldJSON.ChargerDetails[i][User].length;j++){
                        if(oldJSON.ChargerDetails[i][User][j].charger_id == chargId){
                            let remaininh_Helath = parseInt(oldJSON.ChargerDetails[i][User][j].remaining_health)
                            let CC = parseInt(oldJSON.ChargerDetails[i][User][j].totalCC)
                            let cost = parseInt(oldJSON.ChargerDetails[i][User][j].charger_Cost)
                            if(remaininh_Helath != 0){
                                CalculateCC(cost,CC,chargId,name,Health,remaininh_Helath,NFT_ID)
                            }
                        }
                    }
                }
            }
        }
    }
}

//calculating CC
function CalculateCC(cost,CC,chargId,name,Health,remaininh_Helath,NFT_ID){
    let rate = cost/1000000;
    let ccEarned = rate * 3 * Health;
    ccEarned = ccEarned / 100;
    ccEarned = CC + ccEarned;
    let totalHealth = remaininh_Helath - Health;
    writeData(ccEarned,totalHealth,name,chargId,NFT_ID)
}

//writing Data
function writeData(ccEarned,totalHealth,name,chargId,NFT_ID){
    let JSONdata = fs.readFileSync(chargerHealth)
    let oldJSON = JSON.parse(JSONdata)
    for(let i=0;i<oldJSON.ChargerDetails.length;i++){
        let User = Object.keys(oldJSON.ChargerDetails[i])[0]
        if(User == name){
            for(let j=0;j<oldJSON.ChargerDetails[i][User].length;j++){
                if(chargId == oldJSON.ChargerDetails[i][User][j].charger_id){
                    oldJSON.ChargerDetails[i][User][j].totalCC = ccEarned.toString();
                    oldJSON.ChargerDetails[i][User][j].remaining_health = totalHealth.toString();
                }
            }
        }
    }
    updateBlockchain.updateData(name,ccEarned,NFT_ID).then(hash =>{
        writeToFile(oldJSON,hash,name,chargId)
        console.log("Data Appended")
    })
}

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}

//actual writing code
async function writeToFile(oldJSON,hash,name,chargId){
    // console.log("writing the data")
    let newData = JSON.stringify(oldJSON)
    fs.writeFile(chargerHealth,newData,'utf-8',function(err){
        if(err){
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
        console.log("JSON file has been saved.");
    });
    await sleep(1000)
    storeData(hash,name,chargId)
}

function storeData(hash,Username,id){
    let dt = dateTime.create();
    let formatted = dt.format('Y-m-d H:M:S'); 

    let x = {
        'time': formatted,
        'hash':hash
    }
    let JSONdataStore = fs.readFileSync('./JSON/chargerData.json');
    let customerExists = false
    let chargerExists = false
    let oldJSONdata = JSON.parse(JSONdataStore)
    for(let i=0;i<oldJSONdata.Data.length;i++){
        if(Username == Object.keys(oldJSONdata.Data[i])[0]){
            customerExists = true
            for(let j=0;j<oldJSONdata.Data[i][Username].length;j++){
                if(id == Object.keys(oldJSONdata.Data[i][Username][j])[0]){
                    chargerExists = true
                    oldJSONdata.Data[i][Username][j][id].push(x)
                }
            }
        }
        if(!chargerExists && customerExists){
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
    fs.writeFile('./JSON/chargerData.json', newData, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
    });
}

// Generate(1,"Mihir",100000)

module.exports={
    Generate:Generate
}