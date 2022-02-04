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

function ProfileScreen({ route }) {
  const { oysters } = route.params;


  const renderFlavorProfile = (flavorProfile) => {
    const flavors = flavorProfile.join(', ')
    return (
      <Text key={flavors} style={styles.renTextStyle}> {flavors} </Text>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.shellStyle}
        source={require("../assets/images/icon_shell.png")}
      />
      <FlatList
        style={styles.itemViewStyle}
        data={oysters}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.profileStyle}>
            <Text style={styles.textStyle}>
              <Text style={styles.nameTextStyle}> {item.oyster_name}</Text>
            </Text>
            <Text style={styles.textStyle}>
              Location:
              <Text style={styles.renTextStyle}> {item.location}</Text>
            </Text>
            <Text style={styles.textStyle}>
              Species:
              <Text style={styles.specieTextStyle}> {item.species}</Text>
            </Text>
            <Text style={styles.textStyle}>
              Flavor Profile:
              {renderFlavorProfile(item.flavor_profile)}
            </Text>
            <Text style={styles.textStyle}>
              Cultivation:
              <Text style={styles.renTextStyle}> {item.cultivation}</Text>
            </Text>
            <Text style={styles.textStyle}>
              Size:
              <Text style={styles.renTextStyle}> {item.size}</Text>
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
  shellStyle: {
    height: "50%",
    width: "125%",
    opacity: 0.25,
  },
  itemViewStyle: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  profileStyle: {
    // create styling for each oyster profile
    // maybe a border or elevation look like a card??
    // text in full color; background of card opaque
    padding: 20,
    alignItems: 'stretch',
    backgroundColor: colors.secondary,
    opacity: .65,
    borderRadius: 18,
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 12,
    marginRight: 12,
    // shadowColor: colors.shadow,
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // // sO: .22, sR: 2.22, e: 3
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,
    // elevation: 3,
  },
  specieTextStyle: {
    // strictly for species' value
    fontStyle: 'italic',
    color: colors.highlight,
    fontSize: 15,
    fontWeight: '600'
  },
  nameTextStyle: {
    color: colors.highlight,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center'
  },
  renTextStyle: {
    color: colors.highlight,
    fontSize: 15,
    fontWeight: '600'
  },
  textStyle: {
    fontSize: 15,
    color: colors.highlight,
    fontWeight: '700'
  },
});

export default ProfileScreen;
