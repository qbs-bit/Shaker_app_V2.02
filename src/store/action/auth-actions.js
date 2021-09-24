// Note: All auth action functions are defined here...!

import {
    LOG_OUT_USER
}
    from "../constant/action-types";
import axios from "axios";
import { ToastAndroid } from "react-native";

// Note: Function to show message...!
const showToast = (value) => {
    ToastAndroid.show(value, ToastAndroid.LONG);
};

/***** Note: Function to logout user *****/
const logOutUser = () => {
    return (dispatch) => {
        dispatch({
            type: LOG_OUT_USER
        });
        showToast("You have Logged Out Successfully!");
    }
}



/***** Note: Function to update user *****/
const updatePassword = (data) => {
    return async (dispatch) => {
        console.log(data);

        let { id, oldpass, newpassword, reEnterPass } = data;
        let api = `https://crm.shaker.com.sa/api/customers/PasswordUpdate?id=${id}&oldpass=${oldpass}&newpassword=${newpassword}&reEnterPass=${reEnterPass}`;

        try {
            let response = await axios.post(api);
            console.log(response);

            // if (response.data.message === "Password Update Succesfully") {
            //     showToast("Password Updated Succesfully!");
            // }
        }

        catch (error) {
            console.log(error.message);
        }
    }
}

export {
    logOutUser,
    updatePassword
};