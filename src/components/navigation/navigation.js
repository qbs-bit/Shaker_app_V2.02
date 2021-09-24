// Note: Main Navigation component...!

import React from 'react';
import 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

//Note: Importing navigation components...!
import StackNavigationHandler from "./stack-navigation";
import DrawerNavigationHandler from "./drawer-navigation";

const Navigation = () => {

    // Note: Checking user authentication status...!
    let availableUser = useSelector(({ authState }) => { return authState.authenticationUser });
    console.log('CurrentUser Status: ', availableUser);

    return (
        <React.Fragment>
            <NavigationContainer>
                {
                    (availableUser)
                        ?
                        (<DrawerNavigationHandler />)
                        :
                        (<StackNavigationHandler />)
                }
            </NavigationContainer>
        </React.Fragment>
    );
};

export default Navigation;