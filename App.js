//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import { appColors } from './ColorTemplate.js';

import { CreateEvent } from './components/CreateEvent.js'; // for testing purpose
import { Header } from './components/Header.js';
import { Bottom } from './components/Bottom.js';

export default function App(props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={appColors.primaryAppColor}
        barStyle='light-content'
        showHideTransition='fade'
        hidden={false} />
      <CreateEvent />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
