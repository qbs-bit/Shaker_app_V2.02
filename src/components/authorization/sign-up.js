// Note: SignUp component...!

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Text, View, TouchableOpacity, TextInput, ImageBackground, StyleSheet, ScrollView, ToastAndroid, ActivityIndicator, BackHandler } from 'react-native';
import axios from "axios";
import Icon from 'react-native-vector-icons/FontAwesome5';
import ModalDropdown from "react-native-modal-dropdown";
import RadioForm from "react-native-simple-radio-button";
import { citiesList } from "./city-list";
import {
    riyadhList,
    alKharjList,
    jeddahList,
    tabukList,
    taifList,
    yanbuList,
    makkahList,
    madinaList,
    alkhobarList,
    jubailList,
    alhasaList,
    hafirbatinList,
    khamisList,
    jizanList,
    nijranList,
    albahaList,
    bishaList,
    qunfutahList,
    qassimList
}
    from "./area-list";
import { areaInfoArr } from "./area-info";

// Note: Floor array...!
let floorArr = ['Floor 1', 'Floor 2', 'Floor 3', 'Floor 4', 'Floor 5', 'Floor 5+'];

//Note: Array for Title radio button

let titleArray = [
    { label: 'Mr', value: 0 },
    { label: 'Mrs', value: 1 }
];

