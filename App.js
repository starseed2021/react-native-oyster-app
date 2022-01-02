import React from 'react';
import { StatusBar } from 'expo-status-bar';
import WelcomeScreen from './app/screens/WelcomeScreen';
import IntroScreen from './app/screens/IntroScreen';
import SearchScreen from './app/screens/SearchScreen';
import OysterScreen from './app/screens/OysterScreen';
import DetailsScreen from './app/screens/DetailsScreen';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from './app/config/colors';




// CREATE STACK NAVIGATOR
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Home" component={ WelcomeScreen } options={{ headerShown: false }}/>
        <Stack.Screen name="About Us" component={ IntroScreen } options={{headerStyle: {backgroundColor: colors.secondary}, headerTintColor: colors.primary}} />
        <Stack.Screen name="Search" component={ SearchScreen } options={{headerStyle: {backgroundColor: colors.secondary}, headerTintColor: colors.primary}}/>
        <Stack.Screen name="Oyster List" component={ OysterScreen } options={{headerStyle: {backgroundColor: colors.secondary}, headerTintColor: colors.primary}}/>
        <Stack.Screen name="Oyster Profile" component={ DetailsScreen } options={{headerStyle: {backgroundColor: colors.secondary}, headerTintColor: colors.primary}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;






