import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";

const launch = () =>{
    return(
        <>
            <View>
                <View style={styles.view}>
                    <Text style={styles.p}>FIRST EV</Text>
                    <Text style={styles.p}>NFT</Text>
                </View>
            </View>
            <View style={styles.img}>
                <Image source={require('../../assets/Launch_icons.png')} />
            </View>
        </>
    )
}

export default launch