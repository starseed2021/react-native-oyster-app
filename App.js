import React from 'react';
import { StatusBar } from 'expo-status-bar';
import WelcomeScreen from './app/screens/WelcomeScreen';
import IntroScreen from './app/screens/IntroScreen';
import OysterScreen from './app/screens/OysterScreen';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




// CREATE STACK NAVIGATOR
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={ WelcomeScreen } options={{ headerShown: false }}/>
        <Stack.Screen name="IntroScreen" component={ IntroScreen } options={{ headerShown: false }}/>
        <Stack.Screen name="OysterScreen" component={ OysterScreen } options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;






