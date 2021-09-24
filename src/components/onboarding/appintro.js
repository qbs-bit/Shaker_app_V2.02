// Note: SwipeScreens Component...!

import React from 'react';
import { Image, StatusBar } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';

const SwipeScreens = ({ navigation }) => {

    return (
        <React.Fragment>
            <StatusBar backgroundColor='#299371' barStyle="light-content" />

            <Onboarding
                onDone={() => navigation.navigate('Login')}
                onSkip={() => navigation.navigate('Login')}

                pages={[
                    {
                        backgroundColor: '#299371',
                        image: <Image source={require('../../../assets/images/image1.png')} />,
                        title: 'Welcome',
                        subtitle: 'Sign Up to the App',
                    },

                    {
                        backgroundColor: '#299371',
                        image: <Image source={require('../../../assets/images/image1.png')} />,
                        title: 'Welcome',
                        subtitle: 'Submit Your Complain',
                    },

                    {
                        backgroundColor: '#299371',
                        image: <Image source={require('../../../assets/images/image2.png')} />,
                        title: 'Welcome',
                        subtitle: 'Recieve Complain Number',
                    }
                ]}
            />
        </React.Fragment>
    );
}

export default SwipeScreens;