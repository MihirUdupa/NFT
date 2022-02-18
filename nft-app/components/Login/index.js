import React from "react";
import { View, Text, TextInput,Dimensions, Image,TouchableOpacity } from "react-native";
import styles from "./style";
import { Ionicons } from '@expo/vector-icons'; 
const {height, width} = Dimensions.get('window');
const login = (props) =>{
    return(
        <View style={styles.body}>
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
                            <Ionicons name="person" size={25} color="#15f4ee" />
                            <TextInput style={styles.tb1} placeholder="Enter User Name" placeholderTextColor={'#15f4ee'}></TextInput>
                        </View>
                        <View style={styles.text2}>
                            <Ionicons name="lock-closed-outline" size={25} color="#15f4ee" />
                            <TextInput style={styles.tb1} placeholder="Enter Password" placeholderTextColor={'#15f4ee'} secureTextEntry={true}></TextInput>
                        </View>
                    </View>
                    
                   
                    <View style={styles.img1}>
                            <Image source={require('../../assets/Launch_icons.png')} />
                    </View>
                    <View style={styles.btnComponent}>
                        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Dashboard")}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                        

                    </View>
                    
                </View>
            </View>
            
        </View>
    )
}

export default login;