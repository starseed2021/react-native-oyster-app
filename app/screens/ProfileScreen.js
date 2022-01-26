import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
} from "react-native";

import colors from "../config/colors";

function ProfileScreen({ route, navigation }) {
  // USE GET PARAM TO GRAB THE KEYS OF THE OBJECT TO DISPLAY

  const { oysters } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.iconStyle}
        source={require("../assets/images/icon_shell.png")}
      />
      <FlatList
        style={styles.itemViewStyle}
        data={oysters}
        keyExtractor={(item, index) => item + index}
        // ItemSeparatorComponent={}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.textStyle}>
              Location: {item.location}
            </Text>
            <Text style={styles.textStyle}>
              Oyster Name: {item.oyster_name}
            </Text>
            <Text style={styles.textStyle}>
              Species: {item.species}
            </Text>
            <Text style={styles.textStyle}>
              Flavor Profile: {item.flavorProfile}
            </Text>
            <Text style={styles.textStyle}>
              Cultivation: {item.cultivation}
            </Text>
            <Text style={styles.textStyle}>
              Size: {item.size}
            </Text>
          </View>
        )}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  iconStyle: {
    height: "50%",
    width: "125%",
    opacity: 0.25,
  },
  itemViewStyle: {
    position: "absolute",
    marginBottom: 15,
  },
  textStyle: {
    color: colors.secondary,
    fontSize: 20,
  },
});

export default ProfileScreen;
