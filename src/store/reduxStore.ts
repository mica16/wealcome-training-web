import {combineEpics, createEpicMiddleware} from "redux-observable";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {AppState} from "../apartmentsRetrieval.spec";
import {apartmentsReducer} from "./reducers/apartmentsReducerr";

const epicMiddleware = createEpicMiddleware();

const rootEpic = combineEpics(
);

const rootReducer = combineReducers<AppState>({
    apartments: apartmentsReducer
} as any);

export const configureReduxStore = () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(epicMiddleware)
    );
    epicMiddleware.run(rootEpic);
    return store;
};
