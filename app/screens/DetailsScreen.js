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
    FlatList
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
        oyster: ['Blue Point']
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
        region: "West",
        data: ["CA"],
        oyster: ['Grassy Bar', 'Watery Bar', 'Soily Bar']
    }
]


function DetailsScreen( { navigation }) {
    // VARIABLE TO STORE THE OYSTER DATA
    // NEED TO MAP THROUGH THE DATA TO ACCESS WHAT I NEED
    // const [details, setDetails] = useState([
        //     {
            //         region: "Northeast",
            //         locations: ["NY", "CAN", "MA", "ME", "NJ"],
            //         oyster: 'blue point'
            //     },
            //     {
                //         region: "Pacific Northwest",
                //         locations: ["CAN", "WA", "AK"],
                //         oyster: 'baywater_sweet'
                //     },
                //     {   
                    //         region: "Southeast",
                    //         locations: ["VA", "FL"],
                    //         oyster: 'chesapeake'
                    //     },
                    //     {   
                        //         region: "West",
                        //         locations: ["CA"],
                        //         oyster: 'grassy bar'
                        //     }
                        // ])
                        
                        
    // const display = () => {
    //     const oysterData = DATA.map((item) => {
    //         <Text style={styles.itemStyle}>{ item }</Text>
    //     })
    // }
                        
    const renderItem = ({ item, index}) => {
        return (
            <Text style={styles.itemStyle}>{ item }</Text>
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
                keyExtractor={(item, index) => item + index}
                // PASS IN A FUNCTION THAT RENDERS THE ITEM LIST W/ TOUCHABLEOPACITY AND
                // THEN NAVIGATE TO DETAILS SCREEN
                />
                <FlatList
                data={ DATA }
                keyExtractor={(item, index) => item + index.toString()}
s                // toString is because these lists only take index as a string
                renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.push('Oyster Profile', item)}>
                            <Text style={styles.flatItemStyle}>{ item.data }</Text>
                        </TouchableOpacity>
                    )} 
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
    itemStyle: {
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
    flatItemStyle: {
        backgroundColor: colors.secondary,
        color: colors.primary,
        fontSize: 25,
        height: 50,
        padding: 10,
        marginVertical: 3,
        textAlign: 'center'
    }
});


export default DetailsScreen;