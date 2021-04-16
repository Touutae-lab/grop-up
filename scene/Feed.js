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
import { Apprender } from './EventRender.js';

const screenSize = Dimensions.get('screen');
const windowSize = Dimensions.get('window');

export const Feed = props => {
  const goToCreateEvent = () => {
    props.navigation.navigate('CreateEvent');
  };

  //props.headerStyleSetter('light-content');

  return (
    <ScrollView style={styles.container}
    >
      {/*onScroll={event => {
        const scrolling = event.nativeEvent.contentOffset.y;
        
        if (scrolling >= windowSize.height * 0.18) {
          props.rootState.set.headerStyle('dark-content');
          props.rootState.set.headerBgColor(appColors.primaryColor);
          props.rootState.set.headerBgHidden(false);
        } else {
          props.rootState.set.headerStyle('light-content');
          props.rootState.set.headerBgColor('transparent');
          props.rootState.set.headerBgHidden(true);
        }
      }}*/}
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
    {[1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50].map(el => (<Text key={el}>test!</Text>))}
    </ScrollView>
  );
};

export class FeedEvents extends Component {
  constructor() {
    super();
    this.state = {
        event: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:5000/event').then(response => response.json()).then(data => this.state({event: data}));
  }

  render() {
    const {event} = this.state;

    return (
      event.map((data, i) => {
        return (
          <Apprender
            event={event[i].event}
            img={event[i].img}
            provider = {event[i].provider}
            time={event[i].time}
            detail = {event[i].detail}
            place = {event[i].place}
            tag = {event[i].tag}
          />
        );
      })
    );
  }
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
