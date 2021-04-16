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
  useEffect,
} from 'react-native';

import { Apprender } from './EventRender.js';

export default class Feedevents extends Component {
    constructor() {
      this.state = {
          event: []
      }
    }
    componentDidMount(){
      fetch('http://localhost:5000/event')
      .then(response => response.json())
      .then(json => this.setState({event: json}));
    };
    render() {
      console.log(event)
      let {event} = this.state;
      return (
        event.map((event, i) => {
          return (
            <Apprender
              event={event[i].event}
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