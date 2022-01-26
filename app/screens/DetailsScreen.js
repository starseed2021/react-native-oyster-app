import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  SectionList,
  Button,
  TouchableOpacity,
} from "react-native";

import colors from "../config/colors";

import data from "../data/new_data.json";


// FIGURE OUT HOW TO IMPLEMENT DATA.JSON SO THAT EACH REGION
// GETS ITS OWN SECTIONLIST PAGE AND THEIR LOCATIONS
// DETERMINE WHICH 'EVENT STATE' THAT'S SELECTED AND FILTER BY THE SPECIFIC LOCATIONS
// (EG. 'CAN', 'NY', 'NJ')
// .filter((item) => item.region == 'Northeast')

const oysterData = data; 

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
    <SafeAreaView style={ styles.container }>
      <SectionList
        // ItemSeparatorComponent={ }
        // filter((item) => item.region == region)
        sections={ oysterData.filter((item) => item.region == region)}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={ styles.itemStyle }
            onPress={() =>
              navigation.push("Oyster Profile", {
                // How to pass in params dynamically??
                oysters: item.oysters,
              })
            }
          >
            <Text
              style={ styles.itemTextStyle }
              // onPress={() => alert(JSON.stringify(item))}
            >
              { item.location }
            </Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{ section.region }</Text>
        )}
        keyExtractor={ (item, index) => item + index }
      />
      <Button 
        title="Go to Oyster Profile"
        color={ colors.primary }
        onPress={() => navigation.push("Oyster Profile")}
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
