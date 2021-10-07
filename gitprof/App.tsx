import React from 'react';
import HomePg from './src/Pages/Home/home';
import UserCompleteProfile from './src/Pages/Profile/UserProfile';
import Repos from './src/Pages/Repos';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ContextProvider } from './src/context/context';
import { useFonts } from '@expo-google-fonts/poppins';
import { Comfortaa_500Medium, Comfortaa_700Bold } from '@expo-google-fonts/comfortaa'
import AppLoading from 'expo-app-loading';


const Stack = createStackNavigator()


export default function App() {

  const [fontsLoaded] = useFonts({
    Comfortaa_700Bold,
    Comfortaa_500Medium
  })

  if (!fontsLoaded) {
    return <AppLoading/>
  }

  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName = 'Home'>
      
            <Stack.Screen name = 'Home' component = {HomePg} options = {{headerShown: false}}/>
            <Stack.Screen name = 'Profile' component = {UserCompleteProfile}/>
            <Stack.Screen name = 'Repos' component = {Repos}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
    
  )
}
