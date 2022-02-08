import React, { Component } from "react";
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import styles from "./style";
import { Div } from "reactnative-ui-bootstrap";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

const profile = (props) =>{
    return(
        <View style={styles.component}>
            <View style={styles.header}>
                <View style={styles.burgerMenu}>
                    <Ionicons name="menu" size={25} color="#25f4ee" />
                </View>
                <View style={styles.logo}>
                    <Image style={styles.img} source={require('../../assets/EV_NFT_Video.gif')}/>
                </View>
            </View>
            <View style={styles.userInfoBox}>
                <View>
                    <Image style={styles.user} source={require('../../assets/u1.png')} />
                </View>
                <Text style={styles.userName}>Jon Doe</Text>
            </View>
            <View style={styles.menuBox}>
                <View style={styles.menuBoxItem1}>
                    <Ionicons name="information-circle-outline" size={25} color="#15f4ee" />
                    <TouchableOpacity >
                        <Text style={styles.itemText}>Account Info&nbsp;</Text>
                    </TouchableOpacity>
                    <AntDesign name="caretright" size={25} color="#25f4ee" />
                </View>
                <View style={styles.line}/>
                <View style={styles.menuBoxItem1}>
                    <Ionicons name="card" size={25} color="#25f4ee" />
                    <TouchableOpacity >
                        <Text style={styles.itemText}>Carbon Credit</Text>
                    </TouchableOpacity>
                    <AntDesign name="caretright" size={25} color="#25f4ee" />
                </View>
                <View style={styles.line}/>
                <View style={styles.menuBoxItem1}>
                    <Ionicons name="cart" size={25} color="#25f4ee" />
                    <TouchableOpacity >
                        <Text style={styles.itemText}>EV Purchases</Text>
                    </TouchableOpacity>
                    <AntDesign name="caretright" size={25} color="#25f4ee" />
                </View>
                <View style={styles.line}/>
                <View style={styles.menuBoxItem1}>
                    <Ionicons name="help" size={25} color="#25f4ee" />
                    <TouchableOpacity >
                        <Text style={styles.itemText1}>FAQ</Text>
                    </TouchableOpacity>
                    <AntDesign name="caretright" size={25} color="#25f4ee" />
                </View>
            </View>
            {/* tabs */}
            <View style={styles.component}>
            <View style={styles.bottomTabsComponent}>
                <View style={styles.emptyComponent}>
                    <View style={styles.spacing}>
                        <Div className = {'row'}>
                            <Div className={'col-3 align-items-center'}>
                                <Div className={'col-4 align-items-center'}>
                                    <TouchableOpacity style={styles.circleClass}>
                                        <Ionicons name="home" size={24} color="#15f4ee"/>
                                    </TouchableOpacity>
                                </Div>
                                <Div className="align-items-center">
                                    <Text style={styles.otherTabs}>Home</Text>
                                </Div>
                            </Div>
                            <Div className={'col-3 align-items-center'}>
                                <Div className={'col-4 align-items-center'}>
                                    <TouchableOpacity style={styles.circleClassHighlited}>
                                        <Ionicons name="person" size={24} color="#EEFFFF"/>
                                    </TouchableOpacity>
                                </Div>
                                <Div className="align-items-center">
                                    <Text style={styles.highlitedTabs}>Profile</Text>
                                </Div>
                            </Div>
                            <Div className={'col-3 align-items-center'}>
                                <Div className={'col-4 align-items-center'}>
                                    <TouchableOpacity style={styles.circleClass} onPress={() => props.navigation.navigate('Accounts')} >
                                        <Ionicons name="wallet" size={24} color="#15f4ee"/>
                                    </TouchableOpacity>
                                </Div>
                                <Div className="align-items-center">
                                    <Text style={styles.otherTabs}>Wallet</Text>
                                </Div>
                            </Div>
                            <Div className={'col-3 align-items-center'}>
                                <Div className={'col-4 align-items-center'}>
                                    <TouchableOpacity style={styles.circleClass}>
                                        <Ionicons name="information-circle-outline" size={24} color="#15f4ee"/>
                                    </TouchableOpacity>
                                </Div>
                                <Div className="align-items-center">
                                    <Text style={styles.otherTabs}>Other Info</Text>
                                </Div>
                            </Div>
                        </Div>
                    </View>
                </View>
            </View>
        </View>
        </View>
    )
}

export default profile