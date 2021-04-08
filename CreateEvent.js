import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';

export function CreateEvent() {
  return (
    <View style={styles.container}>
      <View style={{flex: 3,
                    backgroundColor: 'red',}}>
        <ImageBackground
             source={require('./assets/sample.jpg')}
             style={{flex: 1,
                     resizeMode: "cover",
                     justifyContent: "center",}}>
        </ImageBackground>
      </View>
      <View style={{flex: 7, backgroundColor: 'green',}}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
});
