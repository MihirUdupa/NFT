import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { StyleSheet } from 'react-native';

import LaunchScreen from './components/App_Launch/index';
import LoginScreen from './components/Login/index';
import ProfileScreen from './components/Profile/index';
import wallet from './components/Wallet/index';
import Btabs from './components/Bottom_Tabs/index';
import BatteryScreen from './components/Main_Screen/index';
import chargers from './components/Main_Screen/charger';
import home from './components/Home'


import { StatusBar } from 'expo-status-bar';

const AppNavigator = createStackNavigator(
  {
    NFT_App:LaunchScreen,
    Login:LoginScreen,
    BottomTabs:Btabs,
    Profile:ProfileScreen,
    Accounts:wallet,
    Battery:BatteryScreen,
    Home:home,
    ChargerScreen:chargers,
  },
  {
    defaultNavigationOptions:{
      headerStyle:{
        backgroundColor:"#151F28",
      },
      headerTintColor:"#FFF",
      headerTitleAlign:"center",
      animationTypeForReplace:"push",
    },
  }
);

const Navigator = createAppContainer(AppNavigator);

export default function App(){
  return(
    <Navigator style={styles.container}>
      <LaunchScreen/>
      <Btabs/>
      <StatusBar style="light" />
    </Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151F28',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// import { StyleSheet, Text, View } from 'react-native';
// import Launch from './components/Home';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Launch/>
//       {/* <StatusBar style="light" /> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#151F28',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });