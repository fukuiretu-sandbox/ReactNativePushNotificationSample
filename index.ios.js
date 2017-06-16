/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
} from 'react-native';
import PushNotification from 'react-native-push-notification';

export default class ReactNativePushNotificationSample extends Component {
  componentDidMount() {
    PushNotification.configure({
      // (required) Called when a remote or local notification is opened or received
      onNotification: function(notification) {
        // console.log( 'NOTIFICATION:', notification );
        Alert.alert(
          notification.title,
          notification.message,
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]
        )
      },
    });
  }

  onLocalNotification(){
    PushNotification.localNotificationSchedule({
      foreground: true,
      title: "title here",
      message: "My Notification Message", // (required)
      date: new Date(Date.now() + (3 * 1000)), // your required time
      number: 0
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Button
          onPress={this.onLocalNotification}
          title="notification"
          color="#841584"
        />
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativePushNotificationSample', () => ReactNativePushNotificationSample);
