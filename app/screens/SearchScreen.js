import React, { useState } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView,
    Button,
    TouchableOpacity,
    Modal 
} from 'react-native';



import colors from '../config/colors';


// HERE WILL BE THE SEARCH PAGE
function SearchScreen({ navigation }) {

    // REGIONS MODAL
    const [northeastModal, setNortheastModal] = useState(false);
    const [pacificNorthwestModal, setPacificNorthwestModal] = useState(false);
    const [southeastModal, setSoutheastModal] = useState(false);
    const [southwestModal, setSouthwestModal] = useState(false);
    const [westModal, setWestModal] = useState(false);


    //VALUES
    const [northEast, setNorthEast] = useState(false);
    const [pacificNorthWest, setPacificNorthWest] = useState(false);
    const [southEast, setSouthEast] = useState(false);
    const [southWest, setSouthWest] = useState(false);
    const [west, setWest] = useState(false);

    // useState for location




    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>SEARCH BY REGION</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => setNorthEast(!northEast)}
                // can pass in multiple items as strings
                // location variable can grab location oyster data
                onPress={() => navigation.push('Oyster List')}
                // onPress={(location) => 
                //     {setModalShown(true)
                //     setLocation(location)
                //     }
                // }
            >
                <Text style={styles.buttonText}>Northeast</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => setPacificNorthWest(!pacificNorthWest)}
            >
                <Text style={styles.buttonText}>Pacific Northwest</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => setSouthEast(!southEast)}
            >
                <Text style={styles.buttonText}>Southeast</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => setSouthWest(!southWest)}
            >
                <Text style={styles.buttonText}>Southwest</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => setWest(!west)}
            >
                <Text style={styles.buttonText}>West</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={northeastModal}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}    
            // USING ONPRESS TO TRY AND DEBUG       
            // onPress={() => {console.log('button tapped')}}
            >
                <View 
                style={{
                        flex: 1,
                        backgroundColor: 'yellow',
                    }}
                >

                </View>    
            </Modal>
        </View>
    )

};
    // return (
    //     <SafeAreaView style={ styles.container }>
    //         <Text style={ styles.textStyle }>Search for Oysters</Text>
    //         <Button 
    //             color={ colors.secondary }
    //             title='Go to Oyster Profile'
    //             onPress={() => navigation.push('Oyster Profile')}
    //         />
    //     </SafeAreaView>
    // )




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
        fontWeight: '300',
        marginBottom: 40
    }
});




export default SearchScreen; 