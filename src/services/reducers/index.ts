import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
// import { sessionReducer } from "./session-reducer";
// import { settingsReducer } from "./settings-reducer";


export const rootReducer = combineReducers({
    // session: sessionReducer,
    // settings: settingsReducer,
});

const config = {
    key: 'whitelisted-reducers',
    storage
}

export const persistedRootReducer = persistReducer(config, rootReducer);