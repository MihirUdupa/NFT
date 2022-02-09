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
                    <Ionicons name="menu" size={25} color="#25f4ee" />
                </View>
                <View style={styles.logo}>
                    <Image style={styles.img} source={require('../../assets/EV_NFT_Video.gif')}/>
                </View>
            </View>
            <View style={styles.address}>
                <Text style={styles.addressText}>0x00000000000000000000</Text>
            </View>
            <View style={styles.balance}>
                <Text style={styles.balanceText}>Total Balance</Text>
                <Text style={styles.balanceText}>$0.00</Text>
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
                        <AntDesign name="caretright" size={25} color="#25f4ee" />
                    </View>                
                </View>
                <View style={styles.thirdRow}> 
                    <View style={styles.Row}>
                        <Ionicons name="link" size={25} color="#15f4ee"/>                       
                        <Text style={styles.menuText}>Enter Ethereum Address</Text>                        
                        <AntDesign name="caretright" size={25} color="#25f4ee" />
                    </View>                                          
                </View>
            </View>
            <View style={styles.btn}>
                <Button title={'Transfer NFT'} color={'#15f4ee'}></Button>
            </View>
            <View style={{paddingBottom:150}}></View>
            {/* tabs */}
            <Tabs 
            onPress1={() => props.navigation.navigate("Profile")}
            onPress3={() => props.navigation.navigate("Battery")}
            />
        </View>
    );
}

export default wallet