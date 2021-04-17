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
import { set } from 'react-native-reanimated';

import Apprender from './EventRender.js';


async function fetchsomeThing() {
  const response = await fetch('http://192.168.137.1:5000/event', { // This you need to change to your PC IP and change your API ip to host on you IP address
    metode: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin'
  });
  return await response.json();
}
export default class Feedevents extends Component {
    constructor(props) {
      super(props);
      this.state = {
          event: [],
      };
    }
    
    async componentDidMount(){
      fetchsomeThing().then(data => this.setState({event: data}));
      //console.log(this.state);
    };
    render() {
      let event = this.state.event;
      //console.log(event)
      return (
        <>
          {event.map((e, i) => {
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
