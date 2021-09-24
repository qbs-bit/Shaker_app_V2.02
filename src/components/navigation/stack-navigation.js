// Note: StackNavigationHandler component...!

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

// Note: Unauthenticated components...!
import SplashScreen from '../authorization/splash-screen';
import AppIntro from '../onboarding/appintro';
import LoginScreen from '../authorization/login';
import SignupScreen from '../authorization/sign-up';
import ResetPassword from '../authorization/reset-password';
import ConfirmPassword from '../authorization/confirm-password';


const StackNavigationHandler = () => {
    return (
        <React.Fragment>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Splash" component={SplashScreen} />
                <Screen name="App Intro" component={AppIntro} />
                <Screen name="Login" component={LoginScreen} />
                <Screen name="Signup" component={SignupScreen} />
                <Screen name='Reset Password' component={ResetPassword} />
                <Screen name='Confirm Password' component={ConfirmPassword} />
            </Navigator>
        </React.Fragment>
    );
}

export default StackNavigationHandler;