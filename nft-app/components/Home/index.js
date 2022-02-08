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
                <Text style={styles.headerText}>0x0000000000</Text>
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
          <View style={styles.body}>
            
          </View>
        </View>
    );
}

export default battery;
