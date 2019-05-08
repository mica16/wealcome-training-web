import {Store} from "redux";
import {InMemoryApartmentsGateway} from "./adapters/secondaries/gateways/inMemoryApartmentsGateway";
import {configureReduxStore} from "./store/reduxStore";
import {CoreLogicState} from "./corelogic/coreLogicState";

describe('Apartments retrieval', () => {

    let store: Store<CoreLogicState>;
    let apartmentsGateway: InMemoryApartmentsGateway;

    beforeEach(() => {
        store = configureReduxStore();
        apartmentsGateway = new InMemoryApartmentsGateway();
    });

    describe('No apartment available', () => {

        it('should retrieve no apartment', () => {
            store.dispatch({type: 'RETRIEVE_APARTMENTS'});
            apartmentsGateway.apartments$.next([]);
            expect(store.getState()).toEqual({
                apartments: {
                    data: []
                }
            })
        });

    });

});