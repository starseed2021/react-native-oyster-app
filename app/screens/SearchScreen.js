import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView,
    Button
} from 'react-native'


import colors from '../config/colors';


// HERE WILL BE THE SEARCH PAGE
function SearchScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textStyle}>Search for Oysters</Text>
            <Button 
                color={colors.secondary}
                title='Go to Oyster List'
                onPress={() => navigation.push('Oyster List')}
            />
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: colors.primary
    },
    textStyle: {
        color: colors.secondary
    }
})




export default SearchScreen; 