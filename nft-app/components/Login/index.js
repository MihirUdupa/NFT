import React from "react";
import { View, Text, TextInput, Image, Button } from "react-native";
import styles from "./style";
import { Ionicons } from '@expo/vector-icons'; 

const login = (props) =>{
    return(
        <>
            <View style={styles.component}>
                <View style={styles.logo}>
                    <Image style={styles.img} source={require('../../assets/EV_NFT_Video.gif')}/>
                </View>
                <View style={styles.introComponent}>
                    <Text style={styles.intro}>Login</Text>
                    <View >
                        <Text style={styles.subTitle}>Hi, how are you today ?</Text>
                        <Text style={styles.subTitle}>Please login to continue</Text>
                    </View>
                    <View style={styles.textBoxes}>
                        <View style={styles.text1}>
                            <Ionicons name="person" size={25} color="#25f4ee" />
                            <TextInput style={styles.tb1} placeholder="Enter User Name" placeholderTextColor={'#15f4ee'}></TextInput>
                        </View>
                        <View style={styles.text2}>
                            <Ionicons name="lock-closed-outline" size={25} color="#25f4ee" />
                            <TextInput style={styles.tb1} placeholder="Enter Password" placeholderTextColor={'#15f4ee'} secureTextEntry={true}></TextInput>
                        </View>
                    </View>
                    <View style={styles.btnComponent}>
                        <Button title="Login" color="#15f4ee" onPress={() => props.navigation.navigate("Profile")}></Button>
                    </View>
                </View>
            </View>
            <View style={styles.img1}>
                <Image source={require('../../assets/Launch_icons.png')} />
            </View>
        </>
    )
}

export default login;