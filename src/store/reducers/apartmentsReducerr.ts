import {combineReducers} from "redux";

export const apartmentsReducer = combineReducers(
    {
        data: (state: string[] = [], action: any) => {
            return state;
        }
    });