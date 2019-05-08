import {combineEpics, createEpicMiddleware} from "redux-observable";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {apartmentsReducer} from "../corelogic/reducers/apartmentsReducerr";
import {AppState} from "./appState";

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
