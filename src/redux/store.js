import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { businessReducer } from "./BusinessReducer/reducer";


const rootReducer = combineReducers({
    businessReducer:businessReducer
});

export const store = legacy_createStore(rootReducer);
