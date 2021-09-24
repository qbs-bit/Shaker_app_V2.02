// Note: SplashScreen component...!

import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {

    // Note: When this component rendered successfully then this hook will run...!
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('App Intro');
        }, 3000);
    }, []);

    return (
        <>
            <View style={styles.mainContainer}>
                <Image
                    source={require('../../../assets/images/splash.png')}
                    style={styles.splashStyle}
                />
            </View>
        </>
    );
}

// Note: Handeling styling here...!
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },

    splashStyle: {
        height: '100%',
        width: '100%',
        resizeMode: "cover"
    }
});

export default SplashScreen;