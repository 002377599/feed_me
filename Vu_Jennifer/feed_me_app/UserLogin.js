import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image } from 'react-native';

export default class UserLogin extends React.Component {
  constructor(){
    super();
    this.state ={statusLogin:false, statusRegister:false, email:"", password:""}

  }
  ShowLogin = () =>{
   if(this.state.statusLogin == true)
   {
     this.setState({statusLogin: false})
   }
   else if(this.state.statusRegister == false)
   {
     this.setState({statusLogin: true})
   }
  }
  ShowRegister = () =>{
   if(this.state.statusRegister == true)
   {
     this.setState({statusRegister: false})
   }
   else if(this.state.statusLogin == false)
   {
     this.setState({statusRegister: true})
   }
  }
 handleEmail = (text) => {this.setState({ email: text })}
 handlePassword = (text) => {this.setState({ password: text })}
 login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)}
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style = {styles.logo}
            source = {require('C:/Users/Raymond Vu/Documents/GitHub/feed_me/Vu_Jennifer/feed_me_app/feedMElogo.png')}
            resizeMode="contain"
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Login"
              onPress={() =>
                this.ShowLogin()
              }
            />
          </View>
          <View style={styles.button}>
            <Button
              title="New User"
              onPress={() =>
                this.ShowRegister()
              }
            />
          </View>
        </View>
        <View style={styles.container2}>
          <View style={styles.container2}>
          {
            this.state.statusLogin ? <View styles= {styles.container}>
              <TextInput style = {styles.input}
                   underlineColorAndroid = "transparent"
                   placeholder = "Email"
                   placeholderTextColor = "#9a73ef"
                   autoCapitalize = "none"
                   onChangeText = {this.handleEmail}
              />
              <TextInput style = {styles.input}
                   underlineColorAndroid = "transparent"
                   placeholder = "Password"
                   placeholderTextColor = "#9a73ef"
                   autoCapitalize = "none"
                   onChangeText = {this.handlePassword}
               />
               <TouchableOpacity
                        style = {styles.submitButton}
                        onPress = {
                           () => this.props.navigation.navigate('NearbyFoodTrucks')
                        }>
                        <Text style = {styles.submitButtonText}> Submit </Text>
               </TouchableOpacity>
             </View>: null
          }
          </View>
          <View style={styles.container3}>
          {
            this.state.statusRegister ? <View styles= {styles.container}>
              <TextInput style = {styles.input}
                   underlineColorAndroid = "transparent"
                   placeholder = "Email"
                   placeholderTextColor = "#9a73ef"
                   autoCapitalize = "none"
                   onChangeText = {this.handleEmail}
              />
              <TextInput style = {styles.input}
                   underlineColorAndroid = "transparent"
                   placeholder = "Password"
                   placeholderTextColor = "#9a73ef"
                   autoCapitalize = "none"
                   onChangeText = {this.handlePassword}
               />
               <TouchableOpacity
                        style = {styles.submitButton}
                        onPress = {
                           () => this.props.navigation.navigate('Home')
                        }>
                        <Text style = {styles.submitButtonText}> Submit </Text>
               </TouchableOpacity>
             </View>: null
          }
          </View>
        </View>
        <Button
          title="Back to home"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 2,
    margin: 5,
    marginBottom: 15,
  },
  container3: {
     flex: 2,
     margin: 5,
     marginBottom: 400,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 150,
  },
  button: {
    width: 100,
    height: 65,
    margin: 15,
  },
  button2: {
    flex: 1,
    height: 80,
    width:160,
    margin: 40,
    marginBottom: 15,
  },
  text: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 30,
  },
  input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
});
