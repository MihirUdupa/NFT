import React, {Component} from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import styles from "./style";
import { Div } from "reactnative-ui-bootstrap";
import { Ionicons } from '@expo/vector-icons'; 

const tabs = (props) => {
    const onPress1 = props.onPress1;
    const onPress2 = props.onPress2;
    const onPress3 = props.onPress3;
    const onPress4 = props.onPress4;
    
    return (
        <View style={styles.component}>
            <View style={styles.bottomTabsComponent}>
                <View style={styles.emptyComponent}>
                    <View style={styles.spacing}>
                        <Div className = {'row'}>
                            <Div className={'col-3 align-items-center'}>
                                <Div className={'col-4 align-items-center'}>
                                    <TouchableOpacity style={styles.circleClass}>
                                        <Ionicons name="home" size={24} color="#15f4ee" onPress={() => onPress3()}/>
                                    </TouchableOpacity>
                                </Div>
                                <Div className="align-items-center">
                                    <Text style={styles.otherTabs}>Home</Text>
                                </Div>
                            </Div>
                            <Div className={'col-3 align-items-center'}>
                                <Div className={'col-4 align-items-center'}>
                                    <TouchableOpacity style={styles.circleClass}>
                                        <Ionicons name="person" size={24} color="#15f4ee" onPress={() => onPress1()}/>
                                    </TouchableOpacity>
                                </Div>
                                <Div className="align-items-center">
                                    <Text style={styles.otherTabs}>Profile</Text>
                                </Div>
                            </Div>
                            <Div className={'col-3 align-items-center'}>
                                <Div className={'col-4 align-items-center'}>
                                    <TouchableOpacity style={styles.circleClass} >
                                        <Ionicons name="wallet" size={24} color="#15f4ee" onPress={() => onPress2()}/>
                                    </TouchableOpacity>
                                </Div>
                                <Div className="align-items-center">
                                    <Text style={styles.otherTabs}>Wallet</Text>
                                </Div>
                            </Div>
                            <Div className={'col-3 align-items-center'}>
                                <Div className={'col-4 align-items-center'}>
                                    <TouchableOpacity style={styles.circleClass}>
                                        <Ionicons name="information-circle-outline" size={24} color="#15f4ee" onPress={() => onPress4()}/>
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