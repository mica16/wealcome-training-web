import {applyMiddleware, combineReducers, compose, createStore, Store} from "redux";
import {Observable, Subject} from "rxjs";
import {ActionsObservable, combineEpics, createEpicMiddleware, ofType, StateObservable} from "redux-observable";
import {map, switchMap} from "rxjs/operators";

interface Apartment {
    address: string;
}

interface AppState {
    apartments: {
        data: Apartment[]
    };
}

interface ApartmentsRetrievalGateway {
    retrieve(): Observable<Apartment[]>;
}

class InMemoryApartmentsRetrievalGateway implements ApartmentsRetrievalGateway {

    private _apartments$: Subject<Apartment[]> = new Subject();

    retrieve(): Observable<Apartment[]> {
        return this._apartments$;
    }

    get apartments$(): Subject<Apartment[]> {
        return this._apartments$;
    }
}


describe('Apartment retrieval', () => {

    let store: Store<AppState>;
    let apartmentsRetrievalGateway: InMemoryApartmentsRetrievalGateway;

    beforeEach(() => {
        apartmentsRetrievalGateway = new InMemoryApartmentsRetrievalGateway();
        store = createReduxStore({apartmentsRetrievalGateway});
    });

    describe('No apartment available', () => {

        it('should retrieve no apartment', () => {
            store.dispatch({type: 'APARTMENTS_RETRIEVAL'});
            apartmentsRetrievalGateway.apartments$.next([]);
            expect(store.getState()).toEqual({
                apartments: {
                    data: []
                }
            });
        });

    });

});

const retrieveApartments = (action$: ActionsObservable<any>,
                            state$: StateObservable<AppState>,
                            {apartmentsRetrievalGateway}: { apartmentsRetrievalGateway: ApartmentsRetrievalGateway }) =>
    action$.pipe(
        ofType('APARTMENTS_RETRIEVAL'),
        switchMap(() => apartmentsRetrievalGateway.retrieve()
            .pipe(map(() => ({type: 'APARTMENTS_RETRIEVED', payload: []})))
        )
    );

const createReduxStore = (dependencies) => {
    const epicMiddleware = createEpicMiddleware({dependencies});
    const rootEpic = combineEpics<any>(retrieveApartments);
    const store = createStore(
        combineReducers<AppState>({apartments: apartmentsReducer}),
        compose(applyMiddleware(epicMiddleware))
    );
    epicMiddleware.run(rootEpic);
    return store;
};


const data = (state: Apartment[] = [], action: any) => {
    switch (action.type) {
        case 'APARTMENTS_RETRIEVED':
            return action.payload;
        default:
            return state;
    }
};

const apartmentsReducer = combineReducers({
    data
});