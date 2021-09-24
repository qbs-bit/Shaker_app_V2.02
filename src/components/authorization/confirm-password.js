// Note: ConfirmPassword component...!

import React, { useState } from 'react';
import axios from 'axios';
import { Text, View, ScrollView, ImageBackground, TouchableOpacity, TextInput, StyleSheet, Dimensions, Image, ActivityIndicator, ToastAndroid } from 'react-native';
import { useDispatch } from 'react-redux';
let deviceHeight = Dimensions.get('window').height;
import Icon from 'react-native-vector-icons/FontAwesome5'


const ConfirmPassword = ({ navigation, route }) => {

    // Note: Recieving parameters...!
    let recieveEmail = route.params.params;
    // console.log(recieveEmail);

    // Note: Handeling states here...!
    const [formStates, setFormStates] = useState({
        email: recieveEmail,
        newpassword: '',
        confirmpassword: ''
    });

    const [validationHelper, setValidationHelper] = useState({
        passwordHelper: '',
        confirmpasswordHelper: ''
    });

    const [lockPassword, setLockPassword] = useState(true);
    const [confirmLockPassword, setConfirmLockPassword] = useState(true);
    const [submitDataLoader, setSubmitDataLoader] = useState(false);

    let { newpassword, confirmpassword } = formStates;
    let { newpasswordHelper, confirmpasswordHelper } = validationHelper;

    // Note : Handeling redux here...!
    const dispatch = useDispatch();

    // Note: Function to show message...!
    const showToast = (value) => {
        ToastAndroid.show(value, ToastAndroid.LONG);
    };

    // Note: Function to submit form...!
    const submitForm = () => {
        // console.log(formStates);
        if ((formStates.newpassword.length < 6)) {
            validationHelper.newpasswordHelper = "Password is required";

            setValidationHelper({
                ...validationHelper
            });

            hideWarnings();
        }

        else if ((formStates.confirmpassword != formStates.newpassword)) {
            validationHelper.confirmpasswordHelper = "Confirm Password should be same as Password";

            setValidationHelper({
                ...validationHelper
            });

            hideWarnings();
        }

        else {
            dispatch(resetPassword(formStates));
        }

    }

    // Note: This function will hide warning after 5 secs...!
    const hideWarnings = () => {
        setTimeout(() => {
            setValidationHelper(
                {
                    newpasswordHelper: "",
                    confirmpasswordHelper: "",
                }
            );
        }, 3000);
    }

    const clearAll = () => {
        setFormStates({
            newpassword: '',
            confirmpassword: ''
        });

        setValidationHelper({
                newpasswordHelper: "",
                confirmpasswordHelper: "",
            });
    }

    /***** Note: Function to reset password *****/
    const resetPassword = (data) => {
        return async () => {
            console.log(data);
            setSubmitDataLoader(true);

            let { email, newpassword, confirmpassword } = data;
            let api = `https://crm.shaker.com.sa/api/customers/SubmitEmailPasswordUpdate?email=${email}&newpassword=${newpassword}&confirmpassword=${confirmpassword}`;

            try {
                let response = await axios.post(api);
                console.log(response);

                if (response.data.message === "Password Update Succesfully") {
                    showToast("Password Updated Succesfully!");
                    setSubmitDataLoader(false);
                    clearAll();
                }
            }

            catch (error) {
                console.log(error.message);
            }
        }
    }

    return (
        <>
            <ImageBackground source={require('../../../assets/images/imgbg.png')} style={styles.bgImg}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.mainContainer}>
                        <View style={styles.contentContainer}>
                            <View style={styles.lockIcon}>
                                <Image source={require('../../../assets/images/lock.png')}></Image>
                            </View>
                            <Text style={styles.forgetPass}>New Password</Text>
           
                            <View style={styles.passwordContainer}>
                                <TextInput
                                    secureTextEntry={lockPassword}
                                    placeholder='New Password'
                                    color="black"
                                    value={newpassword || ""}
                                    onChangeText={(event) => { setFormStates({ ...formStates, newpassword: event }) }}
                                    style={{ flexGrow: 7 }}
                                // style={styles.userInput}
                                />

                                <Icon
                                    name={(lockPassword) ? ('eye-slash') : ('eye')}
                                    style={styles.iconContainer}
                                    onPress={() => setLockPassword(!lockPassword)}
                                />

                            </View>

                            <Text style={styles.validationText}> {newpasswordHelper} </Text>

          
                            <View style={styles.passwordContainer}>
                            <TextInput
                                    secureTextEntry={confirmLockPassword}
                                    placeholder='Confirm Password'
                                    color="black"
                                    value={confirmpassword || ""}
                                    onChangeText={(event) => { setFormStates({ ...formStates, confirmpassword: event }) }}
                                    style={{ flexGrow: 7 }}
                                // style={styles.userInput}
                                />

                                <Icon
                                    name={(confirmLockPassword) ? ('eye-slash') : ('eye')}
                                    style={styles.iconContainer}
                                    onPress={() => setConfirmLockPassword(!confirmLockPassword)}
                                />
                                </View>

                            <Text style={styles.validationText}> {confirmpasswordHelper} </Text>

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
                                            <Text style={styles.button}> Submit </Text>
                                        </TouchableOpacity>
                                    )
                            }

                            <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('Login')}>
                                <Text style={{ color: '#299371' }}>Back to login</Text>
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
        color: 'black',
        marginVertical: 10,
    },

    validationText: {
        color: "red",
        fontSize: 14,
        textAlign: "right",
        fontFamily: "NotoSans-Regular",
    },

    passwordContainer: {
        // backgroundColor : "lightblue",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        marginVertical: 10,
        borderColor: '#299371',
        borderRadius: 7
    },

    iconContainer: {
        color: '#299371',
        fontSize: 15,
        textAlign: "right",
        marginHorizontal: 10,
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

    login: {
        alignItems: 'center',
        paddingVertical: 7,
    }
})

export default ConfirmPassword;