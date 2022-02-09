import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Div } from "reactnative-ui-bootstrap";
import styles from './style';
import { Ionicons } from '@expo/vector-icons';

const battery = () =>{
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
              <TouchableOpacity style={styles.btns}>
                <Text style={[styles.buttonTexts, styles.btnText]}>Charger</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Battery Component */}
          <View>
            <View style={styles.body}>
              <View style={styles.batteryComponent}>
                  <View style={styles.batteryPurchaseComponent}>
                    <View style={styles.batteryImage}>
                      <View style={styles.batteryBackground}>
                        <Image style={styles.imageBattery} source={require('../../assets/battery1.png')}></Image>
                      </View>
                    </View>
                    <Text style={styles.purchaseText}>Battery Purchased</Text>
                  </View>
                  {/* <View style={styles.hrLine}/> */}
                  <View style={styles.otherBatteryDetails}>
                    <View>
                      <View style={styles.batteryBody}>
                      <Text style={styles.batteryText}>Date &nbsp;</Text>
                      <Text style={styles.batteryText}>20/01/2022</Text>
                    </View>
                    <View style={styles.batteryBody}>
                      <Text style={styles.batteryText}>Sl.No &nbsp;</Text>
                      <Text style={styles.batteryText}>202105AFRE</Text>
                    </View>
                    <View style={styles.batteryBody}>
                      <Text style={styles.batteryText}>Batch No &nbsp;</Text>
                      <Text style={styles.batteryText}>20210301A</Text>
                    </View>
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
                <View style={styles.nftHeaderComponent}>
                  <View style={styles.nftImageComponent}>
                    <View style={styles.nftImageBackgroundComponent}>
                      <Image style={styles.nftImage} source={require('../../assets/nft_image.png')}/>
                    </View>
                  </View>
                  <Text style={styles.nftHeaderBody}>NFT Details</Text>
                </View>
                {/* <View style={styles.hrLine}/> */}
                <View style={styles.nftBodyComponent}>
                  <View style={styles.nftBody}>
                    <Text style={styles.nftBodyText}>Token ID &nbsp; : &nbsp;</Text>
                    <Text style={styles.nftBodyText}>2</Text>
                  </View>
                  <View style={styles.nftBody}>
                    <Text style={styles.nftBodyText}>NFT Value &nbsp; : &nbsp;</Text>
                    <Text style={styles.nftBodyText}>0.00 &nbsp;ETH</Text>
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
          </View>
      </View>
    );
}

export default battery;
