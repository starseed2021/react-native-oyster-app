import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  SectionList,
  Button,
  TouchableOpacity,
} from "react-native";

import colors from "../config/colors";

// FIGURE OUT HOW TO IMPLEMENT DATA.JSON SO THAT EACH REGION
// GETS ITS OWN SECTIONLIST PAGE AND THEIR LOCATIONS
// DETERMINE WHICH 'EVENT STATE' THAT'S SELECTED AND FILTER BY THE SPECIFIC LOCATIONS
// (EG. 'CAN', 'NY', 'NJ')
// .filter((item) => item.region == 'Northeast')

// GET ROUTED TO THEIR PERSPECTIVE OYSTERS LIST
const DATA = [
  // each object is an item
  {
    id: 1,
    region: "Northeast",
    data: [
      {
        location: "NY",
        oysters: [
          {
            oyster_name: "Blue Point",
            location: "NY",
            species: "Crassostrea Virginicas - Pacific",
            flavorProfile: "Briny",
            cultivation: "Rack to Bag",
            size: "up to 4.5 inches",
          },
          {
            oyster_name: "Red Point",
            location: "NY",
            species: "Crassostrea Virginicas - Atlantic",
            flavorProfile: "Briny",
            cultivation: "Rack to Bag",
            size: "up to 4.5 inches",
          },
        ],
      },
      {
        location: "CAN",
        oysters: [
          {
            oyster_name: "Pink Point",
            location: "CAN",
            species: "Crassostrea Virginicas - Atlantic",
            flavorProfile: "Briny",
            cultivation: "Rack to Bag",
            size: "up to 4.5 inches",
          },
        ],
      },
      {
        location: "MA",
        oysters: [
          {
            oyster_name: "Black Point",
            location: "MA",
            species: "Crassostrea Virginicas - Atlantic",
            flavorProfile: "Briny",
            cultivation: "Rack to Bag",
            size: "up to 4.5 inches",
          },
        ],
      },
      {
        location: "ME",
        oysters: [
          {
            oyster_name: "Green Point",
            location: "ME",
            species: "Crassostrea Virginicas - Atlantic",
            flavorProfile: "Briny",
            cultivation: "Rack to Bag",
            size: "up to 4.5 inches",
          },
        ],
      },
      {
        location: "NJ",
        oysters: [
          {
            oyster_name: "Purple Point",
            location: "NJ",
            species: "Crassostrea Virginicas - Atlantic",
            flavorProfile: "Briny",
            cultivation: "Rack to Bag",
            size: "up to 4.5 inches",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    region: "Pacific Northwest",
    data: [
      {
        location: "CAN",
        oysters: [
          {
            oyster_name: "Pacific Generic",
            location: "CAN",
            species: "Crassostrea Virginicas - Atlantic",
            flavorProfile: "Briny",
            cultivation: "Rack to Bag",
            size: "up to 4.5 inches",
          },
        ],
      },
      {
        location: "WA",
        oysters: [
          {
            oyster_name: "Pacific Puget Sound",
            location: "WA",
            species: "Crassostrea Virginicas - Atlantic",
            flavorProfile: "Briny",
            cultivation: "Rack to Bag",
            size: "up to 4.5 inches",
          },
        ],
      },
      {
        location: "AK",
        oysters: [
          {
            oyster_name: "Washington Sweet Water",
            location: "AK",
            species: "Crassostrea Virginicas - Atlantic",
            flavorProfile: "Briny",
            cultivation: "Rack to Bag",
            size: "up to 4.5 inches",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    region: "Southeast",
    data: [
      {
        location: "VA",
        oysters: [
          {
            oyster_name: "Chesapeake",
            location: "VA",
            species: "Crassostrea Virginicas - Atlantic",
            flavorProfile: "Briny",
            cultivation: "Rack to Bag",
            size: "up to 4.5 inches",
          },
        ],
      },
      {
        location: "FL",
        oysters: [
          {
            oyster_name: "Aligator Slater",
            location: "FL",
            species: "Crassostrea Virginicas - Atlantic",
            flavorProfile: "Briny",
            cultivation: "Rack to Bag",
            size: "up to 4.5 inches",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    region: "Southwest",
    data: [
      {
        location: "MEX",
        oysters: [
          {
            oyster_name: "Baja Sunrise",
            location: "MEX",
            species: "Crassostrea Virginicas - Atlantic",
            flavorProfile: "Briny",
            cultivation: "Rack to Bag",
            size: "up to 4.5 inches",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    region: "West",
    data: [
      {
        location: "CA",
        oysters: [
          {
            oyster_name: "California Dreamin",
            location: "CA",
            species: "Crassostrea Virginicas - Atlantic",
            flavorProfile: "Briny",
            cultivation: "Rack to Bag",
            size: "up to 4.5 inches",
          },
        ],
      },
    ],
  },
];

function DetailsScreen({ route, navigation }) {
  // console.warn(route)
  // VARIABLE TO STORE THE OYSTER DATA
  // NEED TO MAP THROUGH THE DATA TO ACCESS WHAT I NEED

  // const [region, setRegion] = useState([])

  // const SectionListItemSeparator = () => {
  //     return (
  //         <View style={styles.itemSeparatorStyle} />
  //     )
  // }
  const { region } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        // ItemSeparatorComponent={ SectionListItemSeparator }
        sections={DATA.filter((item) => item.region == region)}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemStyle}
            onPress={() =>
              navigation.push("Oyster Profile", {
                // How to pass in params dynamically??
                oysters: item.oysters,
              })
            }
          >
            <Text
              style={styles.itemTextStyle}
              // onPress={() => alert(JSON.stringify(item))}
            >
              {item.location}
            </Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.region}</Text>
        )}
        keyExtractor={(item, index) => item + index}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  itemTextStyle: {
    backgroundColor: colors.secondary,
    color: colors.primary,
    fontSize: 15,
    height: 50,
    padding: 10,
    marginVertical: 3,
    textAlign: "auto",
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: colors.primary,
    color: colors.secondary,
    padding: 10,
    textAlign: "auto",
  },
  itemSeparatorStyle: {
    height: 0.5,
    width: "100%",
    backgroundColor: colors.primary,
  },
});

export default DetailsScreen;
