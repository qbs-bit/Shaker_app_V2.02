// Note: All app cases are defined here...!

import {
    LOG_OUT_USER,
    GET_USER_PROFILE,
    USER_PROFILE_UPDATED
}
    from "../constant/action-types";

// Note: appReducer initial states...!
const INIT_STATE = {
    userProfileObj: null
};

const appReducer = (state = INIT_STATE, action) => {
    switch (action.type) {

        case LOG_OUT_USER:
            return {
                userProfileObj: null
            }

        case USER_PROFILE_UPDATED:
            console.log('User profile updated data recieved in appReducer:', action.payload);

            return {
                userProfileObj: action.payload
            }

        case GET_USER_PROFILE:
            console.log('User profile data recieved in appReducer:', action.payload);

            return {
                userProfileObj: action.payload
            }

        default:
            return state;
    }
}

export default appReducer;