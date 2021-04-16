import React, { Component } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  StatusBar,
  Dimensions,
} from 'react-native';

import { appColors } from './../ColorTemplate.js';
import RenderAPI from './EventRender.js';

const screenSize = Dimensions.get('screen');
const windowSize = Dimensions.get('window');

const GetApi = async () => {
  try {
    let response = await fetch(
      "http://localhost:5000/event"
    );
    let json = await response.json();
    return json.movies;
  } catch (error) {
    console.error(error);
  }
};



export const Feed = props => {
  const goToCreateEvent = () => {
    props.navigation.navigate('CreateEvent');
  };

  //props.headerStyleSetter('light-content');

  return (
    <ScrollView style={styles.container}
      onScroll={event => {
        const scrolling = event.nativeEvent.contentOffset.y;
        
        if (scrolling >= windowSize.height * 0.18) {
          props.rootState.set.headerStyle('dark-content');
          props.rootState.set.headerBgColor(appColors.primaryAppColor);
          props.rootState.set.headerBgHidden(false);
        } else {
          props.rootState.set.headerStyle('light-content');
          props.rootState.set.headerBgColor('transparent');
          props.rootState.set.headerBgHidden(true);
        }
      }}
      scrollEventThrottle={64}
    >
      <ImageBackground
        style={styles.imgEvent}
        source={require('./../assets/sample.jpg')}>
        <View style={styles.imgEventInner}>
          <Text style={{color: appColors.white}}>สวัสดี, ศักย์ศิลกาล !</Text>
          <Image style={styles.profileImg}
            source={require('./../assets/profile-sample.png')}
          />
          <Text style={{color: appColors.white,}}>คุณเข้าร่วมกิจกรรมกับเราไปแล้วทั้งหมด n ครั้ง</Text>
        </View>
      </ImageBackground>
    <Button
      title="Create an event"
      onPress={goToCreateEvent}
    />
    <RenderAPI props={GetApi()}/>

    {/* {[1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50].map(el => (<Text key={el}>test!</Text>))} */}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  imgEvent: {
    flex: 4,
    width: '100%',
    height: windowSize.height * 0.30,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  imgEventInner: {
    paddingTop: StatusBar.currentHeight,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.40)',
  },
  profileImg: {
    width: 100,
    height: 100,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 50,
  },
});
