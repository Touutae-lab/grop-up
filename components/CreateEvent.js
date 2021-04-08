import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';

export class CreateEvent extends Component {
  constructor(props) {
    super(props);
  }

  //const defaultImgEvent = require('./../assets/sample.jpg');
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.imgEvent}
          source={require('./../assets/sample.jpg')}>
        </ImageBackground>
        <View style={styles.eventDetail}>
          <Text>This is detail 1.</Text>
          <Text>This is detail 2.</Text>
          <Text>This is detail 3.</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  imgEvent: {
    flex: 3,
    resizeMode: 'cover',
    justifyContent: 'center',
    //backgroundColor: 'red',
  },
  eventDetail: {
    flex: 7,
    //backgroundColor: 'green',
  }
});
