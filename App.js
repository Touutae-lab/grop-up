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
  const [headerStyle, setHeaderStyle] = React.useState('light-content');

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor='transparent'
        barStyle={headerStyle}
        showHideTransition='fade'
        translucent={true}
        hidden={false} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
        >
          <Stack.Screen
            name="Home"
            //component={Appbar}
            options={{
              title: '',
              headerTintColor: appColors.white,
              headerTransparent: true,
              headerStyle: {
                backgroundColor: appColors.primaryAppColor,
              },
            }}
          >
            {props => <Appbar {...props} />}
          </Stack.Screen>
          <Stack.Screen
            name="CreateEvent"
            options={{
              title: 'Create an event',
            }}
          >
            {props => <CreateEvent {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.primaryAppColor,
  },
});

export default App;
