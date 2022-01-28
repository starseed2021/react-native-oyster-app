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

  
  const renderFlavorProfile = ( flavorProfile ) => {
      const flavors = flavorProfile.join(', ')
      return (
        <Text key={ flavors } style={styles.renTextStyle}> { flavors } </Text>
        )
      }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.iconStyle}
        source={require("../assets/images/icon_shell.png")}
      />
      <FlatList
        style={ styles.itemViewStyle }
        data={ oysters }
        keyExtractor={ (item, index) => item + index }
        renderItem={({ item }) => (
          <View style={styles.profileStyle}>
            <Text style={ styles.textStyle }>
              Oyster Name: 
              <Text style={styles.renTextStyle}> { item.oyster_name }</Text>
            </Text>
            <Text style={ styles.textStyle }>
              Location: 
              <Text style={styles.renTextStyle}> { item.location }</Text>
            </Text>
            <Text style={ styles.textStyle }>
              Species: 
              <Text style={styles.profileTextStyle}> { item.species }</Text>
            </Text>
            <Text style={ styles.textStyle }>
              Flavor Profile: 
              {renderFlavorProfile(item.flavor_profile)}
            </Text>
            <Text style={ styles.textStyle }>
              Cultivation: 
              <Text style={styles.renTextStyle}> { item.cultivation }</Text>
            </Text>
            <Text style={ styles.textStyle }>
              Size: 
              <Text style={styles.renTextStyle}> { item.size }</Text>
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
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  profileStyle: {
    padding: 25,
    alignItems: 'flex-start',
  },
  profileTextStyle: {
    fontStyle: 'italic',
    color: colors.highlight,
    fontSize: 15,
    fontWeight: '500'
  },
  renTextStyle: {
    color: colors.highlight,
    fontSize: 15,
    fontWeight: '500'
  },
  textStyle: {
    fontSize: 18,
    color: colors.secondary,
    fontWeight: '600'
  },
});

export default ProfileScreen;
