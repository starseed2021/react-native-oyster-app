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

// IS THIS THE RIGHT SYNTAX???
import oysterData from "../data/new_data.json";


// HERE WILL BE THE SEARCH PAGE
// SEARCH SCREEN COMPONENT
function SearchScreen({ navigation }) {
  // CREATED CONDITIONALS TO UPDATE THE STATE WHEN A SPECIFIC BUTTON IS TAPPED
  const onPressFunction = () => {
    // code to be fired on press
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
        {/* <NorthEastRegion/> */}
        <Text style={styles.buttonText}>Northeast</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        // onPress={() => setPacificNorthWest(!pacificNorthWest)}
        onPress={() =>
          navigation.push("Locations", {
            region: "Pacific Northwest",
          })
        }
      >
        <Text style={styles.buttonText}>Pacific Northwest</Text>
        {/* <PacificNorthWestRegion /> */}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        // onPress={() => setSouthEast(!southEast)}
        onPress={() =>
          navigation.push("Locations", {
            region: "Southeast",
          })
        }
      >
        <Text style={styles.buttonText}>Southeast</Text>
        {/* <SouthEastRegion /> */}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        // onPress={() => setSouthWest(!southWest)}
        onPress={() =>
          navigation.push("Locations", {
            region: "Southwest",
          })
        }
      >
        <Text style={styles.buttonText}>Southwest</Text>
        {/* <SouthWestRegion /> */}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        // onPress={() => setWest(!west)}
        onPress={() =>
          navigation.push("Locations", {
            region: "West",
          })
        }
      >
        <Text style={styles.buttonText}>West</Text>
        {/* <WestRegion /> */}
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
