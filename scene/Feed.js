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
