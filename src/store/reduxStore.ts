import {combineEpics, createEpicMiddleware} from "redux-observable";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {apartmentsReducer} from "../corelogic/reducers/apartmentsReducerr";
import {CoreLogicState} from "../corelogic/coreLogicState";

const epicMiddleware = createEpicMiddleware();

const rootEpic = combineEpics(
);

const rootReducer = combineReducers<CoreLogicState>({
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
