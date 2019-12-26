/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator,HeaderBackButton } from 'react-navigation-stack';

 class Dashboard extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('Title', 'Add Bin Details'),
          headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
        };
      };
 constructor() {
      super();
    }
    render() {
      // eslint-disable-next-line prettier/prettier
      return (


        <Text>Dashboard</Text>

      );
    }
  }
  const Root = createStackNavigator(
    {
      Home: Dashboard
    },
    {
      initialRouteName: "Home"
    }
  );
  
  export default createAppContainer(Root);