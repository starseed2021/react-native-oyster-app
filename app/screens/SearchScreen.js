import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

import Swiper from 'react-native-deck-swiper';

import colors from "../config/colors";

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import {
  OriginalSurfer_400Regular
} from '@expo-google-fonts/original-surfer'


const renderSwiper = (fact) => {
  return (
    <SafeAreaView style={swipeStyles.container}>
      <Swiper
        cards={[fact]}
        renderCard={(card) => {
          return (
            <View style={swipeStyles.card}>
              <Image style={swipeStyles.imageStyle} source={require('../assets/images/oyster_platter.png')} />
              <Text style={swipeStyles.headerText}>Oyster Fact</Text>
              <Text style={swipeStyles.factText}>{card}</Text>
              <Text style={swipeStyles.swipeText}>Swipe</Text>
            </View>
          )
        }}
        cardIndex={0}
        stackSize={1}>
      </Swiper>
    </SafeAreaView>
  )
}

function SearchScreen({ route, navigation }) {
  let [fontsLoaded, error] = useFonts({
    OriginalSurfer_400Regular
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const { fact } = route.params;

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
      {renderSwiper(fact)}
    </SafeAreaView>
  );
}


const swipeStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  card: {
    flex: .85,
    borderRadius: 28,
    justifyContent: 'center',
    backgroundColor: colors.secondary,
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
    alignItems: 'center',
    height: '60%',
    width: "100%",
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
