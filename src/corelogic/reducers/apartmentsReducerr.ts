import {combineReducers} from "redux";
import * as actionCreators from "../usecases/actionCreators";

const data = (state: string[] = [], action: actionCreators.Actions) => {
    switch (action.type) {
        case actionCreators.APARTMENTS_RETRIEVED:
            return action.payload;
        default:
            return state;
    }
};

const loading = (state: boolean = false, action: actionCreators.Actions) => {
    switch (action.type) {
        case actionCreators.RETRIEVE_APARTMENTS:
            return true;
        default:
            return false;
    }
};

export const apartmentsReducer = combineReducers(
    {
        data,
        loading
    }
);