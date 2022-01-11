import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    SafeAreaView 
} from 'react-native';

import colors from '../config/colors';


function ProfileScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textStyle}>Oyster Profile</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.primary,
        justifyContent: 'center'
    },
    textStyle: {
        color: colors.secondary
    }
})



export default ProfileScreen;