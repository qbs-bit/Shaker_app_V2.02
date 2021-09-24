import React, { useState } from 'react';
import axios from 'axios';
import { Text, View, ScrollView, ImageBackground, TouchableOpacity, TextInput, StyleSheet, Image, ActivityIndicator, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';


const ChangePassword = ({ navigation }) => {

    //Note: handing form field input states
    const [formFieldStates, setFormFieldStates] = useState({
        oldpass: "",
        newpassword: "",
        reEnterPass: ""
    });
    const [validationHelper, setValidationHelper] = useState({
        oldpassHelper: "",
        newpasswordHelper: "",
        reEnterPassHelper: ""
    });

    //Note: Destructing form field states so they can be called in the form..
    let { oldpass, newpassword, reEnterPass } = formFieldStates
    let { oldpassHelper, newpasswordHelper, reEnterPassHelper } = validationHelper
    const [lockPassword, setLockPassword] = useState(true);
    const [lockOldPassword, setLockOldPassword] = useState(true);
    const [lockConPassword, setLockConPassword] = useState(true);
    const [submitDataLoader, setSubmitDataLoader] = useState(false);

    // Note: Handeling redux here...!
    const dispatch = useDispatch();
    const availableUser = useSelector(({ authState }) => { return authState.authenticationUser });
    console.log(availableUser);

    // Note: Function to show message...!
    const showToast = (value) => {
        ToastAndroid.show(value, ToastAndroid.LONG);
    };

    const seePassword = () => {
        setLockPassword(!lockPassword);
    }

    const seeConPassword = () => {
        setLockConPassword(!lockConPassword);
    }

    const seeOldPassword = () => {
        setLockOldPassword(!lockOldPassword);
    }

    // Note: FUnction to submit form...!
    const submitForm = () => {
        if (formFieldStates.oldpass != availableUser.Password) {
            validationHelper.oldpassHelper = "Wrong Password";

            setValidationHelper({
                ...validationHelper
            });

            hideWarnings();
        }

        else if (formFieldStates.newpassword.length < 6) {
            validationHelper.newpasswordHelper = "New Password is required";

            setValidationHelper({
                ...validationHelper
            });

            hideWarnings();
        }

        else if (formFieldStates.newpassword != formFieldStates.reEnterPass) {

            validationHelper.reEnterPassHelper = "Password does not match with new password";

            setValidationHelper({
                ...validationHelper
            });

            hideWarnings();
        }

        else {
            let userPhoneNum = availableUser.MobilePhoneNo;
            formFieldStates.id = userPhoneNum;
            // console.log(formFieldStates);
            dispatch(updatePassword(formFieldStates));
        }
    }

    // Note: This function will hide warning after 5 secs...!
    const hideWarnings = () => {
        setTimeout(() => {
            setValidationHelper(
                {
                    oldpassHelper: "",
                    newpasswordHelper: "",
                    reEnterPassHelper: ""
                }
            );
        }, 3000);
    }

    const clearAll = () => {
        setFormFieldStates({
            oldpass: "",
            newpassword: "",
            reEnterPass: "",
        });

        setValidationHelper({
            oldpassHelper: "",
            newpasswordHelper: "",
            reEnterPassHelper: ""
        });
    }

    /***** Note: Function to update user *****/
    const updatePassword = (data) => {
        return async (dispatch) => {
            console.log(data);
            setSubmitDataLoader(true);

            let { id, oldpass, newpassword, reEnterPass } = data;
            let api = `https://crm.shaker.com.sa/api/customers/PasswordUpdate?id=${id}&oldpass=${oldpass}&newpassword=${newpassword}&reEnterPass=${reEnterPass}`;

            try {
                let response = await axios.post(api);
                console.log(response);

                if (response.data.message === "Password Update Succesfully") {
                    showToast("Password Updated Succesfully!");
                    setSubmitDataLoader(false);
                    clearAll()
                }

                else {
                    showToast(response.data.message);
                    console.log(response.data.message);
                    setSubmitDataLoader(false);
                }
            }

            catch (error) {
                console.log(error.message);
                setSubmitDataLoader(false);
            }
        }
    }

    return (
        <>

            <ImageBackground source={require('../../../assets/images/imgbg.png')} style={styles.bgImg}>
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Home')}
                        >
                            <Icon
                                name="arrow-left"
                                size={20}
                                color="white"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon
                                name="bell"
                                size={20}
                                color="white"
                            />
                        </TouchableOpacity>

                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.mainContainer}>
                        <View style={styles.contentContainer}>
                            <View style={styles.lockIcon}>
                                <Image source={require('../../../assets/images/lock.png')}></Image>
                            </View>
                            <View style={styles.passwordContainer}>
                                <TextInput
                                    secureTextEntry={lockOldPassword}
                                    placeholder='Old Password'
                                    placeholderTextColor='silver'
                                    // keyboardType='number-pad'
                                    color="black"
                                    value={oldpass || ""}
                                    onChangeText={(event) => { setFormFieldStates({ ...formFieldStates, oldpass: event }) }}
                                    style={{ flexGrow: 7 }}
                                // style={styles.userInput}
                                />
                                {
                                    (lockOldPassword)
                                        ?
                                        (
                                            <Icon
                                                name="eye-slash"
                                                style={styles.iconContainer}
                                                onPress={seeOldPassword}
                                            />
                                        )
                                        :
                                        (
                                            <Icon
                                                name="eye"
                                                style={styles.iconContainer}
                                                onPress={seeOldPassword}
                                            />
                                        )
                                }
                            </View>

                            <Text style={styles.validationText}> {oldpassHelper} </Text>

                            <View style={styles.passwordContainer}>
                                <TextInput
                                    secureTextEntry={lockPassword}
                                    placeholder='New Password'
                                    placeholderTextColor='silver'
                                    // keyboardType='number-pad'
                                    color="black"
                                    value={newpassword || ""}
                                    onChangeText={(event) => { setFormFieldStates({ ...formFieldStates, newpassword: event }) }}
                                    style={{ flexGrow: 7 }}
                                // style={styles.userInput}
                                />
                                {
                                    (lockPassword)
                                        ?
                                        (
                                            <Icon
                                                name="eye-slash"
                                                style={styles.iconContainer}
                                                onPress={seePassword}
                                            />
                                        )
                                        :
                                        (
                                            <Icon
                                                name="eye"
                                                style={styles.iconContainer}
                                                onPress={seePassword}
                                            />
                                        )
                                }
                            </View>
                            <Text style={styles.validationText}> {newpasswordHelper} </Text>
                            <View style={styles.passwordContainer}>
                                <TextInput
                                    secureTextEntry={lockConPassword}
                                    placeholder='Confirm Password'
                                    placeholderTextColor='silver'
                                    // keyboardType='number-pad'
                                    color="black"
                                    value={reEnterPass || ""}
                                    onChangeText={(event) => { setFormFieldStates({ ...formFieldStates, reEnterPass: event }) }}
                                    style={{ flexGrow: 7 }}
                                // style={styles.userInput}
                                />
                                {
                                    (lockConPassword)
                                        ?
                                        (
                                            <Icon
                                                name="eye-slash"
                                                style={styles.iconContainer}
                                                onPress={seeConPassword}
                                            />
                                        )
                                        :
                                        (
                                            <Icon
                                                name="eye"
                                                style={styles.iconContainer}
                                                onPress={seeConPassword}
                                            />
                                        )
                                }
                            </View>
                            <Text style={styles.validationText}> {reEnterPassHelper} </Text>
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
                                            <Text style={styles.button}> Update </Text>
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
        paddingVertical: '15%',
        // height: deviceHeight,
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
        paddingHorizontal: 7,
    },

    button: {
        textAlign: 'center',
        backgroundColor: '#299371',
        color: 'white',
        paddingVertical: 12,
        marginVertical: 20,
        borderRadius: 8,
        fontSize: 16,
    },
    container: {
        backgroundColor: '#299371',
        borderRadius: 2,
        padding: 5,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        //textAlign: 'center',
        fontSize: 10,
        marginHorizontal: 10,
        marginVertical: 10,
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
    validationText: {
        color: "red",
        fontSize: 14,
        textAlign: "right",
        fontFamily: "NotoSans-Regular",
    },

})

export default ChangePassword;