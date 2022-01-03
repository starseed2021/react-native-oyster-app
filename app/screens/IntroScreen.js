import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView,
    Button
} from 'react-native'

import colors from '../config/colors';


// HERE WILL BE AN 'ABOUT US' PAGE AND WILL HAVE A BUTTON TO 'BEGIN SEARCH'
function IntroScreen({ navigation }) {
    return (
        <SafeAreaView style={ styles.container }>
            <Text style={styles.textStyle}>
            Lorem ipsum dolor sit amet. Aut blanditiis iusto eos blanditiis dolores et dolorem sunt hic aliquid accusamus. Ut repellat internos ut autem voluptatem est quod tempore ut deleniti voluptatem ea nostrum pariatur quo obcaecati recusandae. Et placeat nihil est rerum iure quo perferendis exercitationem. Eos earum voluptatem ut aliquid nihil sit doloribus dolorum 33 nihil aliquam quo rerum sint non vitae illum in esse voluptates.
            </Text>

            <Button 
            color={ colors.secondary }
            title='Go to Search Page'
            onPress={() => navigation.push('Search')}
            />
            <View style={ styles.footerStyle }>
            <Text style={ styles.footerTextStyle }>{'\u00A9'} 2021 Tiffany Harper</Text> 
            </View>
        </SafeAreaView>
    );
}


{/* POSSIBLY PLACE MY COPYRIGHT AT BOTTOM OF PAGE
<Text>{'\u00A9'} Tiffany Harper</Text> */}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: colors.primary
    },
    footerStyle: {
        width: '100%',
        height: 115,
        backgroundColor: colors.secondary,
        position: 'absolute',
        bottom: 0
    },
    footerTextStyle: {
        color: colors.primary,
        textAlign: 'center',
        marginTop: 50
    },
    textStyle: {
        color: colors.secondary
    }
});


export default IntroScreen;


