import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { StyleSheet } from 'react-native';

import LaunchScreen from './components/App_Launch/index';
import LoginScreen from './components/Login/index';
import ProfileScreen from './components/Profile/index';

const AppNavigator = createStackNavigator(
  {
    Launch:LaunchScreen,
    Login:LoginScreen,
    Profile:ProfileScreen,
  },
  {
    defaultNavigationOptions:{
      headerStyle:{
        backgroundColor:"#151F28",
      },
      headerTintColor:"#FFF",
    },
  }
);

const Navigator = createAppContainer(AppNavigator);

export default function App(){
  return(
    <Navigator style={styles.container}>
      <LaunchScreen/>
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