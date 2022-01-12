import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    SafeAreaView,
    SectionList,
    StatusBar,
    Button
} from 'react-native'

import colors from '../config/colors';
import oysterData from '../data/data.json';

// FIGURE OUT HOW TO IMPLEMENT DATA.JSON SO THAT EACH REGION 
// GETS ITS OWN SECTIONLIST PAGE AND THEIR LOCATIONS
// GET ROUTED TO THEIR PERSPECTIVE OYSTERS LIST
const DATA = [
    {
        region: "Northeast",
        data: ["NY", "CAN", "MA", "ME", "NJ"]
    },
    {
        region: "Pacific Northwest",
        data: ["CAN", "WA", "AK"]
    },
    {
        region: "Southeast",
        data: ["VA", "FL"]
    },
    {
        region: "West",
        data: ["CA"]
    }
]


function DetailsScreen( { navigation }) {
    // VARIABLE TO STORE THE OYSTER DATA
    // NEED TO MAP THROUGH THE DATA TO ACCESS WHAT I NEED
    // const oysterDataList = oysterData.locations;
    
    const renderItem = ({item, index}) => {
        return (
            <Text style={styles.itemStyle}>{ item }</Text>
        )
    }

    const renderHeader = ({section}) => {
        return (
            <Text style={styles.sectionHeader}>{ section.region }</Text>
        )
    }

    return (
        <SafeAreaView style={ styles.container }>
            <SectionList
                sections={ DATA }
                // getItemCount={oysters => oysters.length}
                // toString was used on one of the tutorials I saw
                keyExtractor={(item, index) => item + index.toString()}
                renderItem={ renderItem } 
                renderSectionHeader={ renderHeader }
                />

                <Button
                color={ colors.primary }
                title='Go to Oyster Profile'
                onPress={() => navigation.push('Oyster Profile')}
                />
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight, 
        backgroundColor: colors.secondary,
    },  
    itemStyle: {
        backgroundColor: colors.primary,
        color: colors.secondary,
        fontSize: 15,
        height: 50,
        padding: 10,
        marginVertical: 3,
        textAlign: 'auto'
    },
    sectionHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: colors.secondary,
        color: colors.primary,
        padding: 10,
        textAlign: 'auto',

    },
    title: {
        fontSize: 24,
    }
});


export default DetailsScreen;