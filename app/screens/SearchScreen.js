import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";

import colors from "../config/colors";



// HERE WILL BE THE SEARCH PAGE
// SEARCH SCREEN COMPONENT
function SearchScreen({ navigation }) {
  const onPressFunction = () => {
    // code to be fired on press
  };

  return (
    <SafeAreaView style={ styles.container }>
      <Text style={ styles.headerText }>SEARCH BY REGION</Text>

      <TouchableOpacity
        style={ styles.button }
        onPress={() =>
          navigation.push("Locations", {
            region: "Northeast",
          })
        }
      >
        <Text style={ styles.buttonText }>Northeast</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={ styles.button }
        onPress={() =>
          navigation.push("Locations", {
            region: "Pacific Northwest",
          })
        }
      >
        <Text style={ styles.buttonText }>Pacific Northwest</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={ styles.button }
        onPress={() =>
          navigation.push("Locations", {
            region: "Southeast",
          })
        }
      >
        <Text style={ styles.buttonText }>Southeast</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={ styles.button }
        onPress={() =>
          navigation.push("Locations", {
            region: "Southwest",
          })
        }
      >
        <Text style={ styles.buttonText }>Southwest</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={ styles.button }
        onPress={() =>
          navigation.push("Locations", {
            region: "West",
          })
        }
      >
        <Text style={ styles.buttonText }>West</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

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
    fontSize: 15,
    fontWeight: "500",
    color: colors.primary,
  },
  headerText: {
    color: colors.secondary,
    fontSize: 30,
    fontWeight: "400",
    marginBottom: 40,
  },
});

export default SearchScreen;
