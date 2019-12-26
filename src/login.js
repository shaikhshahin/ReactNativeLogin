/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, TextInput, TouchableOpacity,Button} from 'react-native';
import styles from '../utility/style';
import Toast, {DURATION} from 'react-native-easy-toast';

export default class Login extends React.Component {
 constructor(props) {
      super(props);
      this.state = {
          username:'',
          password:'',
      }
    }
    callbackFunction = () => {
        this.refs.toast.show('back to login');
        // this.props.navigation.dispatch(redirectDashboard);
      };

    validateFields=()=>{
        if(this.state.username != ''){
            if(this.state.password != ''){

              //console.log("Username Password is there");
              this.props.navigation.navigate('Home', {item:this.state.username},);
             }
             this.refs.toast.show('Password should not be empty');

        }else
        this.refs.toast.show('Username should not be empty');

        //console.log("Username Password is not there");

    }
    render() {
      // eslint-disable-next-line prettier/prettier
      return (
          <View style={{flexDirection:'column'}}>
                                          <Toast ref="toast"/>

          <Text>Login</Text>
          <View>
          <TextInput placeholder="username" style={styles.textInputStyle}
          onChangeText={(text)=>
            this.setState({username:text})
          }/>
          <View>
          <TextInput placeholder="password" style={styles.textInputStyle} 
          onChangeText={(text)=>
            this.setState({password:text})
          }/>

          </View>
          </View>
          <View >
                                    <TouchableOpacity >
                                        <Button title="Login"
                                        
                                        onPress={() => {
                                        // Keyboard.dismiss()
                                        this.validateFields();
                                    }} >Login</Button>
                                    </TouchableOpacity>
                                </View>

          </View>
      );
    }
}


//   const styles = StyleSheet.create({


//     textInputStyle: {
//         borderColor:'black', borderWidth:1, margin:10
//     },
// });
