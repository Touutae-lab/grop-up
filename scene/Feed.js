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
  SafeAreaView,
} from 'react-native';

import { appColors } from './../ColorTemplate.js';
import RenderAPI from './FeedEvents.js';

const screenSize = Dimensions.get('screen');
const windowSize = Dimensions.get('window');

//const GetApi = async () => {
//  try {
//    let response = await fetch(
//      "http://localhost:5000/event"
//    );
//    let json = await response.json();
//    return json.movies;
//  } catch (error) {
//    console.error(error);
//  }
//};



export const Feed = props => {
  const goToCreateEvent = () => {
    props.navigation.navigate('CreateEvent');
  };

  //props.headerStyleSetter('light-content');

  return (
    <View style={styles.container}>
      <View style={styles.container}>
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
      </View>

    <ScrollView 
    horizontal= {true}
    style = {styles.scroll}
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
      <RenderAPI />
    </ScrollView>
    <Button
      style= {styles.Button}
      title="Create an event"
      onPress={goToCreateEvent}
    />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    marginTop: 20,

  },
  scroll: {
    marginTop: windowSize.height * 0.3,
  },
  imgEvent: {
    flex: 4,
    width: '100%',
    height: windowSize.height * 0.3,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  imgEventInner: {
    paddingTop: StatusBar.currentHeight,
    width: '100%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.40)',
  },
  profileImg: {
    width: 100,
    height: 100,
    marginTop: windowSize.height * 0.25,
    marginBottom: 10,
    borderRadius: 50,
  },
  Button: {
    flex: 1,
  }
});
