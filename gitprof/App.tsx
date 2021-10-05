import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import api from './src/api/api';
import HomePg from './src/Pages/Home/home';
import UserCompleteProfile from './src/Pages/Profile/UserProfile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ContextProvider } from './src/context/context';


const Stack = createStackNavigator()

export default function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName = 'Home'>
      
            <Stack.Screen name = 'Home' component = {HomePg}/>
            <Stack.Screen name = 'Profile' component = {UserCompleteProfile}/>
      
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
    
  )
}
