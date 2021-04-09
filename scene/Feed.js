import React, { Component } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';

import { appColors } from './../ColorTemplate.js';
import { Apprender } from './EventRender.js';

export const Feed = props => {
  const goToCreateEvent = () => {
    props.navigation.navigate('CreateEvent');
  };
  return (
    <Button
      title="Create an event"
      onPress={goToCreateEvent}
    />
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