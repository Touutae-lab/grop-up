import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

// import logo from './assets/icon.png';
const Header = props => {
  return (
    <View style={styles.header}>
       <Text style = {styles.headerTitle}>{props.title}</Text>
       <Image
         style = {styles.tinylogo}
         source = {require('../assets/logo.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  header:{
      width: '100%',
      height: 90,
      paddingTop: 36,
      backgroundColor: '#ffffff',
      alignItems: 'flex-start'
  },
  headerTitle:{
      color: '#5ac8fa',
      fontSize: 18,
  },
  tinylogo:{
    width: 100,
    height: 58,
  }
}
);

export default Header;
