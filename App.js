/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-no-undef */
import Login from './src/login';
import React from 'react';
import {Text, View} from 'react-native';
import Home from './src/home';
import Dashboard from './src/dashboard';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    // eslint-disable-next-line prettier/prettier
    return (
      <AppContainer></AppContainer>
    );
  }
}
const RootStack = createStackNavigator({
  Login: { screen: Login ,
    navigationOptions: {
      header:
        <View >
          <Text>Login</Text>
        </View>
    }},
  Home: { screen: Home ,
    navigationOptions: {
      header:null
    },},
    Dashboard: { screen: Dashboard ,
      navigationOptions: {
        header:
          <View >
            <Text>Dashboard</Text>
          </View>
      }},
  
},
{
    initialRouteName: 'Login',
  });

  const AppContainer = createAppContainer(RootStack);