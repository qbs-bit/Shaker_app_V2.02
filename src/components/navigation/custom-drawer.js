// Note: CustomDrawer navigation component...!

import React, { useState, useEffect } from 'react'
import {
    ImageBackground,
    StyleSheet,
    View,

}
    from "react-native";

import {
    Avatar,
    Title,
    Caption,
    Drawer,
    TouchableRipple,
    Switch,
    Text
}
    from "react-native-paper";

import { DrawerContentScrollView } from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconsFromIonicons from "react-native-vector-icons/Ionicons";
import IconsFromFontAwesome from "react-native-vector-icons/FontAwesome";
import IconsFromMaterialIcons from "react-native-vector-icons/MaterialIcons";
import IconsFromMaterialCommunity from "react-native-vector-icons/MaterialCommunityIcons"
import IconsFromFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from "../../store/action/auth-actions";
import { getUserProfile } from "../../store/action/app-actions";

const CustomDrawer = (props) => {
    console.log(props);

    // Note: setting modal state...!
    const [isEnglish, setIsEnglish] = useState(false);

    // Note: Handeling redux here...
    const dispatch = useDispatch();
    const availableUser = useSelector(({ authState }) => { return authState.authenticationUser });
    let { CustomerName, Email, MobilePhoneNo } = availableUser;

    // Note: When this component rendered successfully then this hook will run and call the API...!
    useEffect(() => {
        dispatch(getUserProfile(MobilePhoneNo));
    }, []);

    // Note: Fetching user profile data...!
    let getUserData = useSelector(({ appState }) => { return appState.userProfileObj });
    console.log(getUserData, 'data recieved in component!');

    // Note: Function to logout user...!
    const logOut = () => {
        dispatch(logOutUser());
    }

    const toggleLang = () => {
        setIsEnglish(!isEnglish);
    }

    return (
        <React.Fragment>
            {/* Note: Main container */}
            <ImageBackground source={require('../../../assets/images/menubg.png')} style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>

                    {/* Note: Drawer scrolling container */}
                    <DrawerContentScrollView {...props}>

                        {/* Note: Drawer content container */}
                        <View style={styles.drawerContent}>

                            {/* Note: user information container */}
                            <View style={styles.userInfoSection}>
                                <View style={{ flexDirection: "row", marginTop: 15 }}>

                                    <View style={{ flexDirection: "column", marginLeft: 15 }}>
                                        <Title style={styles.title}>
                                            {CustomerName}
                                        </Title>
                                        <Caption style={styles.caption}>
                                            {Email}
                                        </Caption>
                                    </View>
                                </View>
                            </View>

                            {/* Note: Drawer navigation screen container */}
                            <Drawer.Section style={styles.drawerSection}>

                                {/* Note: Home screen */}
                                <Drawer.Item style={styles.itemSection}
                                    icon={
                                        ({ color, size }) => (
                                            <IconsFromFontAwesome5
                                                name="user-alt"
                                                color="#299371"
                                                size={size}
                                            />
                                        )
                                    }
                                    label=" My Profile"
                                    onPress={() => {
                                        props.navigation.navigate('Edit Profile', { userProfileData: getUserData })
                                    }}
                                >
                                </Drawer.Item>

                                {/* Note: TicketForm Screen */}
                                <Drawer.Item style={styles.itemSection}
                                    icon={
                                        ({ color, size }) => (
                                            <Icon
                                                name="lock"
                                                color="#299371"
                                                size={size}
                                            />
                                        )
                                    }
                                    label="Update Password"
                                    onPress={() => {
                                        props.navigation.navigate('Change Password');
                                    }}
                                >
                                </Drawer.Item>

                                {/* Note: Notification screen */}
                                <Drawer.Item style={styles.itemSection}
                                    icon={
                                        ({ color, size }) => (
                                            <IconsFromIonicons
                                                name="power"
                                                color="#299371"
                                                size={size}
                                            />
                                        )
                                    }
                                    label="Logout"
                                    onPress={logOut}
                                >
                                </Drawer.Item>



                                <TouchableRipple onPress={() => { toggleLang() }}>
                                    <View style={{ flexDirection: 'column' }}>
                                        <View style={styles.switchContainer}>
                                            <Text>English</Text>
                                            <View style={{ borderWidth: 1, borderColor: '#299371', borderRadius: 10 }} pointerEvents="none">
                                                <Switch value={isEnglish}
                                                    color={'#299371'}
                                                />
                                            </View>
                                            <Text>عربي</Text>
                                        </View>
                                        <View style={styles.switchTextContainer}>
                                            {
                                                (isEnglish)
                                                    ?
                                                    (
                                                        <Text>Arabic version is under construction</Text>

                                                    )
                                                    :
                                                    (
                                                        <Text>Selected Language is English</Text>
                                                    )
                                            }
                                        </View>
                                    </View>

                                </TouchableRipple>

                            </Drawer.Section>
                        </View>
                    </DrawerContentScrollView>

                </View>
            </ImageBackground>
        </React.Fragment>
    );
}

// Note: Handeling styling here...!
const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },

    userInfoSection: {
        borderBottomWidth: 1,
        borderBottomColor: "silver",
        paddingBottom: 5
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 3
    },

    caption: {
        fontSize: 14,
        lineHeight: 14
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20
    },

    section: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 15
    },

    drawerSection: {
        marginTop: 15,
        paddingTop: 30
    },

    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: 'silver',
        borderTopWidth: 1
    },
    itemSection: {
        marginVertical: 5
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 25,
    },
    switchTextContainer: {
        alignContent: 'center',
        paddingLeft: 24,
        paddingVertical: 10
    }

});

export { CustomDrawer };