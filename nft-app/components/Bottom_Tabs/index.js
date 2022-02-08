import React, {Component} from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import styles from "./style";
import { Div } from "reactnative-ui-bootstrap";
import { Ionicons } from '@expo/vector-icons'; 
import wallet from "../Wallet";

const tabs = (props) => {
    return (
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
                                    <TouchableOpacity style={styles.circleClass} >
                                        <Ionicons name="wallet" size={24} color="#15f4ee" onPress={() => Component={wallet}}/>
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
    );
}

export default tabs;