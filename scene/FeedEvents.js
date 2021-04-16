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

import Apprender from './EventRender.js';

export default class Feedevents extends Component {
    constructor(props) {
      super(props);
      this.state = {
          event: [],
      };
    }
    componentDidMount(){
      fetch('http://localhost:5000/event')
      .then(response => response.json())
      .then(json => this.setState({event: json}));

      //console.log(this.state);
    };
    render() {
      let event = this.state.event;
      //console.log(event)
      return (
        <>
          {event.map((e, i) => {
            console.log(e, i);
          return (
            <Apprender
              key={i}
              event={e.eventname}
              provider = {e.provider}
              time={e.time}
              detail = {e.detail}
              place = {e.place}
              tag = {e.tag}
            />
          );
        })}
        </>
      );
    }
  }
