import React, { Component } from "react";
import { View, Text, Image, Button, TouchableOpacity,ScrollView } from "react-native";
import styles from "./style";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import Tabs from "../Bottom_Tabs";

const profile = (props) =>{
    const currency  = props.navigation.state.params.data.totalVal
    const Username = props.navigation.state.params.data.Username
    let data = {
        Username:Username,
        totalVal:currency
    }
    return(
        <View style={styles.component}>
            <View style={styles.header}>
                <View style={styles.burgerMenu}>
                    <Ionicons name="menu" size={25} color="#15f4ee" />
                </View>
                <View style={styles.logo}>
                    {/* <Image style={styles.img} source={require('../../assets/EV_NFT_Video.gif')}/> */}
                </View>
            </View>
            <View style={styles.userInfoBox}>
                <View>
                    <Image style={styles.user} source={require('../../assets/u1.png')} />
                </View>
                <View style={{paddingBottom:75}}>
                    <Text style={styles.userName}>{Username}</Text>
                </View>
            </View>
            <View style={styles.menuBox}>
                <View style={styles.item}>
                    <View style={styles.menuBoxItem1}>
                        <Ionicons name="information-circle-outline" size={25} color="#15f4ee" />
                        <TouchableOpacity>
                            <Text style={styles.itemText}>Account Info&nbsp;</Text>
                        </TouchableOpacity>
                        <AntDesign name="caretright" size={25} color="#15f4ee" />
                    </View>
                    
                    <View style={styles.line}/>
                    </View>
                    <View style={styles.item}>
                    <View style={styles.menuBoxItem1}>
                        <Ionicons name="card" size={25} color="#15f4ee" />
                        <TouchableOpacity >
                            <Text style={styles.itemText}>Carbon Credit</Text>
                        </TouchableOpacity>
                        <AntDesign name="caretright" size={25} color="#15f4ee" />
                    </View>
                    <View style={styles.line}/>
                    </View>
                    <View style={styles.item}>
                    <View style={styles.menuBoxItem1}>
                        <Ionicons name="cart" size={25} color="#15f4ee" />
                        <TouchableOpacity >
                            <Text style={styles.itemText}>EV Purchases</Text>
                        </TouchableOpacity>
                        <AntDesign name="caretright" size={25} color="#15f4ee" />
                    </View>
                    <View style={styles.line}/>
                    </View><View style={styles.item}>
                    <View style={styles.menuBoxItem1}>
                        <Ionicons name="help" size={25} color="#15f4ee" />
                        <TouchableOpacity >
                            <Text style={styles.itemText1}>FAQ</Text>
                        </TouchableOpacity>
                        <AntDesign name="caretright" size={25} color="#15f4ee" />
                    </View>
                </View>
            </View>
            <View>
                <View style={styles.logoutButtonView}>
                    <TouchableOpacity style={styles.logoutButton} onPress={() => props.navigation.navigate("Login")}>
                        <Ionicons name="log-out-outline" size={25} color="#15f4ee"/>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <View style={{paddingTop:51}}>
                {/* tabs */}
                    <Tabs 
                    onPress4={() => props.navigation.navigate("infopage",{data})}
                    onPress3={() => props.navigation.navigate("Battery",{Username})} 
                    onPress2={() => props.navigation.navigate("Accounts",{data})}
                    
                    />
                </View>
            </View>
        </View>
    )
}

export default profile