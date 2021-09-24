import React, { useEffect } from 'react';
import { View, Text, ScrollView, ImageBackground, StyleSheet, Image, TouchableOpacity, ToastAndroid, Linking } from 'react-native';
import { useSelector } from 'react-redux';
import MenuHeader from '../header/menu-header';


// let deviceHeight = Dimensions.get('window').height;

const HomeScreen = ({ navigation }) => {

    // Note: Fetching available user

    const availableUser = useSelector(({ authState }) => { return authState.authenticationUser });
    let { CustomerName } = availableUser;
    console.log(availableUser);

    // Note: Fetching user profile data...!
    let getUserData = useSelector(({ appState }) => { return appState.userProfileObj });
    console.log(getUserData, 'data recieved home screen component!');

    const toRequestServices = () => {
        navigation.navigate('Request Service', { userProfileData: getUserData });
    }

    const toRaiseComplaint = () => {
        navigation.navigate('Raise Complaint', { userProfileData: getUserData })
    }

    const toRequestInstalltion = () => {
        navigation.navigate('Request Installation', { userProfileData: getUserData });
    }

    const toSalesInquiry = () => {
        navigation.navigate('Sales Inquiry', { userProfileData: getUserData });
    }

    const toPendingCases = () => {
        navigation.navigate('Pending Cases')
    }

    const toCompleteCases = () => {
        navigation.navigate('Completed Cases')
    }

    const chatToast = () => {
        ToastAndroid.show("Coming soon", ToastAndroid.SHORT)
    }



    return (
        <>

            <ImageBackground source={require('../../../assets/images/homebg.png')} style={styles.bgImg}>
                <MenuHeader navParams={navigation} />
                <ScrollView>
                    <View style={styles.mainContainer}>
                        <View style={styles.headingContainer}>
                            <Text style={styles.mainHeading}>
                                {`Hi, ${CustomerName}`}
                            </Text>
                            <Text style={styles.subHeading}>
                                Welcome
                            </Text>
                        </View>
                        <View style={styles.subContainer}>
                            <TouchableOpacity onPress={toRequestServices}>
                                <View style={styles.boxContainer}>
                                    <Image style={styles.imgContainer} source={require('../../../assets/images/Service.png')}></Image>
                                    <Text style={styles.textLabel}>Request Services</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={toRequestInstalltion}>
                                <View style={styles.boxContainer}>
                                    <Image style={styles.imgContainer} source={require('../../../assets/images/RequestInstall.png')}></Image>
                                    <Text style={styles.textLabel}>Request Installation</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.subContainer}>
                            <TouchableOpacity onPress={toSalesInquiry}>
                                <View style={styles.boxContainer}>
                                    <Image style={styles.imgContainer} source={require('../../../assets/images/SalesInquiry.png')}></Image>
                                    <Text style={styles.textLabel}>Sales Inquiry</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={toRaiseComplaint}>
                                <View style={styles.boxContainer}>
                                    <Image style={styles.imgContainer} source={require('../../../assets/images/ComplaintImage.png')}></Image>
                                    <Text style={styles.textLabel}>Raise Complaint</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.subContainer}>
                            <TouchableOpacity onPress={() => Linking.openURL('http://www.shakersa.com')}>
                                <View style={styles.boxContainer}>
                                    <Image style={styles.imgContainer} source={require('../../../assets/images/Shop.png')}></Image>
                                    <Text style={styles.textLabel}>Shop Online</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={chatToast}>
                                <View style={styles.boxContainer}>
                                    <Image style={styles.imgContainer} source={require('../../../assets/images/Chat.png')}></Image>
                                    <Text style={styles.textLabel}>Live Chat</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.btnContainer}>
                            <TouchableOpacity style={styles.btnStyle} onPress={toPendingCases}>
                                <Text style={styles.btnText}>Open Cases</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnStyleTwo} onPress={toCompleteCases}>
                                <Text style={styles.btnTextTwo}>History</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </>
    )

}

const styles = StyleSheet.create({
    bgImg: {
        flex: 1,
    },
    mainContainer: {
        // backgroundColor: 'blue',
        display: "flex",
        justifyContent: "center",
        marginHorizontal: 10,
        marginVertical: 10,
    },
    headingContainer: {
        backgroundColor: '#299371',
        // width: '95%',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginHorizontal: '1.5%',
        marginVertical: '2%',

    },
    mainHeading: {
        fontFamily: 'NotoSans-Regular',
        fontSize: 21,
        color: 'white',
    },
    subHeading: {
        fontFamily: 'NotoSans-Bold',
        fontSize: 21,
        color: 'white',
    },
    subContainer: {
        flex: 1,
        // backgroundColor: 'yellow',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 10,
        alignItems: 'center',
        // backgroundColor: 'yellow',
        marginHorizontal: 1
    },
    boxContainer: {
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 15,
        justifyContent: 'center',
        height: 140,
        width: 160,
        padding: 15,
        // shadowColor: "green",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 2,

        elevation: 7,
    },
    textLabel: {
        color: '#299371',
        paddingVertical: 7,
        marginTop: 10,
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '700'
    },
    imgContainer: {
        resizeMode: 'stretch',
        height: 50,
        width: 50,
        alignItems: 'center'
    },
    btnContainer: {
        display: "flex",
        flexDirection: 'row',
        // justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 30,
        // backgroundColor: 'yellow'
    },
    btnText: {
        color: 'white',
    },
    btnTextTwo: {
        color: 'white',
    },
    btnStyle: {
        backgroundColor: "#299371",
        padding: 10,
        borderRadius: 10,
        flexGrow: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 2.5
    },

    btnStyleTwo: {
        backgroundColor: "#299371",
        padding: 10,
        borderRadius: 10,
        flexGrow: 2,
        // justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 2.5
    }
})


export default HomeScreen;