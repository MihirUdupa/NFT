import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView, Dimensions,
  Text, TouchableOpacity,
  View, Button, Picker, Image
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styles from "./style";
import { Ionicons } from '@expo/vector-icons';
// const {height, width} = Dimensions.get('window');


const dashboard = (props) => {
  let Username = props.navigation.state.params.text
  return (
    <View style={styles.container}>
      <View style={styles.balance}>
        <Image style={styles.manlogo} source={require('../../assets/u1.png')} />
        <View style={styles.btns}>
          {/* <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("infopage")}>
            <Text style={styles.buttonText}>Infopage</Text>
          </TouchableOpacity> */}
        </View>
        <Image style={styles.icon} source={require('../../assets/Logo.png')} />
      </View>
      <View style={styles.lines}></View>

      <ScrollView style={styles.scrollViewStyle}>
        <Text style={styles.p}>Hello User...</Text>
        <View style={styles.flexTopBox}>
          <View style={styles.righttoppane}>
            <TouchableOpacity style={styles.bigbutton} >
              {/* onPress={() => props.navigation.navigate("Battery")} */}
              <View>
                <Image style={styles.ribbon} source={require('../../assets/ribbon.png')} />
              </View>
              <Image style={styles.charger} source={require('../../assets/battery1.jpg')} />
              <Text style={styles.rightdesign}>@ ₹250 Only</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.lefttoppane}>
            <TouchableOpacity style={styles.bigbutton} onPress={() => props.navigation.navigate("Battery",{Username})}>
              <View>
                {/* <Image style={styles.loc} source={require('../../assets/palomax-location.gif')} /> */}
                <Image style={styles.seo} source={require('../../assets/i.png')} />
              </View>
            </TouchableOpacity>
            <Text style={styles.leftdesign}>Track status</Text>
          </View>
        </View>
        <View style={styles.flexBottomBox}>
          <View style={styles.rightbottompane} >
            <View>
              <Image style={styles.bit} source={require('../../assets/met.png')} />
              <Text style={{ color: 'white', left: 60, top: 20 }}>Meta-Mask</Text>
            </View>
          </View>
          <View style={styles.leftbottompane}>
            <View>
              <Image style={styles.bit1} source={require('../../assets/carbon.png')} />
              <Text style={{ color: 'white', left: 40, top: 20 }}>Carbon credits</Text>
            </View>
          </View>
        </View>
        <Text style={styles.side}>✨☆NEWS☆✨</Text>
        <View style={styles.midpane}>
          <ScrollView horizontal={true}>
            <View style={styles.screen1}>
              <View style={styles.s1}>
                <View>
                  <Text style={styles.s1text}>Charger</Text>
                  <Text style={styles.s1text2}>Buy a Charger just </Text>
                  <Text style={styles.s1text2}>at ₹1250 </Text>
                  <TouchableOpacity style={{ backgroundColor: '#000000', top: 20, left: 170, width: 150, borderRadius: 20, height: 40 }} onPress={() => props.navigation.navigate("Profile")}>
                    <Text style={{ color: '#487840', fontSize: 25, left: 30, alignItems: 'center' }}>Buy Now</Text>
                  </TouchableOpacity>
                  <Image style={styles.news} source={require('../../assets/charger2.png')} />
                </View>
              </View>
            </View>

            <View style={styles.screen2}>
              <View style={styles.s2}></View>
              <View>
                <View>
                  <Text style={styles.s2headerText}>Carbon Credit News</Text>
                  <TouchableOpacity styel={styles.screen2Button} >
                    <View>
                      <Text style={styles.s2bodyText}>Many countries worldwide are committing to the global goal of achieving net-zero 
                        emissions by 2050. A crucial element in reaching this goal is for companies around the 
                        world to track and report their carbon and greenhouse gas emissions.  </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <Image style={styles.screen2image} source={require('../../assets/leaf.png')} />
              </View>
            </View>

            <View style={styles.s3}>
              <View>
                <Text style={styles.s3headerText}>NFT News</Text>
                <Text style={styles.s3bodyText}>NFT traders were rocked by an earthquake on Sunday. Opensea, the vast NFT trading ocean, was the center of a new storm
                 in the form of a heist.Valuable NFTs were stolen, including Bored Ape Yacht Club 
                 and Mutant Ape Yacht Club assets.</Text>
                <Image style={styles.screen3image} source={require('../../assets/slide3.png')} />
              </View>
            </View>

          </ScrollView>
        </View>
      </ScrollView>
    </View>
  )
}

export default dashboard;