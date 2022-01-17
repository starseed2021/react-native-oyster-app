import React, { useState } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView,
    Button,
    TouchableOpacity,
} from 'react-native';

import colors from '../config/colors';


// IS THIS THE RIGHT SYNTAX???
import oysterData from '../data/new_data.json'; 

// HERE WILL BE THE SEARCH PAGE
function SearchScreen({ navigation }) {


    // Create useState for updating locations for each specific region
    const [northEast, setNorthEast] = useState([]);    
    const [pacificNorthWest, setPacificNorthWest] = useState([]);
    const [southEast, setSouthEast] = useState([]);
    const [southWest, setSouthWest] = useState([]);
    const [west, setWest] = useState([]);

    // useState for location
    // update the state with specific region and its locations
    // implement useEffect to access the specific keys in the json
    // const [Data, setData] = useState({});

    // do I need to map through the data here?



    return (
        <View style={styles.container}>

            <Text style={styles.headerText}>SEARCH BY REGION</Text>

            <TouchableOpacity
                style={styles.button}
                // onPress={() => setNorthEast(!northEast)}
                // can pass in multiple items as strings
                // location variable can grab location oyster data
                onPress={() => navigation.push('Locations', {
                    northEast: ['NY', 'CAN', 'MA', 'ME', 'NJ']
                })}

            >
                <Text style={styles.buttonText}>Northeast</Text>

            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                // onPress={() => setPacificNorthWest(!pacificNorthWest)}
                onPress={() => navigation.push('Locations', {
                    pacificNorthWest: ['CAN', 'WA', 'AK']
                })}
            >
                <Text style={styles.buttonText}>Pacific Northwest</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                // onPress={() => setSouthEast(!southEast)}
                onPress={() => navigation.push('Locations', {
                    southEast: ['VA', 'FL']
                })}
            >
                <Text style={styles.buttonText}>Southeast</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                // onPress={() => setSouthWest(!southWest)}
                onPress={() => navigation.push('Locations', {
                    southWest: 'MEX'
                })}
            >
                <Text style={styles.buttonText}>Southwest</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                // onPress={() => setWest(!west)}
                onPress={() => navigation.push('Locations', {
                    west: 'CA'
                })}
            >
                <Text style={styles.buttonText}>West</Text>
            </TouchableOpacity>

        </View>
    )

};



const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: colors.primary
    },
    button: {
        backgroundColor: colors.secondary,
        width: '70%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.80,
        elevation: 3,
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '500',
        color: colors.primary,
    },
    headerText: {
        color: colors.secondary,
        fontSize: 30,
        fontWeight: '400',
        marginBottom: 40
    }
});




export default SearchScreen; 