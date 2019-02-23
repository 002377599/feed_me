/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, Alert} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class HomeScreen extends Component<Props> {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        {/*This displays the logo*/}
        <View style={styles.logoContainer}>
          <Image
            style = {styles.logo}
            source = {require('C:/Users/Raymond Vu/Documents/GitHub/feed_me/Vu_Jennifer/feed_me_app/feedMElogo.png')}
            resizeMode="contain"
          />
        </View>
      {/*This displays the user login button*/}
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              onPress={this._onPressButton}
              title="User Login"
              color="#841584"
              accessibilityLabel="User Login"
            />
          </View>
        {/*This displays the nearby food trucks button*/}
          <View style={styles.button}>
            <Button
              onPress={this._onPressButton}
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

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
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
  instructions: {
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

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
