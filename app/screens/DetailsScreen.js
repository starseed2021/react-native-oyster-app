import React, { useState } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    SafeAreaView,
    SectionList,
    StatusBar,
    Button,
    TouchableOpacity,
    FlatList,
} from 'react-native';

import colors from '../config/colors';

// FIGURE OUT HOW TO IMPLEMENT DATA.JSON SO THAT EACH REGION 
// GETS ITS OWN SECTIONLIST PAGE AND THEIR LOCATIONS
// DETERMINE WHICH 'EVENT STATE' THAT'S SELECTED AND FILTER BY THE SPECIFIC LOCATIONS
// (EG. 'CAN', 'NY', 'NJ')
// .filter((item) => {item.region == 'ny})




// GET ROUTED TO THEIR PERSPECTIVE OYSTERS LIST
const DATA = [
    {
        region: "Northeast",
        data: ["NY", "CAN", "MA", "ME", "NJ"],
        oyster: 'Blue Point'
    },
    {
        region: "Pacific Northwest",
        data: ["CAN", "WA", "AK"],
        oyster: 'Baywater Sweet'
    },
    {   
        region: "Southeast",
        data: ["VA", "FL"],
        oyster: 'Chesapeake'
    },
    {
        region: "Southwest",
        data: ["MEX"],
        oyster: ['Baja Sweet', 'Baja Sunrise']
    },
    {   
        region: "West",
        data: ["CA"],
        oyster: ['Grassy Bar', 'Watery Bar', 'Soily Bar']
    }
]

// useState functions here ??


function DetailsScreen( { route, navigation }) {
    // VARIABLE TO STORE THE OYSTER DATA
    // NEED TO MAP THROUGH THE DATA TO ACCESS WHAT I NEED

    const onPressFunction = () => {
        // code you want to fire on press
    }
    

    const renderItem = ({ item, index}) => {
        return (
            <TouchableOpacity style={styles.itemStyle} onPress={() => navigation.push('Oyster Profile', {
                oyster: 'Blue Point'
            })}>
                <Text style={styles.itemTextStyle}>{ item }</Text>
            </TouchableOpacity>
        )
    }

    const renderHeader = ({ section }) => {
        return (
            <Text style={styles.sectionHeader}>{ section.region }</Text>
        )
    }

    return (
        <SafeAreaView style={ styles.container }>
            
            <SectionList
                sections={ DATA }
                renderItem={ renderItem }
                renderSectionHeader={ renderHeader }
                keyExtractor={(item, index) => item + index.toString()}
                />

                <Button
                color={ colors.primary }
                title='Go to Oyster Profile'
                onPress={() => navigation.push('Oyster Profile')}
                />
        </SafeAreaView>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight, 
        backgroundColor: colors.secondary,
    },  
    itemTextStyle: {
        backgroundColor: colors.secondary,
        color: colors.primary,
        fontSize: 15,
        height: 50,
        padding: 10,
        marginVertical: 3,
        textAlign: 'auto'
    },
    sectionHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: colors.primary,
        color: colors.secondary,
        padding: 10,
        textAlign: 'auto',
        
    },
});


export default DetailsScreen;