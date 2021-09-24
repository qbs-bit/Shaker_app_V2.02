// Note: Main reducer file...!

import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";

// import AsyncStorage from "@react-native-community/async-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Note: Importing reducers...!
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";

// Note: User state maintain config...!
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whiteList: ['authState']
};

const rootReducer = combineReducers({
    authState: authReducer,
    appState: appReducer
});

export default persistReducer(persistConfig, rootReducer);