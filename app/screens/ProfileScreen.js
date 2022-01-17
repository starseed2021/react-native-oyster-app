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
    
//    const { oyster } = route.params;


    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.iconStyle}
                source={require('../assets/images/icon_shell.png')}/>
            <View style={styles.itemViewStyle}>
                <Text style={styles.textStyle}>Oyster Name: { route.params.oyster }</Text>
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
        fontSize: 25,
        
    }
});



export default ProfileScreen;