import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

//import { CreateEvent } from './CreateEvent.js';
import { Feed } from './Feed';
import { appColors } from './../ColorTemplate.js';

//function Feed() {
//    return (
//      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//        <Text>Feed!</Text>
//      </View>
//    );
//  }
  
  function Profile() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
      </View>
    );
  }
  
  function Notifications() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notifications!</Text>
      </View>
    );
  }
  

export const Appbar = props => {
  
    return (
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: appColors.primaryAppColor,
        }}
      >
        <Tab.Screen
          name="Feed"
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size+5} />
            ),
          }}
        >
          {props => <Feed {...props} systemUIprops={props.systemUIprops} />}
        </Tab.Screen>
        <Tab.Screen
          name="Notifications"
            component={Notifications}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size+5} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size+5} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }



const styles = StyleSheet.create({
    bottoms:{
        flex: 0,
    }
});

//export default function App() {
//    return (
//        <NavigationContainer>
//            <Appbar/>
//        </NavigationContainer>
//    );
//}
