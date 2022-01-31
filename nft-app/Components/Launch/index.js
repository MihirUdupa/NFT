import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";

const launch = () =>{
    return(
        <View>
            <Text style={styles.p}> the launch component works</Text>
            <Image source={require('../../assets/Launch_icons.png')}/>
        </View>
    )
}

export default launch