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
                keyExtractor={(item, index) => item + index}
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


// ORIGINAL STYLING
// const styles = StyleSheet.create({
//     container: {
//         flex: 1, 
//         alignItems: 'center', 
//         justifyContent: 'center',
//         backgroundColor: colors.primary
//     },
//     textStyle: {
//         color: colors.secondary
//     }
// })

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight, 
        backgroundColor: colors.secondary,
    },  
    itemStyle: {
        backgroundColor: colors.primary,
        color: colors.secondary,
        fontSize: 18,
        height: 50,
        padding: 10,
        marginVertical: 3,
        textAlign: 'center'
    },
    sectionHeader: {
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: colors.secondary,
        color: colors.primary,
        padding: 10,
        textAlign: 'center'
    },
    title: {
        fontSize: 24
    }
});


export default DetailsScreen;