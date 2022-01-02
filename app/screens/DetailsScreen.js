import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    SafeAreaView
} from 'react-native'

import colors from '../config/colors';


function DetailsScreen() {
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
        justifyContent: 'center',
        backgroundColor: colors.primary
    },
    textStyle: {
        color: colors.secondary
    }
})



export default DetailsScreen;