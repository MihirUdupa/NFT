import React from "react";
import { Text, View, Image, Button, TouchableOpacity } from "react-native";
import styles from "./style";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import Tabs from "../Bottom_Tabs";

const wallet = (props) =>{
    return(
        <View style={styles.background}>
            <View style={styles.header}>
                <View style={styles.burgerMenu}>
                    <Ionicons name="menu" size={25} color="#15f4ee" />
                </View>
                <View style={styles.logo}>
                    <Image style={styles.img} source={require('../../assets/EV_NFT_Video.gif')}/>
                </View>
            </View>
            <View style={styles.address}>
                <Text style={styles.addressText}>0x390c4Fbc1Cb86e6F1670Eea9EC26D49A69C19eAD</Text>
            </View>
            <View style={styles.balance}>
                <View style={styles.balance1}>
                    <Text style={styles.balanceText}>Total Balance</Text>
                    <Text style={styles.balanceText}>$0.00</Text>
                </View>
            </View>
            <View style={styles.menuBoxHeader}>
                <Text style={styles.balanceText}>Attach Wallet</Text>
            </View>
            <View style={styles.menuBox}>
                <View style={styles.firRow}> 
                    <View style={styles.Row}>
                        <Image style={styles.menuImage} source={require('../../assets/MetaMask_Fox.svg.png')}></Image>                        
                        <Text style={styles.menuText}>Meta Mask</Text>   
                    </View>                                        
                </View>
                <View style={styles.secRow}>    
                    <View style={styles.Row}>
                        <Image style={styles.menuImage} source={require('../../assets/wallet-g7a47c6c66_1280.png')}></Image>                       
                        <Text style={styles.menuText}>Other Wallets</Text>                       
                        <AntDesign style={styles.sideIcons} name="caretright" size={25} color="#15f4ee" />
                    </View>                
                </View>
                <View style={styles.thirdRow}> 
                    <View style={styles.Row}>
                        <Ionicons style={styles.startIcon} name="link" size={25} color="#15f4ee"/>                       
                        <Text style={styles.menuText}>Enter Ethereum Address</Text>                        
                        <AntDesign style={styles.endIcons} name="caretright" size={25} color="#15f4ee" />
                    </View>                                          
                </View>
            </View>
            <View style={styles.btnComponent}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Transfer NFT</Text>
                </TouchableOpacity>
            </View>
            <View style={{paddingBottom:70}}></View>
            {/* tabs */}
            <Tabs 
            onPress1={() => props.navigation.navigate("Profile")}
            onPress3={() => props.navigation.navigate("Battery")}
            />
        </View>
    );
}

export default wallet