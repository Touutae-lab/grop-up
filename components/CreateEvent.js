import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';

import { appColors } from './../ColorTemplate.js';



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
          <View style={styles.imgEventInner}>
            <MaterialCommunityIcons
              name="image-plus"
              color={appColors.white}
              size={50} />
            <Text style={{color: appColors.white}}>เพิ่มรูปภาพ</Text>
          </View>
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
//    backgroundColor: '#fff',
  },
  imgEvent: {
    flex: 4,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  imgEventInner: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  eventDetail: {
    flex: 7,
    //backgroundColor: 'green',
  }
});
