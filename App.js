import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Header from './components/Header'

export default function App() {
  return (
    <View style={styles.screen}>
        <Header/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
    },
    logo:{
      flex: 1
    }
  }
  );
