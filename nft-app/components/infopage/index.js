import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,Button,Picker
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Div } from "react-native-web";
import { TextInput } from 'react-native-web';
import Tabs from "../Bottom_Tabs";
import styles from './style';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
const infopage = (props) =>{}

export default class Infopage extends Component

{
	constructor(){
		super();
		this.state={
			PickerValue:''
			
		}
		
	};
	
  render() {
    return (
      <View style={styles.backcolor}><View style={styles.container}>
            <View style={styles.menuBar}>
                <Ionicons name="menu" size={25} color="#15f4ee" />
            </View>
            <View style={styles.logo}>
                <Image style={styles.img} source={require('../../assets/EV_NFT_Video.gif')} />
            </View>
            <Text style={styles.blurr}>

            </Text>
            {/* <View style={styles.rightbottompane}> */}
            <View style={styles.infobackground}>
                <View style={styles.con}>
                    <Picker style={{ height: 50, width: 150 }}
                        style={styles.co}
                        selectedValue={this.state.PickerValue}
                    >
                        <Picker.Item label="FAQ1" value="this is a para">
                            {/* <View><Text> this is a parara</Text></View> */}
                        </Picker.Item>
                        <Picker.Item label="xxxxx" value="html"></Picker.Item>
                        {/* <Picker.Item label="Carbon Credits" value="javascript"/> */}
                        {/* <Picker.Item label="How do i create the wallet" value="javascript"/> */}
                    </Picker>
                </View>
                <View style={styles.con}>
                    <Picker
                        style={styles.co}
                        selectedValue={this.state.PickerValue}
                    >
                        <Picker.Item label="NFT" value="" />
                        <Picker.Item label="FAQ" value="html" />
                        <Picker.Item label="Carbon Credits" value="javascript" />
                        <Picker.Item label="How do i create the wallet" value="javascript" />
                    </Picker>
                </View>
                <View style={styles.con}>
                    <Picker
                        style={styles.co}
                        selectedValue={this.state.PickerValue}
                    >
                        <Picker.Item label="Carbon Credits" value="" />
                        <Picker.Item label="FAQ" value="html" />
                        <Picker.Item label="Carbon Credits" value="javascript" />
                        <Picker.Item label="How do i create the wallet" value="javascript" />
                    </Picker>
                </View>
                <View style={styles.con}>
                    <Picker
                        style={styles.co}
                        selectedValue={this.state.PickerValue}
                    >
                        <Picker.Item label="How do i create the wallet" value="" />
                        <Picker.Item label="FAQ" value="html" />
                        <Picker.Item label="Carbon Credits" value="javascript" />
                        <Picker.Item label="How do i create the wallet" value="javascript" />
                    </Picker>
                </View>
            </View>



        </View>
        <Tabs style={styles.tab}
                onPress3={() => props.navigation.navigate("Battery")}
                onPress2={() => props.navigation.navigate("Accounts")} /></View>

    );
  }
}

