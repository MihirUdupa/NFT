import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./style";
// import DropShadow from "react-native-drop-shadow";

const launch = () =>{
    return(
        <>
            <View>
                <View style={styles.logo}>
                    <Image source={require('../../assets/EV_NFT_Video.gif')}/>
                </View>
                <View style={styles.view}>
                    <Text style={styles.p}>FIRST EV</Text>
                    <Text style={styles.p}>NFT</Text>
                </View>
            </View>
            <View style={styles.img}>
                <Image source={require('../../assets/Launch_icons.png')} />
            </View>
            <View style={styles.btnComponent}>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Proceed</Text>
                </Pressable>
            </View>
        </>
    )
}

export default launch