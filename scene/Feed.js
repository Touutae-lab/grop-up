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
    <ScrollView style={styles.container}>
      <ImageBackground
        style={styles.imgEvent}
        source={require('./../assets/sample.jpg')}>
        <View style={styles.imgEventInner}>
          <Text style={{color: appColors.white}}>สวัสดี, ศักย์ศิลกาล !</Text>
          {/*<Text>{StatusBar.currentHeight}</Text>*/}
          {/*
          <Image
            source={}
          />
          */}
        </View>
      </ImageBackground>
    <Button
      title="Create an event"
      onPress={goToCreateEvent}
    />
    </ScrollView>
  );
};

export default class FeedEvents extends Component {
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
    height: windowSize.height * 0.275,
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
});
