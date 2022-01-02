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
    Dimensions 
} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';


import colors from '../config/colors';



function WelcomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.welcomeTitles}>
                <Text style={styles.titleText}>Birth of Pearl</Text>
                <Text style={styles.subTitleText}>The world is your...</Text>
            </View>
            <TouchableOpacity style={styles.image} onPress={() => navigation.navigate('Search')} >
                <Image 
                source={require('../assets/images/cartoon_shell.png')}/>
            </TouchableOpacity>
            <StatusBar sytle='auto' />

            {/* CREATE FOOTER BACKGROUND; COLORS REVERSED; BUTTON DISPLAYED */}
            {/* SHOULD THE BUTTON BE ANOTHER COMPONENT */}
            <View style={styles.enterButton}>
            <Button
            color={colors.primary}
            title='Enter'
            onPress={() => navigation.navigate('About Us')}
            />
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center', 
    },
    image: {
        // REPOSITION THE IMAGE SO THAT EDGES AREN'T CUT OFF
        height: '50%',
        width: '125%'
    },
    enterButton: {
        width: '100%',
        height: 100,
        backgroundColor: colors.secondary,
        // color: 'cadetblue',
        textAlign: 'center',
        position: 'absolute',
        bottom: 0
    },
    subTitleText: {
        color: colors.secondary,
        fontSize: 18,
        fontWeight: '300'
    },
    titleText: {
        color: colors.secondary,
        fontSize: 30,
        fontWeight: '600'
    },
    welcomeTitles: {
        height: 100
    }
});



export default WelcomeScreen;