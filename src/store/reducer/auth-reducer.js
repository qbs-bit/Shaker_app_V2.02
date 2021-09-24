// Note: All auth cases are defined here...!

import {
    LOG_IN_USER,
    LOG_OUT_USER,
    USER_PROFILE_UPDATED
}
    from "../constant/action-types";

// Note: authReducer initial states...!
const INIT_STATE = {
    authenticationUser: null
};

const authReducer = (state = INIT_STATE, action) => {
    switch (action.type) {

        case USER_PROFILE_UPDATED:
            console.log('User profile updated data recieved in authReducer:', action.payload);

            return {
                authenticationUser: action.payload
            }

        case LOG_OUT_USER:
            return {
                ...state,
                authenticationUser: null
            }

        case LOG_IN_USER:
            return {
                ...state,
                authenticationUser: action.payload
            }

        default:
            return state;
    }
}

export default authReducer;