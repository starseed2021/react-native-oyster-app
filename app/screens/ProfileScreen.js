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
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import {
  OriginalSurfer_400Regular
} from '@expo-google-fonts/original-surfer'



function ProfileScreen({ route }) {
  let [fontsLoaded, error] = useFonts({
    OriginalSurfer_400Regular
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

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
    padding: 20,
    alignItems: 'stretch',
    backgroundColor: colors.secondary,
    opacity: .65,
    borderRadius: 18,
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 12,
    marginRight: 12,
  },
  specieTextStyle: {
    // strictly for species' value
    fontStyle: 'italic',
    color: colors.highlight,
    fontSize: 16,
    // fontWeight: '600',
    fontFamily: 'OriginalSurfer_400Regular'

  },
  nameTextStyle: {
    color: colors.highlight,
    fontSize: 20,
    // fontWeight: '800',
    textAlign: 'center',
    fontFamily: 'OriginalSurfer_400Regular'
  },
  renTextStyle: {
    color: colors.highlight,
    fontSize: 16,
    // fontWeight: '600',
    fontFamily: 'OriginalSurfer_400Regular'
  },
  textStyle: {
    fontSize: 17,
    color: colors.highlight,
    // fontWeight: "700",
    fontFamily: 'OriginalSurfer_400Regular'
  },
});

export default ProfileScreen;
