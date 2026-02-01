import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button,
    ActivityIndicator
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// ========== ORIGINAL IMPORTS (before migration) ==========
// import {
//     Image,
//     StyleSheet,
//     SafeAreaView,
//     Text,
//     View,
//     TouchableOpacity,
//     Button,
// } from 'react-native-safe-area-context';
//
// import AppLoading from 'expo-app-loading';
// =========================================================

import colors from '../config/colors';
import { useFonts } from 'expo-font';

import {
    OriginalSurfer_400Regular
} from '@expo-google-fonts/original-surfer'

function WelcomeScreen({ navigation }) {
    let [fontsLoaded] = useFonts({
        OriginalSurfer_400Regular
    })

    // ========== ORIGINAL LOADING STATE ==========
    // if (!fontsLoaded) {
    //     return <AppLoading />
    // }
    // ==============================================

    if (!fontsLoaded) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.primary }}>
                <ActivityIndicator size="large" color={colors.secondary} />
            </View>
        );
    }

    // Original API (Heroku free tier discontinued)
    // const facts = "https://my-oyster-facts-api.herokuapp.com/oysterFacts";
    //
    // const randomFact = () =>
    //     fetch(facts)
    //         .then(response => response.json())
    //         .then(result => {
    //             return result[Math.floor(Math.random() * result.length)].fact;
    //         })

    const fallbackFacts = [
        "Oysters can filter up to 50 gallons of water per day.",
        "A single oyster can produce millions of eggs in one spawning season.",
        "Oysters have been eaten by humans for over 2,000 years.",
        "The world's largest oyster was over 13 inches long.",
        "Oysters change gender during their lifetime.",
        "Oyster reefs protect coastlines from erosion.",
        "Rich in zinc, iron, and protein, they're nutritional powerhouses.",
        "Thomas Downing (1791–1866), a freed African American, ran NYC's famous Oyster House, turning oysters into high-class dining.",
        "19th-century New York Harbor was oyster-rich, before pollution and overharvesting.",
        "Guinness World Record: 564 oysters eaten in 8 minutes held by Sonya \"The Black Widow\" Thomas."
    ];

    const randomFact = () => {
        return Promise.resolve(fallbackFacts[Math.floor(Math.random() * fallbackFacts.length)]);
    }

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