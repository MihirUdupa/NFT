import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import batteryData from './Battery_data';
import { FlatList } from 'react-native';
import Battery from '../Main_Screen';
import Tabs from '../Bottom_Tabs'

const home = (props) =>{
    return(
        <View style={styles.container}>
            <FlatList 
                data={batteryData}
                renderItem={({item}) => <Battery battery={item}/>}
            />
        </View>
    )
}

export default home;