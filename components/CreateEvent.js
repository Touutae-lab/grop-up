import { MaterialCommunityIcons } from '@expo/vector-icons';
import AutoHeightImage from 'react-native-auto-height-image';
import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';

import { appColors } from './../ColorTemplate.js';
import {
  InputBox,
  Label,
  InputTextBox,
} from './Form.js';

const screenSize = Dimensions.get('screen');
const windowSize = Dimensions.get('window');

export class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.setState({
      eventName: '',
      eventDate: '',
      providerEmail: '',
      eventDescription: '',
      eventLocation: '',
      tag: '',
    });
  }

  //const defaultImgEvent = require('./../assets/sample.jpg');
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{alignItems: 'center',}}>
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
        </View>
        <View
          style={styles.eventForm}>
          <InputBox>
            <Label>ชื่อกิจกรรม</Label>
            <InputTextBox
              onChangeText={val => this.setState({eventName: val})}>เช่น อยู่เหงา ๆ มาเดินเที่ยวกันที่อ่างแก้ว</InputTextBox>
          </InputBox>
          <InputBox>
            <Label>วันที่จัดกิจกรรม</Label>
            <InputTextBox
              onChangeText={val => this.setState({eventDate: val})}></InputTextBox>
          </InputBox>
          <InputBox>
            <Label>E-mail</Label>
            <InputTextBox
              onChangeText={val => this.setState({providerEmail: val})}
              autoCompleteType="email">
              example@lovely.com
            </InputTextBox>
          </InputBox>
          <InputBox>
            <Label>คำอธิบายเกี่ยวกับกิจกรรม</Label>
            <InputTextBox
              onChangeText={val => this.setState({providerEmail: val})}
              longText={true}>
              กรุณาอธิบายอย่างน้อย 50 อักษรให้ผู้อื่นเข้าใจในรายละเอียดคร่าว ๆ ของกิจกรรมนี้
            </InputTextBox>
          </InputBox>
          <InputBox>
            <Label>สถานที่</Label>
            <InputTextBox
              onChangeText={val => this.setState({eventLocation: val})}>เช่น มหาวิทยาลัยเชียงใหม่</InputTextBox>
          </InputBox>
          <AutoHeightImage
            source={require('./../assets/sample-maps.png')}
            width={windowSize.width * 0.9}
          />
        </View>
      </ScrollView>
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
    width: windowSize.width * 0.9,
    height: windowSize.height * 0.32,
    marginTop: 20,
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
  eventForm: {
    //backgroundColor: 'green',
    padding: 25,
  }
});
