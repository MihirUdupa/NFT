import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from './style';
import { Ionicons } from '@expo/vector-icons';
import Tabs from '../Bottom_Tabs'

const battery = (props) =>{
    return(
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <View style={styles.menuBar}>
                <Ionicons name="menu" size={25} color="#25f4ee" />
              </View>
              <View style={styles.detailsText}>
                <Text style={styles.headerText}>Jon Doe</Text>
                {/* <Text style={styles.headerText}>0x0000000000</Text> */}
                <Text style={styles.headerText}>22 CC</Text>
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
              <TouchableOpacity style={styles.btns}>
                <Text style={[styles.buttonTextsSelected, styles.btnText]}>Battery</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btns} onPress={() => props.navigation.navigate('ChargerScreen')}>
                <Text style={[styles.buttonTexts, styles.btnText]}>Charger</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Battery Component */}
          <View>
            <View style={styles.body}>
              <View style={styles.batteryComponent}>
                  <View style={styles.headerComponent}>
                    <View style={styles.imgComponent}>
                      <View style={styles.imgBackgroundComponent}>
                        <Image style={styles.img} source={require('../../assets/battery1.png')}></Image>
                      </View>
                    </View>
                    <Text style={styles.batteryHeaderBody}>Battery Purchased</Text>
                  </View>
                  {/* <View style={styles.hrLine}/> */}
                  <View style={styles.bodyComponent}>
                    <View style={styles.bodyDirection}>
                      <Text style={styles.bodyText}>Date &nbsp;</Text>
                      <Text style={styles.bodyText}>20/01/2022</Text>
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
                    <Text style={styles.bodyText}>2</Text>
                  </View>
                  <View style={styles.bodyDirection}>
                    <Text style={styles.bodyText}>NFT Value &nbsp; : &nbsp;</Text>
                    <Text style={styles.bodyText}>0.00 &nbsp;ETH</Text>
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
                  <Text style={styles.cCHeaderBody}>Carbon Credit Details</Text>
                </View>
                <View style={styles.bodyComponent}>
                  <View style={styles.bodyDirection}>
                    <Text style={styles.bodyText}>Total Points &nbsp; : &nbsp;</Text>
                    <Text style={styles.bodyText}>22</Text>
                  </View>
                  <View style={styles.bodyDirection}>
                    <Text style={styles.bodyText}>Total Value &nbsp; : &nbsp;</Text>
                    <Text style={styles.bodyText}>8800</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Tabs onPress1={() => props.navigation.navigate("Profile")} 
                onPress2={() => props.navigation.navigate("Accounts")}
          />
      </View>
    );
}

export default battery;
