import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    SafeAreaView,
    Image
} from 'react-native';

import {FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';



function ProfileScreen({ route, navigation}) {
    // USE GET PARAM TO GRAB THE KEYS OF THE OBJECT TO DISPLAY
    
   const { oyster } = route.params;
   const { location } = route.params;
   const { species } = route.params;
   const { flavorProfile } = route.params;
   const { cultivation } = route.params;
   const { size } = route.params;
  

    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.iconStyle}
                source={require('../assets/images/icon_shell.png')}/>
            <View style={styles.itemViewStyle}>
                <Text style={styles.textStyle}>Location: { location }</Text>
                <Text style={styles.textStyle}>Oyster Name: { oyster }</Text>
                <Text style={styles.textStyle}>Species: { species }</Text>
                <Text style={styles.textStyle}>Flavor Profile: { flavorProfile}</Text>
                <Text style={styles.textStyle}>Cultivation: { cultivation }</Text>
                <Text style={styles.textStyle}>Size: { size }</Text>
            </View>
        </SafeAreaView>
    )
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconStyle: {
        height: '50%',
        width: '125%',
        opacity: 0.25,
    },
    itemViewStyle: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    textStyle: {
        color: colors.secondary,
        fontSize: 20,
        
    }
});



export default ProfileScreen;