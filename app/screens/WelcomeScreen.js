import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    Image,
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
    Button,
} from 'react-native';

import colors from '../config/colors';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import {
    OriginalSurfer_400Regular
} from '@expo-google-fonts/original-surfer'

function WelcomeScreen({ navigation }) {
    let [fontsLoaded, error] = useFonts({
        OriginalSurfer_400Regular
    })

    if (!fontsLoaded) {
        return <AppLoading />
    }

    const facts = "https://my-oyster-facts-api.herokuapp.com/oysterFacts";

    const randomFact = () =>
        fetch(facts)
            .then(response => response.json())
            .then(result => {
                return result[Math.floor(Math.random() * result.length)].fact;
            })

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.welcomeTitles}>
                <Text style={styles.titleText}>Birth of Pearl</Text>
                <Text style={styles.subTitleText}>The world is your...</Text>
            </View>
            <TouchableOpacity style={styles.image} onPress={() => {
                randomFact().then(fact =>
                    navigation.navigate('Search', { fact })
                )
            }} >
                <Image
                    source={require('../assets/images/icon_shell.png')} />
            </TouchableOpacity>
            <StatusBar style='auto' />

            <View style={styles.footerStyle}>
                <Button
                    color={colors.primary}
                    title='Enter'
                    onPress={() => {
                        navigation.navigate('About Us')
                    }
                    } />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: '50%',
        width: '125%'
    },
    footerStyle: {
        width: '100%',
        height: 115,
        backgroundColor: colors.secondary,
        textAlign: 'center',
        position: 'absolute',
        padding: 25,
        bottom: 0,
    },
    subTitleText: {
        color: colors.secondary,
        fontSize: 20,
        fontWeight: '500',
        fontFamily: 'OriginalSurfer_400Regular'
    },
    titleText: {
        color: colors.secondary,
        fontSize: 45,
        fontWeight: '600',
        fontFamily: 'OriginalSurfer_400Regular'
    },
    welcomeTitles: {
        height: 120
    }
});



export default WelcomeScreen;