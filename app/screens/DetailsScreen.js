import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  SectionList,
  TouchableOpacity,
  View
} from "react-native";

import colors from "../config/colors";

import data from "../data/new_data.json";


const oysterData = data; 

function DetailsScreen({ route, navigation }) {

  // const SectionListItemSeparator = () => {
  //     return (
  //         <View style={styles.itemSeparatorStyle} />
  //     )
  // }
  
  const { region } = route.params;

  const ItemSeparator = () => <View style={styles.itemSeparatorStyle} />

  return (
    <SafeAreaView style={ styles.container }>
      <SectionList
        // ItemSeparatorComponent={ ItemSeparator }
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
    fontSize: 18,
    height: 50,
    padding: 10,
    marginVertical: 3,
    textAlign: "center",
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: colors.primary,
    color: colors.secondary,
    padding: 10,
    textAlign: "center",
  },
  // itemSeparatorStyle: {
  //   height: 2,
  //   width: "100%",
  //   backgroundColor: colors.primary,
  // },
});

export default DetailsScreen;
