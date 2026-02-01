import React, { useEffect, useCallback, useState } from 'react';
import { View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import IntroScreen from './app/screens/IntroScreen';
import SearchScreen from './app/screens/SearchScreen';
import DetailsScreen from './app/screens/DetailsScreen';
import ProfileScreen from './app/screens/ProfileScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from './app/config/colors';

import * as SplashScreen from 'expo-splash-screen';

// ✅ Gesture Handler
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// ✅ Reanimated must be imported at the top
import 'react-native-reanimated';

// Keep splash screen visible while loading resources
SplashScreen.preventAutoHideAsync();

// CREATE STACK NAVIGATOR
const Stack = createNativeStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Load fonts, data, or other async resources here
        await new Promise(resolve => setTimeout(resolve, 1000)); // demo delay
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    // ✅ Wrap root in GestureHandlerRootView
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="About Us"
            component={IntroScreen}
            options={{
              headerStyle: { backgroundColor: colors.secondary },
              headerTintColor: colors.primary,
            }}
          />
          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{
              headerStyle: { backgroundColor: colors.secondary },
              headerTintColor: colors.primary,
            }}
          />
          <Stack.Screen
            name="Locations"
            component={DetailsScreen}
            options={{
              headerStyle: { backgroundColor: colors.secondary },
              headerTintColor: colors.primary,
            }}
          />
          <Stack.Screen
            name="Oyster Profiles"
            component={ProfileScreen}
            options={{
              headerStyle: { backgroundColor: colors.secondary },
              headerTintColor: colors.primary,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

// ========== ORIGINAL App.js (before migration) ==========
// This version did not include GestureHandlerRootView wrapper,
// SplashScreen handling, or reanimated imports which are required
// for gesture-based animations and proper app lifecycle management.
//















// import React from 'react';
// import WelcomeScreen from './app/screens/WelcomeScreen';
// import IntroScreen from './app/screens/IntroScreen';
// import SearchScreen from './app/screens/SearchScreen';
// import DetailsScreen from './app/screens/DetailsScreen';
// import ProfileScreen from './app/screens/ProfileScreen';



// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import colors from './app/config/colors';


// // CREATE STACK NAVIGATOR
// const Stack = createNativeStackNavigator();




// function App() {

//   return (
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Home">
//           <Stack.Screen name="Home" component={ WelcomeScreen } options={{ headerShown: false }}/>
//           <Stack.Screen name="About Us" component={ IntroScreen } options={{headerStyle: {backgroundColor: colors.secondary}, headerTintColor: colors.primary}} />
//           <Stack.Screen name="Search" component={ SearchScreen } options={{headerStyle: {backgroundColor: colors.secondary}, headerTintColor: colors.primary}}/>
//           <Stack.Screen name="Locations" component={ DetailsScreen } options={{headerStyle: {backgroundColor: colors.secondary}, headerTintColor: colors.primary}}/>
//           <Stack.Screen name="Oyster Profiles" component={ ProfileScreen } options={{headerStyle: {backgroundColor: colors.secondary}, headerTintColor: colors.primary}}/>
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
// }


// export default App;
// ==========================================================


