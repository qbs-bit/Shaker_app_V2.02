import { Text, View, ScrollView, ImageBackground, TouchableOpacity, TextInput, StyleSheet, Dimensions, Image, ToastAndroid, ActivityIndicator, BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

let deviceHeight = Dimensions.get('window').height;


const ForgetPassword = ({ navigation }) => {

    // Note: Handeling states here...!
    const [email, setEmail] = useState("");
    const [emailHelper, setEmailHelper] = useState("");
    const [submitDataLoader, setSubmitDataLoader] = useState(false);

    // Note: Function to handle device back button navigation...!
    const handleBackButtonClick = () => {
        navigation.goBack();
        return true;
    }

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        };
    }, []);

    // Note: Function to show message...!
    const showToast = (value) => {
        ToastAndroid.show(value, ToastAndroid.LONG);
    };

    // Note: function to send email to reset password

    const submitForm = () => {

        let validEmailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!email.match(validEmailFormat)) {
            setEmailHelper("Invalid Email Address");
            hideWarnings();
        }

        else {
            validEmailChecker()
        }

    }

    // Note: This function will hide warning after 5 secs...!
    const hideWarnings = () => {
        setTimeout(() => {
            setEmailHelper("")
        }, 1000);
    }

    // Note: Function to integrate an API...!
    const validEmailChecker = async () => {
        setSubmitDataLoader(true);
        let api = `https://crm.shaker.com.sa/api/customers/EmailPasswordUpdate/${email}`;

        try {
            let response = await axios.get(api);
            console.log(response);

            if (response.data) {
                showToast('Your Email is verified!');
                navigation.navigate('Confirm Password', { params: email });
            }

            else {
                showToast('Invalid Email Address!');
                setSubmitDataLoader(false);
            }
        }

        catch (error) {
            console.log(error.message);
            showToast('Invalid Email Address!');
            setSubmitDataLoader(false);
        }
    }

    // Note: returned function will be called on component unmount...!
    useEffect(() => {
        return () => {
            console.log('Component unmounted successfully!');
            setSubmitDataLoader(false);
        }
    }, []);

    return (
        <>
            <ImageBackground source={require('../../../assets/images/imgbg.png')} style={styles.bgImg}>

                {/* Note: Navigation bar header */}
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon
                            name="arrow-left"
                            size={20}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.mainContainer}>
                        <View style={styles.contentContainer}>
                            <View style={styles.lockIcon}>
                                <Image source={require('../../../assets/images/lock.png')}></Image>
                            </View>
                            <Text style={styles.forgetPass}>
                                Enter email to verify
                            </Text>
                            <TextInput
                                placeholder='Email'
                                placeholderTextColor='black'
                                style={styles.userInput}
                                keyboardType="email-address"
                                value={email}
                                onChangeText={(event) => setEmail(event)}
                            />
                            <Text
                                style={styles.validationText}
                            >
                                {emailHelper}
                            </Text>
                            {
                                (submitDataLoader)
                                    ?
                                    (
                                        <View>
                                            <ActivityIndicator style={styles.button} size="small" color="white" />
                                        </View>
                                    )
                                    :
                                    (
                                        <TouchableOpacity onPress={submitForm}>
                                            <Text style={styles.button}>Submit</Text>
                                        </TouchableOpacity>
                                    )
                            }
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
        height: deviceHeight,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    contentContainer: {
        padding: 10,
        width: '90%',
        borderColor: "#299371",
        borderStyle: "solid",
        borderWidth: 1,
        // marginHorizontal: 20,
        // marginHorizontal: '5%',
        borderRadius: 10,
        // paddingHorizontal: 10,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    forgetPass: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'NotoSans-Regular',
        marginVertical: 10,
    },
    lockIcon: {
        justifyContent: 'center',
        alignContent: 'center',
        paddingVertical: 10,
        marginVertical: '15%',
        marginHorizontal: '40%',
    },
    userInput: {
        borderStyle: 'solid',
        borderColor: '#299371',
        borderWidth: 1,
        borderRadius: 7,
        marginVertical: 10,
        color: "black"
    },

    validationText: {
        color: "red",
        fontSize: 14,
        textAlign: "right",
        fontFamily: "NotoSans-Regular",
    },

    button: {
        textAlign: 'center',
        backgroundColor: '#299371',
        color: 'white',
        paddingVertical: 12,
        marginHorizontal: 10,
        marginVertical: 20,
        borderRadius: 8,
        fontSize: 16,
    },

    headerContainer: {
        backgroundColor: '#299371',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
})

export default ForgetPassword;