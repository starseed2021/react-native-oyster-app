import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
  Animated,
  PanResponder
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";

// ========== ORIGINAL IMPORTS (before migration) ==========
// import {
//   StyleSheet,
//   Text,
//   SafeAreaView,
//   TouchableOpacity,
//   View,
//   Image,
// } from "react-native-safe-area-context";
//
// import { Platform } from 'react-native';
// import Swiper from 'react-native-deck-swiper';
// import AppLoading from 'expo-app-loading';
// =========================================================

import colors from "../config/colors";

import { useFonts } from 'expo-font';
import {
  OriginalSurfer_400Regular
} from '@expo-google-fonts/original-surfer'

// ========== ORIGINAL SWIPER COMPONENT (react-native-deck-swiper) ==========
// Note: react-native-deck-swiper is incompatible with RN 0.65+ due to
// deprecated Dimensions.removeEventListener API. Replaced with custom
// PanResponder-based swipeable card below.
//
// const renderSwiper = (fact) => {
//   return (
//     <SafeAreaView style={swipeStyles.container}>
//       <Swiper
//         useViewOverflow={Platform.OS === 'ios'}
//         cards={[fact]}
//         renderCard={(card) => {
//           return (
//             <View style={swipeStyles.card}>
//               <Image style={swipeStyles.imageStyle} source={require('../assets/images/oyster_platter.png')} />
//               <Text style={swipeStyles.headerText}>Oyster Fact</Text>
//               <Text style={swipeStyles.factText}>{card}</Text>
//               <Text style={swipeStyles.swipeText}>Swipe</Text>
//             </View>
//           )
//         }}
//         cardIndex={0}
//         stackSize={1}>
//       </Swiper>
//     </SafeAreaView>
//   )
// }
// ==========================================================================

function SearchScreen({ route, navigation }) {
  const [showCard, setShowCard] = useState(true);
  const [pan] = useState(new Animated.ValueXY());

  // Reset card visibility and position when screen comes into focus
  useFocusEffect(
    useCallback(() => {
      setShowCard(true);
      pan.setValue({ x: 0, y: 0 });
    }, [pan])
  );

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], { useNativeDriver: false }),
    onPanResponderRelease: (e, gesture) => {
      if (Math.abs(gesture.dx) > 120 || Math.abs(gesture.dy) > 120) {
        Animated.timing(pan, {
          toValue: { x: gesture.dx > 0 ? 500 : -500, y: gesture.dy },
          duration: 200,
          useNativeDriver: false
        }).start(() => setShowCard(false));
      } else {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false
        }).start();
      }
    }
  });

  let [fontsLoaded] = useFonts({
    OriginalSurfer_400Regular
  })

  // ========== ORIGINAL LOADING STATE ==========
  // if (!fontsLoaded) {
  //   return <AppLoading />
  // }
  // ==============================================

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.primary }}>
        <ActivityIndicator size="large" color={colors.secondary} />
      </View>
    );
  }

  const { fact } = route.params;

  const renderFactCard = () => {
    if (!showCard) return null;
    return (
      <View style={swipeStyles.container}>
        <Animated.View
          {...panResponder.panHandlers}
          style={[swipeStyles.card, { transform: [{ translateX: pan.x }, { translateY: pan.y }] }]}
        >
          <Image style={swipeStyles.imageStyle} source={require('../assets/images/oyster_platter.png')} />
          <Text style={swipeStyles.headerText}>Oyster Fact</Text>
          <Text style={swipeStyles.factText}>{fact}</Text>
          <Text style={swipeStyles.swipeText}>Swipe to dismiss</Text>
        </Animated.View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>SEARCH BY REGION</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.push("Locations", {
            region: "Northeast",
          })
        }
      >
        <Text style={styles.buttonText}>Northeast</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.push("Locations", {
            region: "Pacific Northwest",
          })
        }
      >
        <Text style={styles.buttonText}>Pacific Northwest</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.push("Locations", {
            region: "Southeast",
          })
        }
      >
        <Text style={styles.buttonText}>Southeast</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.push("Locations", {
            region: "Southwest",
          })
        }
      >
        <Text style={styles.buttonText}>Southwest</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.push("Locations", {
            region: "West",
          })
        }
      >
        <Text style={styles.buttonText}>West</Text>
      </TouchableOpacity>
      {renderFactCard()}
    </SafeAreaView>
  );
}

const swipeStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(95,158,160,0.85)',
  },
  card: {
    width: '85%',
    borderRadius: 28,
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    paddingVertical: 20,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 28,
    fontFamily: 'OriginalSurfer_400Regular'
  },
  factText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.primary,
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
    fontFamily: 'OriginalSurfer_400Regular'
  },
  swipeText: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 28,
    fontFamily: 'OriginalSurfer_400Regular'
  },
  imageStyle: {
    alignSelf: 'center',
    height: '50%',
    width: "90%",
    resizeMode: 'contain',
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
  },
  button: {
    backgroundColor: colors.secondary,
    width: "70%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.8,
    elevation: 3,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    color: colors.primary,
    fontFamily: 'OriginalSurfer_400Regular'
  },
  headerText: {
    color: colors.secondary,
    fontSize: 32,
    fontWeight: "500",
    marginBottom: 40,
    fontFamily: 'OriginalSurfer_400Regular'
  },
});

export default SearchScreen;
