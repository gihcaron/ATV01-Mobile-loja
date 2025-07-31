import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import Home from './pages/HomePage.js';
import MaisInfo from './pages/SecondPage.js';


const Tab = createBottomTabNavigator(); 
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home"
       component={Home}
       options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

function MaisInfoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MaisInfo" 
      component={MaisInfo}
      options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="MaisInfo" component={MaisInfoStack} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}


