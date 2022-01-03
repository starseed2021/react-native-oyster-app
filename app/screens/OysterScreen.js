import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    SafeAreaView,
    Button,
    ScrollView
} from 'react-native'

import colors from '../config/colors';

function OysterScreen({ navigation }) {
    return (
        <SafeAreaView style={ styles.container }>
            <Text style={ styles.textStyle }>Oyster List</Text>
            <Button 
                color={ colors.secondary }
                title='Go to Oyster Profile'
                onPress={() => navigation.push('Oyster Profile')}
            />
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


export default OysterScreen;

