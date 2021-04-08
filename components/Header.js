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
      paddingTop: 20,
      paddingBottom: 8,
      backgroundColor: '#ffffff',
      alignItems: 'flex-start'
  },
  headerTitle:{
      color: '#5ac8fa',
      fontSize: 18,
  },
  tinylogo:{
    width: '20%',
    height: '80%',
  }
}
);

export default Header;
