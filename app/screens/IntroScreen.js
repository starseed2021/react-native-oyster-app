import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView,
    Button,
    Image
} from 'react-native'

import colors from '../config/colors';


// HERE WILL BE AN 'ABOUT US' PAGE AND WILL HAVE A BUTTON TO 'BEGIN SEARCH'
function IntroScreen({ navigation }) {
    return (
        <SafeAreaView style={ styles.container }>
            <Image
            source={require('../assets/images/cartoon_shell.png')}
            style={styles.image}
            />
            <View style={styles.textView}>
            <Text style={styles.textStyle}>
                Welcome ostreophiles!
            </Text>
            <Text style={styles.textBodyStyle}>
                Birth of Pearl was created with you in mind. 
                Here you will be able to search for your favorite oysters and learn more about them. 
            </Text>
            </View>
            <View style={ styles.footerStyle }>
            <Button 
            color={ colors.primary }
            title='Begin Search'
            onPress={() => navigation.push('Search')}
            />
            <Text style={ styles.footerTextStyle }>{'\u00A9'} 2021 Tiffany Harper</Text> 
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: colors.primary
    },
    footerStyle: {
        width: '100%',
        height: 115,
        backgroundColor: colors.secondary,
        position: 'absolute',
        padding: 25,
        bottom: 0,
    },
    footerTextStyle: {
        color: colors.primary,
        textAlign: 'center',
        marginTop: 15
    },
    image: {
        height: '50%',
        width: '125%',
        opacity: 0.25,
    },
    textStyle: {
        color: colors.secondary,
        fontSize: 30,
        fontWeight: '600'
    },
    textBodyStyle: {
        color: colors.secondary,
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center'
    },
    textView: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 100
    }
});


export default IntroScreen;


