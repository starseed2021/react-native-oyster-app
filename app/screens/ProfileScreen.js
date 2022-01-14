import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    SafeAreaView,
    Image 
} from 'react-native';

import {FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';


function ProfileScreen({ route }) {
    // USE GET PARAM TO GRAB THE KEYS OF THE OBJECT TO DISPLAY
    
    const { oyster } = route.params;


    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.iconStyle}
                source={require('../assets/images/oyster_icon.png')}/>
            <Text style={styles.textStyle}> { oyster }</Text>
        </SafeAreaView>
        // <SafeAreaView style={styles.container}>
        //     <Text style={styles.textStyle}>Oyster Profile</Text>
        // </SafeAreaView>
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
        marginBottom: 10
    },
    textStyle: {
        color: colors.secondary,
        fontSize: 25
    }
})



export default ProfileScreen;