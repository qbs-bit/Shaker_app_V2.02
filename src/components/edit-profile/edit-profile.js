import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, ToastAndroid, ActivityIndicator } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from "../../store/action/app-actions";

// Note : Importing dropdown items...!
import { citiesList } from "../authorization/city-list";
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
    from "../authorization/area-list";
import { areaInfoArr } from "../authorization/area-info";
import { cityInfoArr } from '../complain-form/other-files/city-info'
import { locationArray } from "../areas/areas-list";

// Note: Floor array...!
let floorArr = ['Floor 1', 'Floor 2', 'Floor 3', 'Floor 4', 'Floor 5', 'Floor 5+'];

const EditProfile = ({ navigation, route }) => {

    // Note: Recieving parameters...!
    let recieveParams = route.params.userProfileData;
    console.log('User data recieved for updating purpose:', recieveParams);
    let { CustomerName, Email, HouseNumber, Streetno, Floorno, MobilePhoneNo, SubRegionID, LocationID } = recieveParams;

    // Note: Handeling states here...!
    const [userName, setUserName] = useState(CustomerName);
    const [mobileNum, setMobileNum] = useState(MobilePhoneNo);
    const [email, setEmail] = useState(Email);
    const [houseNum, setHouseNum] = useState(HouseNumber);
    const [streetNum, setStreetNum] = useState(Streetno);
    const [floorValue, setFloorValue] = useState("");
    const [cityValue, setCityValue] = useState("");
    const [destrictValue, setDestrictValue] = useState("");
    const [destrictList, setDestrictList] = useState([]);
    const [targetCityObj, setTargetCityObj] = useState(null);
    const [targetDestrictObj, setTargetDestrictObj] = useState(null);

    // Note: Previous data states...!
    const [prevCityObj, setPrevCityObj] = useState(null);
    const [prevAreaObj, setPrevAreaObj] = useState(null);

    const [validationHelper, setValidationHelper] = useState({
        userNameHelper: "",
        mobileNumHelper: "",
        houseNumHelper: "",
        streetNumHelper: ""
    })

    let { userNameHelper, mobileNumHelper, houseNumHelper, streetNumHelper } = validationHelper;

    // Note: This hook will run when it get SubRegionID...!
    useEffect(() => {
        let cityFlag = false;
        let cityFound = null;
        let cityId = SubRegionID;
        cityId = cityId.replace(/\s+/g, '');
        // console.log(cityId);

        for (let i = 0; i < cityInfoArr.length; i++) {
            // console.log(cityInfoArr[i]);

            if (cityInfoArr[i].subRegionId === cityId) {
                cityFlag = true;
                cityFound = cityInfoArr[i];
                setPrevCityObj(cityInfoArr[i]);
                break;
            }
        }

        console.log(cityFound, 'City Data Found!');

        // NOTE: Now i am matching previous city id with all cities id's...!
        let arrFlag = false;
        let requiredArrFound = null;

        for (let i = 0; i < locationArray.length; i++) {
            // console.log(locationArray[i]);

            if (cityFound.subRegionId == locationArray[i].id.toString()) {
                arrFlag = true;
                requiredArrFound = locationArray[i].arr;
                break;
            }
        }
        console.log(requiredArrFound, 'Required Data Found!');

        // NOTE: Functionality to get area...!
        let areaFlag = false;
        let areaFound = null;

        for (let i = 0; i < requiredArrFound.length; i++) {
            // console.log(requiredArrFound[i]);

            if (requiredArrFound[i].locationId === LocationID) {
                areaFlag = true;
                areaFound = requiredArrFound[i];
                setPrevAreaObj(requiredArrFound[i]);
                break;
            }
        }
        console.log(areaFound, 'Area Data Found!');

    }, [SubRegionID]);

    // Note: Handeling redux here...!
    const dispatch = useDispatch();

    // Note: Fetching logged in user...!
    let availableUser = useSelector(({ authState }) => { return authState.authenticationUser });
    console.log('User:', availableUser);

    // NOTE: Function to handle city dropdown list...!
    useEffect(() => {
        let targetCity = cityValue.cityValue;

        if (targetCity === 'RIYADH') {
            setDestrictList(riyadhList);
        }

        else if (targetCity === 'AL KHOBAR') {
            setDestrictList(alkhobarList);
        }

        else if (targetCity === 'AL HASA') {
            setDestrictList(alhasaList);
        }

        else if (targetCity === 'JUBAIL') {
            setDestrictList(jubailList);
        }

        else if (targetCity === 'HAFIR BATIN') {
            setDestrictList(hafirbatinList);
        }

        else if (targetCity === 'KHAMIS') {
            setDestrictList(khamisList);
        }

        else if (targetCity === 'JIZAN') {
            setDestrictList(jizanList);
        }

        else if (targetCity === 'NIJRAN') {
            setDestrictList(nijranList);
        }

        else if (targetCity === 'AL BAHA') {
            setDestrictList(albahaList);
        }

        else if (targetCity === 'BISHA') {
            setDestrictList(bishaList);
        }

        else if (targetCity === 'QUNFUTAH') {
            setDestrictList(qunfutahList);
        }

        else if (targetCity === 'QASSIM') {
            setDestrictList(qassimList);
        }

        else if (targetCity === 'AL KHARJ') {
            setDestrictList(alKharjList);
        }

        else if (targetCity === 'JEDDAH') {
            setDestrictList(jeddahList);
        }

        else if (targetCity === 'MAKKAH') {
            setDestrictList(makkahList);
        }

        else if (targetCity === 'MADINA') {
            setDestrictList(madinaList);
        }

        else if (targetCity === 'TABUK') {
            setDestrictList(tabukList);
        }

        else if (targetCity === 'YANBU') {
            setDestrictList(yanbuList);
        }

        else if (targetCity === 'TAIF') {
            setDestrictList(taifList);
        }

        else {
            setDestrictList([]);
        }

    }, [cityValue.cityValue]);

    // NOTE: Function to handle get city object...!
    useEffect(() => {
        let targetCity = cityValue.cityValue;
        let cityFlag = false;
        let cityFound;

        for (let i = 0; i < cityInfoArr.length; i++) {
            // console.log(cityInfoArr[i]);

            if (targetCity === cityInfoArr[i].subRegionName) {
                cityFlag = true;
                cityFound = cityInfoArr[i];
                setTargetCityObj(cityFound);
                break;
            }
        }
        console.log(cityFound);

    }, [cityValue.cityValue]);

    // Note: This hook will run to get district object ...!
    useEffect(() => {
        let targetDestrict = destrictValue.destrictValue
        let destrictFlag = false;
        let destrictFound;

        for (let i = 0; i < areaInfoArr.length; i++) {
            // console.log(areaInfoArr[i]);

            if (targetDestrict === areaInfoArr[i].locationName) {
                destrictFlag = true;
                destrictFound = areaInfoArr[i];
                setTargetDestrictObj(destrictFound);
                break;
            }
        }
        console.log(destrictFound);

    }, [destrictValue.destrictValue]);

    // Note: Function to update user profile...!
    const submitForm = () => {
        let validMobileFormat = new RegExp(/^(05)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/);

        if (userName === "") {
            validationHelper.userNameHelper = 'User name is required';

            setValidationHelper({
                ...validationHelper
            });

            hideWarnings();
        }

        else if (!mobileNum.match(validMobileFormat)) {
            validationHelper.mobileNumHelper = "Invalid number format";

            setValidationHelper({
                ...validationHelper
            });

            hideWarnings();
        }

        else if (houseNum === "") {
            validationHelper.houseNumHelper = 'House name is required';

            setValidationHelper({
                ...validationHelper
            });

            hideWarnings();
        }

        else if (streetNum === "") {
            validationHelper.streetNumHelper = 'Street num is required';

            setValidationHelper({
                ...validationHelper
            });

            hideWarnings();
        }

        else {
            let updateUserProfileObj = {
                id: availableUser.MobilePhoneNo,
                name: userName,
                mobileNo: mobileNum,
                houseno: houseNum,
                street: streetNum,
                email: (email === "") ? (Email) : (email),
                floor: (floorValue === "") ? (Floorno) : (floorValue.floorValue),
                city: (cityValue === "") ? (SubRegionID) : (targetCityObj.subRegionId),
                district: (destrictValue === "") ? (LocationID) : (targetDestrictObj.locationId)
            }

            // console.log(updateUserProfileObj);
            dispatch(updateUserProfile(updateUserProfileObj));
        }
    }

    // Note: This function will hide warning after 5 secs...!
    const hideWarnings = () => {
        setTimeout(() => {
            setValidationHelper(
                {
                    userNameHelper: "",
                    mobileNumHelper: "",
                    houseNumHelper: "",
                    streetNumHelper: "",
                }
            );
        }, 3000);
    }

    return (
        <>
            <ImageBackground source={require('../../../assets/images/homebg.png')} style={styles.bgImg}>
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
                        <View style={styles.subContainer}>
                            <Text style={styles.headingText}>
                                Update Your Profile
                            </Text>

                            <Text style={styles.text}> Name </Text>

                            <TextInput
                                style={styles.input}
                                value={userName}
                                onChangeText={(event) => setUserName(event)}
                            />

                            <Text style={styles.validationText}> {userNameHelper} </Text>

                            <Text style={styles.label}>Contact Info</Text>

                            <Text style={styles.text}>Mobile number</Text>
                            <TextInput
                                style={styles.input}
                                value={mobileNum}
                                maxLength={10}
                                keyboardType={'number-pad'}
                                onChangeText={(event) => setMobileNum(event)}
                            />
                            <Text style={styles.validationText}> {mobileNumHelper} </Text>

                            <Text style={styles.text}>Email Address</Text>

                            <TextInput
                                style={styles.input}
                                value={email}
                                keyboardType={'email-address'}
                                onChangeText={(event) => setEmail(event)}
                            />

                            <Text style={styles.label}>Address Info</Text>

                            <Text style={styles.text}>House Number</Text>

                            <TextInput
                                style={styles.input}
                                value={houseNum}
                                onChangeText={(event) => setHouseNum(event)}
                                maxLength={10}
                            />

                            <Text style={styles.validationText}> {houseNumHelper} </Text>

                            <Text style={styles.text}>Street</Text>

                            <TextInput
                                style={styles.input}
                                value={streetNum}
                                onChangeText={(event) => setStreetNum(event)}
                            />

                            <Text style={styles.validationText}> {streetNumHelper} </Text>

                            <Text style={styles.text}>Floor</Text>
                            <ModalDropdown
                                // defaultValue="Select Floor No"
                                defaultValue={Floorno}
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
                                    marginVertical: 5
                                }}
                            />

                            <Text style={styles.text}>City</Text>
                            <ModalDropdown
                                // defaultValue="Select City"
                                defaultValue={(prevCityObj != null) ? (prevCityObj.subRegionName) : ('Loading...')}
                                isFullWidth={true}
                                options={citiesList}
                                onSelect={(value) => setCityValue({ cityValue: citiesList[value] })}
                                dropdownTextStyle={{ color: "black", fontSize: 15 }}
                                textStyle={{
                                    color: 'gray',
                                    borderWidth: 1,
                                    borderColor: '#299371',
                                    width: '100%',
                                    borderRadius: 5,
                                    padding: 8,
                                    fontSize: 15,
                                    marginVertical: 5
                                }}
                            />


                            <Text style={styles.text}>District</Text>
                            <ModalDropdown
                                // defaultValue="Select Destrict"
                                defaultValue={(prevAreaObj != null) ? (prevAreaObj.locationName) : ('Loading...')}
                                isFullWidth={true}
                                options={destrictList}
                                onSelect={(value) => setDestrictValue({ destrictValue: destrictList[value] })}
                                dropdownTextStyle={{ color: "black", fontSize: 15 }}
                                textStyle={{
                                    color: 'gray',
                                    borderWidth: 1,
                                    borderColor: '#299371',
                                    width: '100%',
                                    borderRadius: 5,
                                    padding: 8,
                                    fontSize: 15,
                                    marginVertical: 5
                                }}
                            />

                            <TouchableOpacity
                                style={styles.btnContainer}
                                onPress={submitForm}
                            >
                                <Text style={styles.btnText}> Update </Text>
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
        // height: deviceHeight,
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 20
    },
    subContainer: {
        borderColor: '#299371',
        borderWidth: 1,
        borderRadius: 7,
        backgroundColor: 'white',
        width: '95%',
        padding: 15,
    },
    label: {
        fontFamily: 'NotoSans-Bold',
        marginVertical: 10,
        fontWeight: 'bold',
        fontSize: 16,

    },
    input: {
        borderColor: '#299371',
        borderWidth: 1,
        borderRadius: 7,
        marginVertical: 3,
        color: 'black'
    },
    text: {
        fontFamily: 'NoboSans-Regular',
        marginVertical: 4,
    },
    userImg: {
        marginHorizontal: '36%'
    },
    iconStyle: {
        fontSize: 70,
        textAlign: 'center',
        color: '#299371',
    },
    cameraStyle: {
        fontSize: 40,
        textAlign: 'center',
        color: '#299371',
    },
    dropdownContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#299371',
        padding: 10,
    },
    iconContainer: {
        color: '#299371',
        fontSize: 15,
    },

    validationText: {
        color: "red",
        fontSize: 14,
        textAlign: "right",
        fontFamily: "NotoSans-Regular",
    },

    btnContainer: {
        backgroundColor: '#299371',
        padding: 10,
        borderRadius: 7,
        width: '100%',
        alignItems: 'center',
        marginVertical: '10%'
    },
    btnText: {
        color: 'white',
        fontFamily: 'NotoSans-Regular'
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
    headingText: {
        fontWeight: 'bold',
        fontSize: 16,
    }
})

export default EditProfile;