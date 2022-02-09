import React from "react";
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import styles from "./style";
import { Div } from "reactnative-ui-bootstrap";

const launch = (props) => {
    return(
        <View style={styles.background}>
            <Div className="align-items-center">
                <View style={styles.logo}>
                    <Image style={styles.logoImage} source={require('../../assets/EV_NFT_Video.gif')} />
                </View>
            </Div>
            <View style={styles.view}>
                <Text style={styles.p}>FIRST EV</Text>
                <Text style={styles.p}>NFT</Text>
            </View>
            <View style={styles.img}>
                <Image source={require('../../assets/Launch_icons.png')} />
            </View>
            <View style={styles.btnComponent}>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Login")}>
                    <Text style={styles.buttonText}>Proceed</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default launch