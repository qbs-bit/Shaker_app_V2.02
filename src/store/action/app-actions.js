// Note: All app action functions are defined here...!

import {
    GET_USER_PROFILE,
    USER_PROFILE_UPDATED
}
    from "../constant/action-types";
import { ToastAndroid } from "react-native";
import axios from "axios";

// Note: Function to show message...!
const showToast = (value) => {
    ToastAndroid.show(value, ToastAndroid.LONG);
};

/***** Note: Action function to get user profile *****/
const getUserProfile = (num) => {
    return async (dispatch) => {
        console.log(num, 'Get user registration identification number!');

        let api = `https://crm.shaker.com.sa/api/customers/UpdateProfile/${num}`;

        try {
            let response = await axios.get(api);
            console.log(response);

            let requiredData = response.data;

            dispatch({
                type: GET_USER_PROFILE,
                payload: requiredData
            });
        }

        catch (error) {
            console.log(error);
        }
    }
}

/***** Note: Action function to update user profile *****/
const updateUserProfile = (data) => {
    return async (dispatch) => {
        console.log(data, 'data recieved for profile update in action!');

        let { houseno, city, district, id, email, mobileNo, name, street, floor } = data;
        let api = `https://crm.shaker.com.sa/api/customers/SubmitUpdateProfile?id=${id}&name=${name}&mobileno=${mobileNo}&email=${email}&houseno=${houseno}&city=${city}&district=${district}&street=${street}&floor=${floor}`;

        try {
            let response = await axios.post(api);
            console.log(response);

            if (response.data.message === "Profile Update Succesfully") {
                showToast('Profile Updated Succesfully');

                let requiredData = response.data.model;

                dispatch({
                    type: USER_PROFILE_UPDATED,
                    payload: requiredData
                });
            }
        }

        catch (error) {
            console.log(error);
        }
    }
}

export {
    getUserProfile,
    updateUserProfile
};