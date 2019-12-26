/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, TextInput, TouchableOpacity,Button} from 'react-native';
import styles from '../utility/style';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator,HeaderBackButton } from 'react-navigation-stack';

class Home extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('Title', 'Home'),
          headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
        };
      };
 constructor() {
      super();
    }
    render() {
      // eslint-disable-next-line prettier/prettier
      return (
        <View>

        <Text>{this.props.navigation.getParam('item','')}</Text>
        <View >
                                    <TouchableOpacity >
                                        <Button title="Home"
                                        onPress={() => {
                                        // Keyboard.dismiss()
                                        // this.props.callbackFunction();
                                        this.props.navigation.navigate('Login');

                                    }} >Go back</Button>
                                    </TouchableOpacity>
                                </View>



</View>

      );
    }
  }
//   export default Home;
const Root = createStackNavigator(
    {
      Home: Home,
    },
    {
      initialRouteName: "Home"
    }
  );
  
  export default createAppContainer(Root);