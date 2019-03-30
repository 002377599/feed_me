import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, Alert} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props>{
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
              title="User Login"
              color="#841584"
              accessibilityLabel="User Login"
              onPress={() =>
                this.props.navigation.navigate('UserLogin')}
            />
          </View>

          <View style={styles.button}>
            <Button
              onPress={() =>
                this.props.navigation.navigate('NearbyFoodTrucks')}
              title="Nearby Food Trucks"
              color="#841584"
              accessibilityLabel="Nearby Food Trucks"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 250,
  },
  button: {
    width: 100,
    height: 65,
    margin: 15,
  },
  text: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 30,
  },
  logo: {
    flex: 1,
    height: 80,
    width:160,
    margin: 5,
    marginBottom: 10,
  },
});
