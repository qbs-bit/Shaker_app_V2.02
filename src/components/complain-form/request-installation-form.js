// Note: RequestInstallationForm component...!

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { View, ScrollView, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput, ToastAndroid } from 'react-native';
import axios from "axios";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SimpleAccordion } from 'react-native-simple-accordion';
import ModalDropdown from 'react-native-modal-dropdown';
import {
    updatebrandListArr,
    brandInfoArr
}
    from "./other-files/brand-list";
import {
    lgList,
    arList,
    idList,
    miList,
    mtList,
    biList,
    kaList,
    shList,
    boList,
    paList,
    categoryInfoArr
}
    from "./other-files/category-list";
import { cityInfoArr } from "./other-files/city-info";

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
import { locationArray } from '../areas/areas-list';

let timeArr = ['empty'];

const RequestInstallationForm = ({ navigation, route }) => {

    // Note: Recieving parameters...!
    let recieveParams = route.params.userProfileData;
    console.log('User data recieved for in sales and inquiry form screen:', recieveParams);
    let { CustomerName, Email, HouseNumber, Streetno, Floorno, MobilePhoneNo, SubRegionID, LocationID } = recieveParams;

    // Note: Handeling states here...!
    const [remarksValue, setRemarksValue] = useState("");

    const [brandValue, setBrandValue] = useState("");
    const [brandObj, setBrandObj] = useState(null);

    const [categoriesArr, setCategoriesArr] = useState([]);

    const [categoryValue, setCategoryValue] = useState("");
    const [categoryObj, setCategoryObj] = useState(null);

    const [cityValue, setCityValue] = useState("");
    const [cityObj, setCityObj] = useState(null);

    const [areaList, setAreaList] = useState([]);

    const [areaValue, setAreaValue] = useState("");
    const [targetAreaObj, setTargetAreaObj] = useState(null);

    // Note: Previous data states...!
    const [prevCityObj, setPrevCityObj] = useState(null);
    const [prevAreaObj, setPrevAreaObj] = useState(null);

    // Note: Checking user authentication status...!
    let availableUser = useSelector(({ authState }) => { return authState.authenticationUser });
    // console.log(availableUser);

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
    // Note: Functionality completed...!


    // Note: Function to show message...!
    const showToast = (value) => {
        ToastAndroid.show(value, ToastAndroid.LONG);
    };

    // Note: When the brandValue state updated then this hook will run...!
    useEffect(() => {
        let brandFlag = false;
        let brandFound;

        for (let i = 0; i < brandInfoArr.length; i++) {
            // console.log(brandInfoArr[i]);

            if (brandValue.brandValue === brandInfoArr[i].BrandName) {
                brandFlag = true;
                brandFound = brandInfoArr[i];
                setBrandObj(brandFound);
                break;
            }
        }

        console.log(brandFound);
        console.log(brandValue);
    }, [brandValue]);

    // Note: When the brandObj state updated then this hook will run...!
    useEffect(() => {
        console.log(brandObj, 'Obj Found!');

        if (brandObj != null) {
            let idCheck = brandObj.BrandId;

            if (idCheck === "LG") {
                setCategoriesArr(lgList);
            }

            else if (idCheck === "AR") {
                setCategoriesArr(arList);
            }

            else if (idCheck === "ID") {
                setCategoriesArr(idList);
            }

            else if (idCheck === "MT") {
                setCategoriesArr(mtList);
            }

            else if (idCheck === "MI") {
                setCategoriesArr(miList);
            }

            else if (idCheck === "BI") {
                setCategoriesArr(biList);
            }

            else if (idCheck === "KA") {
                setCategoriesArr(kaList);
            }

            else if (idCheck === "BO") {
                setCategoriesArr(boList);
            }

            else if (idCheck === "PA") {
                setCategoriesArr(paList);
            }

            else if (idCheck === "SH") {
                setCategoriesArr(shList);
            }
        }

    }, [brandObj]);

    // Note: When the categoryValue state updated then this hook will run...!
    useEffect(() => {
        let categoryFlag = false;
        let categoryFound;

        for (let i = 0; i < categoryInfoArr.length; i++) {
            // console.log(categoryInfoArr[i]);

            if (categoryValue.categoryValue === categoryInfoArr[i].CategoryName) {
                categoryFlag = true;
                categoryFound = categoryInfoArr[i];
                setCategoryObj(categoryFound);
                break;
            }
        }

        console.log(categoryFound);
    }, [categoryValue]);

    // Note: When the cityValue state updated then this hook will run...!
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

    // Note: When the cityValue state updated then this hook will run...!
    useEffect(() => {
        let cityFlag = false;
        let cityFound;

        for (let i = 0; i < cityInfoArr.length; i++) {
            // console.log(cityInfoArr[i]);

            if (cityValue.cityValue === cityInfoArr[i].subRegionName) {
                cityFlag = true;
                cityFound = cityInfoArr[i];
                setCityObj(cityFound);
                break;
            }
        }

        console.log(cityFound);
        console.log(cityFound);
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

    // Note: Function to submit sales inquiry form...!
    const submitRequestInstallForm = () => {

        // Note: Validation...!
        if (brandValue === "") {
            showToast('Please select brand');
        }

        else if (categoryValue === "") {
            showToast('Please select category');
        }

        else if (remarksValue === "") {
            showToast('Remarks field is required');
        }

        // else if (cityValue === "") {
        //     showToast('Please select sub region');
        // }

        // else if (areaValue === "") {
        //     showToast('Please select location');
        // }

        else {
            let salesInquiryForm = {
                remarks: remarksValue,

                brandId: brandObj.BrandId,
                categoryId: categoryObj.CategoryId,

                subRegionId: (cityValue === "") ? (SubRegionID) : (cityObj.subRegionId),
                locationID: (areaValue === "") ? (LocationID) : (targetAreaObj.locationId),

                inquiryType: "14",
                inquirySubType: "68",
                busUnitID: "1000",
                issueTypeId: "0086",
                notificationType: "Z2",
                MbApp: true
            }
            // console.log(salesInquiryForm);
            requestInstallFormFunc(salesInquiryForm);
            clearAll();
        }
    }

    // Note: Function to call API and send data to the API...!
    const requestInstallFormFunc = async (formData) => {
        console.log(formData, 'Request and Service data recieved in action!');

        let userPhoneNum = availableUser.MobilePhoneNo;
        let api = `https://crm.shaker.com.sa/api/customers/requestInstalation/?uniqueIdentifier=${userPhoneNum}`;

        try {
            let response = await axios.post(api, formData);
            console.log(response);

            // let requiredData = response.data.notification.NotificationsNumber;

            if (response.data.message === "Added Successfully") {
                showToast("Thank You!\nRequest and Service form has been submitted successfully!");

                // setTimeout(() => {
                //     navigation.navigate('Install Num', { notificationParams: requiredData });
                // }, 2000);
            }

            else {
                console.log(response.data.message);
                showToast(response.data.message);
            }
        }

        catch (error) {
            console.log(error);
        }
    }

    // Note: Function to clear all states...!
    const clearAll = () => {
        setBrandValue({ brandValue: "" });
        setCategoryValue({ categoryValue: "" });
        setCityValue({ cityValue: "" });
        setAreaValue({ areaValue: "" });
        setRemarksValue("");
        setBrandObj(null);
        setCategoryObj(null);
        setCityObj(null);
        setTargetAreaObj(null);
    }

    return (
        <>
            {/* Note: Main image background container */}
            <ImageBackground source={require('../../../assets/images/homebg.png')} style={styles.bgImg}>

                {/* Note: Nav header */}
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')} >
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

                {/* Note: COntent container */}
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={styles.mainContainer}>
                        {/* Note: First accordian container */}
                        <View style={styles.subContainer}>
                            <SimpleAccordion
                                title={"Product Info"}
                                bannerStyle={{ backgroundColor: '#299371' }}
                                titleStyle={{ color: 'white' }}
                                arrowColor="white"
                                viewInside={
                                    <View>
                                        {/* Note: Brand dropdown list area */}
                                        <Text style={styles.text}>
                                            Select Brand
                                        </Text>
                                        <ModalDropdown
                                            defaultIndex={-1}
                                            defaultValue="Select Brand"
                                            isFullWidth={true}
                                            options={updatebrandListArr}
                                            onSelect={(value) => setBrandValue({ brandValue: updatebrandListArr[value] })}
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
                                            }}
                                        />

                                        {/* Note: Categories dropdown list area */}
                                        <Text style={styles.text}>
                                            Select Category
                                        </Text>
                                        <ModalDropdown
                                            defaultIndex={-1}
                                            defaultValue="Select Category"
                                            isFullWidth={true}
                                            options={categoriesArr}
                                            onSelect={(value) => setCategoryValue({ categoryValue: categoriesArr[value] })}
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
                                            }}
                                        />

                                        {/* Note: Remarks input field area...! */}
                                        <Text style={styles.text}>Remarks</Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Type Your Complaint"
                                            value={remarksValue}
                                            onChangeText={(value) => { setRemarksValue(value) }}
                                            multiline
                                            numberOfLines={4}
                                        />
                                    </View>
                                }
                            />

                        </View>

                        {/* Note: Second accordian container */}
                        <View style={styles.subContainer}>
                            <SimpleAccordion
                                title={"Address Info"}
                                bannerStyle={{ backgroundColor: '#299371' }}
                                titleStyle={{ color: 'white' }}
                                arrowColor="white"
                                viewInside={
                                    <View>
                                        {/* Note: Select city / sub region dropdown */}
                                        <Text style={styles.text}>
                                            Select City
                                        </Text>
                                        <ModalDropdown
                                            options={citiesList}
                                            defaultIndex={-1}
                                            // defaultValue='Select City'
                                            defaultValue={(prevCityObj != null) ? (prevCityObj.subRegionName) : ('Loading...')}
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

                                        {/* Note: Select area / location dropdown */}
                                        <Text style={styles.text}>
                                            Select District
                                        </Text>
                                        <ModalDropdown
                                            options={areaList}
                                            defaultIndex={-1}
                                            // defaultValue='Select Area'
                                            defaultValue={(prevAreaObj != null) ? (prevAreaObj.locationName) : ('Loading...')}
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
                                }
                            />
                        </View>

                        <View style={styles.subContainer}>

                            <SimpleAccordion viewInside={
                                <View>
                                    <Text style={styles.text}>Booking Date</Text>
                                    <ModalDropdown
                                        defaultValue="Select Date"
                                        isFullWidth={true}
                                        options={timeArr}
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
                                        }}
                                    />


                                    <Text style={styles.text}>Booking Time</Text>
                                    <ModalDropdown
                                        defaultValue="Select Time"
                                        isFullWidth={true}
                                        options={timeArr}
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
                                        }}
                                    />
                                    <TouchableOpacity style={styles.btnContainer} >
                                        <Text style={styles.btnText}>Check Availability</Text>
                                    </TouchableOpacity>
                                </View>
                            }
                                title={"Scheduling"}
                                bannerStyle={{ backgroundColor: '#299371' }}
                                titleStyle={{ color: 'white' }}
                                arrowColor="white"
                            />
                        </View>

                        {/* Note: Button container */}
                        <View style={styles.mainBtnContainer}>
                            <TouchableOpacity style={styles.btnContainer} onPress={submitRequestInstallForm}>
                                <Text style={styles.btnText}>
                                    Submit
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </>
    )
};

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
        // borderWidth: 1,
        borderRadius: 5,
        // backgroundColor: 'white',
        width: '95%',
        // padding: 15,
        marginVertical: 10
    },
    label: {
        fontFamily: 'NotoSans-Bold',
        marginVertical: 10,

    },
    input: {
        color: "black",
        borderColor: '#299371',
        borderWidth: 1,
        borderRadius: 7,
        marginVertical: 3,
        textAlignVertical: "top"
    },
    text: {
        fontFamily: 'NoboSans-Regular',
        marginVertical: 4,
        color: '#299371'
    },
    userImg: {
        marginHorizontal: '36%'
    },
    iconStyle: {
        fontSize: 70,
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
    btnContainer: {
        backgroundColor: '#299371',
        padding: 10,
        borderRadius: 7,
        justifyContent: 'center',
        width: '80%',
        marginLeft: 30,
        alignItems: 'center',
        marginVertical: '10%'
    },
    btnText: {
        color: 'white',
        fontFamily: 'NotoSans-Regular'
    },
    img: {
        marginVertical: '10%',
        marginHorizontal: '40%'

    },

    mainBtnContainer: {
        borderColor: '#299371',
        // borderWidth: 1,
        borderRadius: 5,
        // backgroundColor: 'white',
        width: '95%',
        // padding: 15,
        marginVertical: 10
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

})


export default RequestInstallationForm;