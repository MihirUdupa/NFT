import React, {useState, useEffect} from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from './style';
import { Ionicons } from '@expo/vector-icons';
import Tabs from '../Bottom_Tabs';

const charger = (props) =>{
  let Username = props.navigation.state.params.Username;
  const [cc,setCC] = useState("");
  const [charger_id,setBat_Id] = useState("");
  const [nft_id,setNft_Id] = useState("");
  const [nft_cost,setNft_Cost] = useState("");
  const [trxn_id,setTrxn_Id] = useState("");

  useEffect(() => {
    const url = `http://192.168.0.110:5000/getChargerData?name=${Username}`;
    const fetchData = async() =>{
      try{
        const response = await fetch(url);
        const json = await response.json()
        setCC(json.data[0].CCredit)
        setBat_Id(json.data[0].battery_id)
        setNft_Id(json.data[0].nft_id)
        setNft_Cost(json.data[0].nft_cost)
        setTrxn_Id(json.data[0].transaction_id)

      }catch(error){
        console.log("error", error);
      }
    }
    fetchData();
  }, [])

  let data = {
    Username:Username,
    totalVal:cc,
    page:"Battery"
  }
    return(
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <View style={styles.menuBar}>
                <Ionicons name="menu" size={25} color="#15f4ee" />
              </View>
              <View style={styles.detailsText}>
                <Text style={styles.headerText}>{Username}</Text>
                <Text style={styles.headerText}>{cc}&nbsp;CP</Text>
              </View>
              <View style={styles.userImage}>
                <Image style={styles.image} source={require('../../assets/u1.png')}></Image>
              </View>
          </View>    
          <View style={styles.hrLine}/>
          <View style={styles.subHeaderContent}>
            <Text style={styles.subHeader}>NFT's Owned</Text>
          </View>
          <View style={styles.buttonsMain}>
            <View style={styles.buttonsSub}>
              <TouchableOpacity style={styles.btns} onPress={() => props.navigation.navigate('Battery',{Username})}>
                <Text style={[styles.buttonTexts, styles.btnText]}>Battery</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btns}>
                <Text style={[styles.buttonTextsSelected, styles.btnText]}>Charger</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Charger Component */}
          <View style={{paddingBottom:40}}>
            <View style={styles.body}>
              <View style={styles.batteryComponent}>
                  <View style={styles.headerComponent}>
                    <View style={styles.imgComponent}>
                      <View style={styles.imgBackgroundComponent}>
                        <Image style={styles.img} source={require('../../assets/electric-station.png')}></Image>
                      </View>
                    </View>
                    <Text style={styles.batteryHeaderBody}>Charger Purchased</Text>
                  </View>
                  {/* <View style={styles.hrLine}/> */}
                  <View style={styles.bodyComponent}>
                    <View style={styles.bodyDirection}>
                      <Text style={styles.bodyText}>Charger Id &nbsp;</Text>
                      <Text style={styles.bodyText}>{charger_id}</Text>
                    </View>
                    <View style={styles.bodyDirection}>
                      <Text style={styles.bodyText}>Sl.No &nbsp;</Text>
                      <Text style={styles.bodyText}>202105AFRE</Text>
                    </View>
                    <View style={styles.bodyDirection}>
                      <Text style={styles.bodyText}>Batch No &nbsp;</Text>
                      <Text style={styles.bodyText}>20210301A</Text>
                    </View>
                </View>
              </View>
            </View>
            {/* Till Here */}
            <Image style={styles.rightArrow1} source={require('../../assets/componen_assets/RightArrowDown.png')}/>
            <View style={styles.batteryCircle}>
              <Image style={styles.smallBattery} source={require('../../assets/accumulator.png')}/>
            </View>
            <Image style={styles.rightArrow2} source={require('../../assets/componen_assets/RightArrowDown2.png')}/>
            {/* NFT Details */}
            <View style={styles.body}>
              <View style={styles.nftComponent}>
                <View style={styles.headerComponent}>
                  <View style={styles.imgComponent}>
                    <View style={styles.imgBackgroundComponent}>
                      <Image style={styles.img} source={require('../../assets/nft_image.png')}/>
                    </View>
                  </View>
                  <Text style={styles.nftHeaderBody}>NFT Details</Text>
                </View>
                {/* <View style={styles.hrLine}/> */}
                <View style={styles.bodyComponent}>
                  <View style={styles.bodyDirection}>
                    <Text style={styles.bodyText}>Token ID &nbsp; : &nbsp;</Text>
                    <Text style={styles.bodyText}>{nft_id}</Text>
                  </View>
                  <View style={styles.bodyDirection}>
                    <Text style={styles.bodyText}>NFT Value &nbsp; : &nbsp;</Text>
                    <Text style={styles.bodyText}>{nft_cost} &nbsp;ETH</Text>
                  </View>
                </View>
              </View>
            </View>
            {/* Till Here */}
            <Image style={styles.leftArrow1} source={require('../../assets/componen_assets/LeftArrowDown.png')}/>
            <View>
              <Image style={styles.carbon} source={require('../../assets/carbon-dioxide.png')}/>
            </View>
            <Image style={styles.leftArrow2} source={require('../../assets/componen_assets/LeftArrowDown2.png')}/>
            {/* Carbon Credit Details */}
            <View style={styles.body}>
              <View style={styles.cCComponent}>
                <View style={styles.headerComponent}>
                  <View style={styles.imgComponent}>
                    <View style={styles.imgBackgroundComponent}>
                      <Image style={styles.img} source={require('../../assets/icons8-get-money-100.png')}/>
                    </View>
                  </View>
                  <Text style={styles.cCHeaderBody}>Carbon Points Details</Text>
                </View>
                <View style={styles.bodyComponent}>
                  <View style={styles.bodyDirection}>
                    <Text style={styles.bodyText}>Total Points &nbsp; : &nbsp;</Text>
                    <Text style={styles.bodyText}>{cc}</Text>
                  </View>
                  <View style={styles.bodyDirection}>
                    <Text style={styles.bodyText}>Total Value &nbsp; : &nbsp;</Text>
                    <Text style={styles.bodyText}>{'\u20B9'} &nbsp; {cc*100}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Tabs style={styles.bottomTabs}
                onPress4={() => props.navigation.navigate("infopage",{data})}
                onPress1={() => props.navigation.navigate("Profile",{data})} 
                onPress2={() => props.navigation.navigate("Accounts",{data})}
          />
      </View>
    );
}

export default charger;