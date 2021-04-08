//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Header from './components/Header'
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import { appColors } from './ColorTemplate.js';

import { CreateEvent } from './components/CreateEvent.js'; // for testing purpose
import Appbar from './components/Bottom'

//import { Header } from './components/Header.js';
//import { Bottom } from './components/Bottom.js';

export default function App(props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={appColors.primaryAppColor}
        barStyle='light-content'
        showHideTransition='fade'
        hidden={false} />
        <Header />
      <CreateEvent />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