const SignupScreen = ({ navigation }) => {

    // Note: Handling states here...!
    const [formFieldStates, setFormFieldStates] = useState({
        email: "",
        password: "",
        confirmpassword: "",
        name: "",
        houseNum: "",
        streetNum: "",
        num: ""
    });

    const [validationHelper, setValidationHelper] = useState({
        emailHelper: "",
        passwordHelper: "",
        confirmpasswordHelper: "",
        nameHelper: "",
        houseNumHelper: "",
        streetNumHelper: "",
        numHelper: ""
    });

    const [floorValue, setFloorValue] = useState("");
    const [lockPassword, setLockPassword] = useState(true);
    const [lockConPassword, setLockConPassword] = useState(true);
    const [cityValue, setCityValue] = useState("");
    const [areaList, setAreaList] = useState([]);
    const [areaValue, setAreaValue] = useState("");
    const [titleState, setTitleState] = useState(0);
    const [targetAreaObj, setTargetAreaObj] = useState(null);
    const [submitDataLoader, setSubmitDataLoader] = useState(false);

    // Note: Handeling redux here...!
    const dispatch = useDispatch();

    // Note: Function to show message...!
    const showToast = (value) => {
        ToastAndroid.show(value, ToastAndroid.LONG);
    };

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

    // NOTE: Function to handle area dropdown list...!
    useEffect(() => {
        let targetCity = cityValue.cityValue;

        if (targetCity === 'RIYADH') {
            setAreaList(riyadhList);
        }

        else if (targetCity === 'AL KHOBAR') {
            setAreaList(alkhobarList);
        }

        else if (targetCity === 'AL HASA') {
            setAreaList(alhasaList);
        }

        else if (targetCity === 'JUBAIL') {
            setAreaList(jubailList);
        }

        else if (targetCity === 'HAFIR BATIN') {
            setAreaList(hafirbatinList);
        }

        else if (targetCity === 'KHAMIS') {
            setAreaList(khamisList);
        }

        else if (targetCity === 'JIZAN') {
            setAreaList(jizanList);
        }

        else if (targetCity === 'NIJRAN') {
            setAreaList(nijranList);
        }

        else if (targetCity === 'AL BAHA') {
            setAreaList(albahaList);
        }

        else if (targetCity === 'BISHA') {
            setAreaList(bishaList);
        }

        else if (targetCity === 'QUNFUTAH') {
            setAreaList(qunfutahList);
        }

        else if (targetCity === 'QASSIM') {
            setAreaList(qassimList);
        }

        else if (targetCity === 'AL KHARJ') {
            setAreaList(alKharjList);
        }

        else if (targetCity === 'JEDDAH') {
            setAreaList(jeddahList);
        }

        else if (targetCity === 'MAKKAH') {
            setAreaList(makkahList);
        }

        else if (targetCity === 'MADINA') {
            setAreaList(madinaList);
        }

        else if (targetCity === 'TABUK') {
            setAreaList(tabukList);
        }

        else if (targetCity === 'YANBU') {
            setAreaList(yanbuList);
        }

        else if (targetCity === 'TAIF') {
            setAreaList(taifList);
        }

        else {
            setAreaList([]);
        }
    }, [cityValue.cityValue]);

    // Note: This hook will run to generate area location code...!
    useEffect(() => {
        let targetArea = areaValue.areaValue;
        let areaObjFound = false;
        let getAreaObj;

        for (let i = 0; i < areaInfoArr.length; i++) {
            // console.log(areaInfoArr[i]);

            if (targetArea === areaInfoArr[i].locationName) {
                areaObjFound = true;
                getAreaObj = areaInfoArr[i];
                setTargetAreaObj(getAreaObj);
                break;
            }
        }
        console.log(getAreaObj);
    }, [areaValue]);

    // Note: Destructing form field states so they can be called in the form...!
    let {
        email,
        password,
        confirmpassword,
        name,
        houseNum,
        streetNum,
        num
    } = formFieldStates

    // Note: Destructing validation helper so they can be called later...!
    let {
        emailHelper,
        passwordHelper,
        confirmpasswordHelper,
        nameHelper,
        houseNumHelper,
        streetNumHelper,
        numHelper
    } = validationHelper

    // Note: Function to sign up user...!
    const userSignUp = () => {

        formFieldStates.title = (titleState.titleState === 0) ? ('Mr') : ('Mrs');

        let validEmailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var validNumberFormat = new RegExp(/^(05)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/);

        if (formFieldStates.name === "") {
            validationHelper.nameHelper = "Name is required";

            setValidationHelper({
                ...validationHelper
            });

            hideWarnings();
        }

        else if (
            (!formFieldStates.num.match(validNumberFormat))) {
            validationHelper.numHelper = "Invalid number format";

            setValidationHelper({
                ...validationHelper
            });

            hideWarnings();
        }

        else if (!formFieldStates.email.match(validEmailFormat)) {
            validationHelper.emailHelper = "Invalid Email Address";

            // Note: Set state error states...!
            setValidationHelper({
                ...validationHelper
            });

            hideWarnings();
        }

        else if (formFieldStates.password.length < 6) {
            validationHelper.passwordHelper = "Aleast 6 characters are Required";

            setValidationHelper({
                ...validationHelper
            });

            hideWarnings();
        }

        else if (formFieldStates.password != formFieldStates.confirmpassword) {
            validationHelper.confirmpasswordHelper = "Confirm Password should be same as Password";

            setValidationHelper({
                ...validationHelper
            });

            hideWarnings();
        }

        else if (formFieldStates.houseNum === "") {
            validationHelper.houseNumHelper = "House No is required";

            setValidationHelper({
                ...validationHelper
            });

            hideWarnings();
        }

        else if (formFieldStates.streetNum === "") {
            validationHelper.streetNumHelper = "Street No is required";

            setValidationHelper({
                ...validationHelper
            });

            hideWarnings();
        }

        else if (floorValue === "") {
            showToast('Please select floor');
        }

        else if (cityValue === "") {
            showToast('Please select city');
        }

        else if (areaValue === "") {
            showToast('Please select district');
        }

        else {
            let updateObj = {
                Name: formFieldStates.name,
                Password: formFieldStates.password,
                Email: formFieldStates.email,
                PhoneNumber: formFieldStates.num,
                houseno: formFieldStates.houseNum,
                Strtno: formFieldStates.streetNum,
                Flrno: floorValue.floorValue,
                Title: formFieldStates.title,
                BusinessUnit: "1000",
                Location: targetAreaObj.locationId,
                MbApp: true
            }
            // console.log(updateObj);
            dispatch(signUpUser(updateObj));
        }
    }

    // Note: This function will hide warning after 5 secs...!
    const hideWarnings = () => {
        setTimeout(() => {
            setValidationHelper(
                {
                    emailHelper: "",
                    passwordHelper: "",
                    confirmpasswordHelper: "",
                    nameHelper: "",
                    houseNumHelper: "",
                    streetNumHelper: "",
                    numHelper: ""
                }
            );
        }, 3000);
    }

    /***** Note: SignUpUser action function *****/
    const signUpUser = (data) => {
        return async () => {
            console.log(data, 'User created successfully!');
            setSubmitDataLoader(true);

            let api = 'https://crm.shaker.com.sa/api/customers/registerCustomer';

            try {
                let response = await axios.post(api, data);
                console.log(response);

                if (response.data.message === "Customer Added Succesfully") {
                    showToast('You have Signed Up Successfully!');

                    setTimeout(() => {
                        navigation.navigate('Login');
                    }, 3000);
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

                            <Text style={styles.headingText}>Sign Up</Text>

                            {/* Note: Title Radio Button */}

                            <View style={styles.radioBtnContainer}>
                                <View style={{ margin: 5 }}>
                                    <Text style={styles.inputHeaderText}>
                                        Select Title
                                    </Text>
                                </View>
                                <RadioForm style={{ marginHorizontal: 5 }}
                                    radio_props={titleArray}
                                    initial={0}
                                    onPress={(value) => { setTitleState({ titleState: value }) }}
                                    formHorizontal={true}
                                    animation={true}
                                    buttonColor={'#299371'}
                                    selectedButtonColor='#299371'
                                    buttonSize={12}
                                    labelStyle={{
                                        color: "#299371",
                                        fontSize: 16,
                                        fontFamily: "sans-serif",
                                        paddingHorizontal: 10
                                    }}
                                />
                            </View>

                            {/* Note: Name field area */}
                            <TextInput
                                placeholder='Name*'
                                placeholderTextColor='silver'
                                value={name || ""}
                                onChangeText={(event) => { setFormFieldStates({ ...formFieldStates, name: event }) }}
                                style={styles.userInput}
                            />
                            <Text style={styles.validationText}> {nameHelper} </Text>

                            {/* Note: Mobile number field area */}
                            {/* <TextInput
                                placeholder='0575558343 *'
                                placeholderTextColor='silver'
                                keyboardType="phone-pad"
                                value={num || ""}
                                onChangeText={(event) => { setFormFieldStates({ ...formFieldStates, num: event }) }}
                                style={styles.userInput}
                            /> */}
                            <TextInput
                                placeholder='0575558343 *'
                                keyboardType="phone-pad"
                                placeholderTextColor='silver'
                                value={num || ""}
                                maxLength={10}
                                onChangeText={(event) => { setFormFieldStates({ ...formFieldStates, num: event }) }}
                                style={styles.userInput}
                            />
                            <Text style={styles.validationText}> {numHelper} </Text>

                            {/* Note: Email field area */}
                            <View style={styles.passwordContainer}>
                                <TextInput
                                    placeholder='Email*'
                                    placeholderTextColor='silver'
                                    color='black'
                                    // style={styles.userInput}
                                    value={email || ""}
                                    onChangeText={(event) => { setFormFieldStates({ ...formFieldStates, email: event }) }}
                                    style={{ flexGrow: 7 }}
                                >

                                </TextInput>
                                <Icon name='envelope' style={styles.iconContainer} />
                            </View>
                            <Text style={styles.validationText}> {emailHelper} </Text>

                            {/* Note: Password field area */}
                            <View style={styles.passwordContainer}>
                                <TextInput
                                    secureTextEntry={lockPassword}
                                    placeholder='Password'
                                    placeholderTextColor='silver'
                                    color='black'
                                    value={password || ""}
                                    onChangeText={(event) => { setFormFieldStates({ ...formFieldStates, password: event }) }}
                                    style={{ flexGrow: 7 }}
                                />
                                <Icon
                                    name={(lockPassword) ? ('eye-slash') : ('eye')}
                                    style={styles.iconContainer}
                                    onPress={() => setLockPassword(!lockPassword)}
                                />
                            </View>
                            <Text style={styles.validationText}> {passwordHelper} </Text>


                            {/* Note: Confirm password field area */}
                            <View style={styles.passwordContainer}>
                                <TextInput
                                    secureTextEntry={lockConPassword}
                                    placeholder='Confirm Password'
                                    placeholderTextColor='silver'
                                    color='black'
                                    value={confirmpassword || ""}
                                    onChangeText={(event) => { setFormFieldStates({ ...formFieldStates, confirmpassword: event }) }}
                                    style={{ flexGrow: 7 }}
                                />
                                <Icon
                                    name={(lockConPassword) ? ('eye-slash') : ('eye')}
                                    style={styles.iconContainer}
                                    onPress={() => setLockConPassword(!lockConPassword)}
                                />
                            </View>
                            <Text style={styles.validationText}> {confirmpasswordHelper} </Text>

                            {/* Note: House No field area */}
                            <TextInput
                                placeholder='House No'
                                placeholderTextColor='silver'
                                color='black'
                                value={houseNum || ""}
                                onChangeText={(event) => { setFormFieldStates({ ...formFieldStates, houseNum: event }) }}
                                maxLength={10}
                                style={styles.userInput}
                            />
                            <Text style={styles.validationText}> {houseNumHelper} </Text>

                            {/* Note: Street No field area */}
                            <TextInput
                                placeholder='Street No'
                                placeholderTextColor='silver'
                                color='black'
                                value={streetNum || ""}
                                onChangeText={(event) => { setFormFieldStates({ ...formFieldStates, streetNum: event }) }}
                                style={styles.userInput}
                            />
                            <Text style={styles.validationText}> {streetNumHelper} </Text>

                            {/* Note: Floor dropdown */}
                            <Text style={styles.text}>
                                Select Floor
                            </Text>
                            <ModalDropdown
                                defaultValue="Select Floor No"
                                isFullWidth={true}
                                options={floorArr}
                                onSelect={(value) => setFloorValue({ floorValue: floorArr[value] })}
                                dropdownTextStyle={{ color: "black", fontSize: 15 }}
                                textStyle={{
                                    color: 'gray',
                                    borderWidth: 1,
                                    borderColor: '#299371',
                                    width: '100%',
                                    borderRadius: 5,
                                    padding: 8,
                                    fontSize: 15,
                                    marginVertical: 5,
                                    backgroundColor: "whitesmoke"
                                }}
                            />

                            {/* Note: City dropdown list */}
                            <View>
                                <Text style={styles.textContainer}> Select City </Text>
                                <ModalDropdown
                                    options={citiesList}
                                    defaultValue="Select City"
                                    onSelect={(value) => setCityValue({ cityValue: citiesList[value] })}
                                    isFullWidth={true}
                                    dropdownTextStyle={{ color: "black", fontSize: 15 }}
                                    textStyle={{
                                        color: 'gray',
                                        borderWidth: 1,
                                        borderColor: '#299371',
                                        width: '100%',
                                        borderRadius: 5,
                                        padding: 8,
                                        backgroundColor: 'whitesmoke',
                                        fontSize: 15,
                                        marginVertical: 5,
                                    }}
                                />
                            </View>

                            {/* Note: Area dropdown list */}
                            <View>
                                <Text style={styles.textContainer}> Select District </Text>
                                <ModalDropdown
                                    options={areaList}
                                    defaultValue='Select District'
                                    onSelect={(value) => setAreaValue({ areaValue: areaList[value] })}
                                    isFullWidth={true}
                                    dropdownTextStyle={{ color: "black", fontSize: 15 }}
                                    textStyle={{
                                        color: 'gray',
                                        borderWidth: 1,
                                        borderColor: '#299371',
                                        width: '100%',
                                        borderRadius: 5,
                                        padding: 8,
                                        fontSize: 15,
                                        backgroundColor: 'whitesmoke',
                                        marginVertical: 5
                                    }}
                                />
                            </View>

                            <View style={styles.newUserContainer}>
                                <Text style={{ fontFamily: 'NotoSans-Bold' }}> Already an user?</Text>

                                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                    <Text style={{ color: "#299371", fontFamily: 'NotoSans-Regular' }}> Sign In</Text>
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
                                        <TouchableOpacity onPress={userSignUp}>
                                            <Text style={styles.button}>Sign Up</Text>
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
        paddingVertical: 20,
        paddingHorizontal: '5%'
    },

    contentContainer: {
        borderColor: "#299371",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
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
        fontFamily: 'NotoSans-Bold',
    },

    userInput: {
        borderStyle: 'solid',
        borderColor: '#299371',
        borderWidth: 1,
        color: 'black',
        borderRadius: 7,
        marginVertical: 10,

    },

    newUserContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
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
        fontFamily: 'NotoSans-Regular',
    },

    passwordContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#299371',
        borderRadius: 7,
        marginVertical: 10,
    },

    iconContainer: {
        fontSize: 15,
        color: '#299371',
        textAlign: 'right',
        marginHorizontal: 10,
        padding: 5,
        // backgroundColor:'yellow'
    },

    locationIconContainer: {
        fontSize: 25,
        color: '#299371',
        marginHorizontal: 10,
    },

    validationText: {
        color: "red",
        fontSize: 14,
        textAlign: "right",
        fontFamily: "NotoSans-Regular",
    },

    textContainer: {
        fontSize: 15,
    },

    radioBtnContainer: {
        // backgroundColor: "yellow",
        borderStyle: 'solid',
        borderColor: '#299371',
        // borderWidth: 1,
        color: 'black',
        borderRadius: 7,
        marginVertical: 10,
    },
    inputHeaderText: {
        fontSize: 14
    }
})

export default SignupScreen;