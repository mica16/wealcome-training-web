import {combineEpics, createEpicMiddleware} from "redux-observable";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {apartmentsReducer} from "../corelogic/reducers/apartmentsReducerr";
import {CoreLogicState} from "../corelogic/coreLogicState";
import {retrieveApartments} from "../corelogic/usecases/apartmentsRetrieval";
import {composeWithDevTools} from "redux-devtools-extension";

const rootEpic = combineEpics<any>(
    retrieveApartments
);

const rootReducer = combineReducers<CoreLogicState>({
    apartments: apartmentsReducer
} as any);

export const configureReduxStore = dependencies => {
    const epicMiddleware = createEpicMiddleware({dependencies});
    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(epicMiddleware))
    );
    epicMiddleware.run(rootEpic);
    return store;
};
