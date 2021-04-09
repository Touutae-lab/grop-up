//import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
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
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { appColors } from './ColorTemplate';
import { CreateEvent } from './scene/CreateEvent'; // for testing purpose
import { Appbar } from './scene/Home'

//import { Header } from './components/Header';
//import { Bottom } from './components/Bottom';

const Stack = createStackNavigator();

const App = props => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={appColors.primaryAppColor}
        barStyle='dark-content'
        showHideTransition='fade'
        hidden={false} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Appbar}
            options={{ title: 'Group Up' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
