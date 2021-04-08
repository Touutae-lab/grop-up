import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Header from './components/Header'
import Appbar from './components/Bottom'

export default function App() {
  return (
    <View style={styles.screen}>
        <Header/>
        <Appbar/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignContent: 'center'
    },
    logo:{
      flex: 1
    }
  }
  );
