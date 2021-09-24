import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Text, View, TouchableOpacity, TextInput, ImageBackground, StyleSheet, Dimensions, ScrollView, ToastAndroid, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
let deviceHeight = Dimensions.get('window').height;
import { LOG_IN_USER } from '../../store/constant/action-types';


const LoginScreen = ({ navigation }) => {


    //State to manage form field object
    const [formFieldStates, setFormFieldStates] = useState({
        userName: "",
        password: ""
    });
    //State to manage Validation Helper
    const [validationHelper, setValidationHelper] = useState({
        userNameHelper: "",
        passwordHelper: ""
    });
    const [lockPassword, setLockPassword] = useState(true);
    const [submitDataLoader, setSubmitDataLoader] = useState(false);

    // Destructing form field object
    let { userName, password } = formFieldStates;
    let { userNameHelper, passwordHelper } = validationHelper;

    // Note: Handelinfg redux here...!
    const dispatch = useDispatch();

    // Note: Function to show message...!
    const showToast = (value) => {
        ToastAndroid.show(value, ToastAndroid.LONG);
    };

    // (formFieldStates.password != 0)

    // Note: Function to 
    const userLogin = () => {
        let validMobileFormat = new RegExp(/^(05)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/);

        if (
            (!formFieldStates.userName.match(validMobileFormat))) {
            validationHelper.userNameHelper = "Invalid number format";

            setValidationHelper({
                ...validationHelper
            });

            hideWarnings();

            // console.log(formFieldStates);
            
        }

        else if (formFieldStates.password.length < 6) {
            validationHelper.passwordHelper = "Aleast 6 characters are Required";

            setValidationHelper({
                ...validationHelper
            });

            hideWarnings();
        }

        else {
            dispatch(logInUser(formFieldStates));
        }
    }

    // Note: This function will hide warning after 5 secs...!
    const hideWarnings = () => {
        setTimeout(() => {
            setValidationHelper(
                {            
                    userNameHelper: "",
                    passwordHelper: "",
                }
            );
        }, 3000);
    }

    /***** Note: LogInUser action function *****/
    const logInUser = (data) => {
        return async (dispatch) => {
            console.log(data);
            setSubmitDataLoader(true);

            let api = 'https://crm.shaker.com.sa/api/Customer/Login';

            try {
                let response = await axios.post(api, data);
                console.log(response);

                let requiredData = response.data.model;

                if (response.data.message === "Login Successfully") {
                    showToast('You have Logged In Successfully!');

                    dispatch({
                        type: LOG_IN_USER,
                        payload: requiredData
                    });
                }

                else {
                    showToast(response.data.message);
                    console.log(response.data.message);
                    setSubmitDataLoader(false);
                }
            }

            catch (error) {
                console.log(error);
            }
        }
    }

    // Note: When this component unmounted then this hook will run...!
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
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.mainContainer}>
                        <View style={styles.contentContainer}>
                            <Text style={styles.headingText}>Sign In</Text>

                            {/* Email Container */}

                            <View style={styles.passwordContainer}>
                                <TextInput
                                    placeholder='Mobile no'
                                    keyboardType="phone-pad"
                                    placeholderTextColor='silver'
                                    color="black"
                                    value={userName || ""}
                                    maxLength={10}
                                    onChangeText={(event) => { setFormFieldStates({ ...formFieldStates, userName: event }) }}
                                    style={{ flexGrow: 7 }}
                                >

                                </TextInput>
                                <TouchableOpacity style={{ flexGrow: 1 }}>
                                    <Icon name='phone' style={styles.iconContainer} />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.validationText}> {userNameHelper} </Text>

                            {/* Password Container */}

                            <View style={styles.passwordContainer}>
                                <TextInput
                                    secureTextEntry={lockPassword}
                                    placeholder='Password'
                                    placeholderTextColor='silver'
                                    color="black"
                                    value={password || ""}
                                    onChangeText={(event) => { setFormFieldStates({ ...formFieldStates, password: event }) }}
                                    style={{ flexGrow: 7 }}
                                // style={styles.userInput}
                                />

                                <Icon
                                    name={(lockPassword) ? ('eye-slash') : ('eye')}
                                    style={styles.iconContainer}
                                    onPress={() => setLockPassword(!lockPassword)}
                                />

                            </View>
                            <Text
                                style={styles.validationText}
                            >
                                {passwordHelper}
                            </Text>
                            <View style={styles.newUserContainer}>
                                <TouchableOpacity>
                                    <Text style={{ color: "#299371", fontFamily: 'NotoSans-Regular' }}></Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('Reset Password')}>
                                    <Text style={styles.forgetPassword}>Forget Password</Text>
                                </TouchableOpacity>
                            </View>


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
                                        <TouchableOpacity onPress={userLogin}>
                                            <Text style={styles.button}> Log In </Text>
                                        </TouchableOpacity>
                                    )
                            }




                            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                                <Text style={styles.buttonAccount}>Create an account</Text>
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
    containerBg: {
        flex: 1,
        resizeMode: 'contain'
    },
    contentContainer: {
        width: '90%',
        borderColor: "#299371",
        borderStyle: "solid",
        borderWidth: 1,
        marginHorizontal: '5%',
        borderRadius: 10,
        padding: 10,
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
    headingText: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 22,
        fontWeight: 'bold',
        // fontFamily: 'NotoSans-Bold',
    },

    userInput: {
        borderStyle: 'solid',
        borderColor: '#299371',
        borderWidth: 1,
        borderRadius: 7,
        marginVertical: 10,

    },
    validationText: {
        color: "red",
        fontSize: 14,
        textAlign: "right",
        fontFamily: "NotoSans-Regular",
    },

    newUserContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    button: {
        textAlign: 'center',
        backgroundColor: '#299371',
        color: 'white',
        paddingVertical: 12,
        margin: 10,
        marginVertical: 20,
        borderRadius: 8,
        fontSize: 16,
    },
    buttonAccount: {
        textAlign: 'center',
        // backgroundColor: '',
        color: '#299371',
        paddingBottom: 12,
        margin: 10,
        // marginVertical: 10,
        borderRadius: 8,
        fontSize: 16,
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
    forgetPassword: {
        color: "#299371",
        fontFamily: 'NotoSans-Regular',
        paddingTop: 4,
        paddingBottom: 5
    }
})

export default LoginScreen;