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

// DUMMY DATA
const dummyData = [
  {
    id: 1,
    region: "Northeast",
    data: ["NY", "CAN", "MA", "ME", "NJ"],
  },
  {
    id: 2,
    region: "Pacific Northwest",
    data: ["CAN", "WA", "AK"],
  },
  {
    id: 3,
    region: "Southeast",
    data: ["VA", "FL"],
  },
  {
    id: 4,
    region: "Southwest",
    data: ["MEX"],
  },
  {
    id: 5,
    region: "West",
    data: ["CA"],
  },
];

// HERE WILL BE THE SEARCH PAGE
// SEARCH SCREEN COMPONENT
function SearchScreen({ route, navigation }) {
  // MAKE A COMPONENT FOR EACH REGION AND ITS LOCATIONS ???
  // const NorthEastRegion = () => {
  //     const locationData = dummyData.data;
  //     if (dummyData.region === 'Northeast') {
  //         for (data of locationData) {
  //             console.log(data)
  //             return data;
  //         }
  //     }
  // };

  // Create useState for updating locations for each specific region

  // const [region, setRegionLocations] = useState("")

  // const [northEast, setNorthEast] = useState({
  //         id: 1,
  //         region: "Northeast",
  //         data: ["NY", "CAN", "MA", "ME", "NJ"]
  //     });
  // const [pacificNorthWest, setPacificNorthWest] = useState({
  //     id: 2,
  //     region: "Pacific Northwest",
  //     data: ["CAN", "WA", "AK"]
  // });
  // const [southEast, setSouthEast] = useState( {
  //     id: 3,
  //     region: "Southeast",
  //     data: ["VA", "FL"]
  // });
  // const [southWest, setSouthWest] = useState({
  //     id: 4,
  //     region: "Southwest",
  //     data: ["MEX"]
  // });
  // const [west, setWest] = useState( {
  //     id: 5,
  //     region: "West",
  //     data: ["CA"]
  // });

  // useState for location
  // update the state with specific region and its locations
  // implement useEffect to access the specific keys in the json
  // const [locations, setLocations] = useState();

  // CREATED CONDITIONALS TO UPDATE THE STATE WHEN A SPECIFIC BUTTON IS TAPPED
  const onPressFunction = () => {
    // code to be fired on press
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>SEARCH BY REGION</Text>

      <TouchableOpacity
        style={styles.button}
        // onPress={() => setNorthEast(!northEast)}
        // can pass in multiple items as strings
        // location variable can grab location oyster data
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
