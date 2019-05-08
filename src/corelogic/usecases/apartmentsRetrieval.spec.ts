import {Store} from "redux";
import {InMemoryApartmentsGateway} from "../../adapters/secondaries/gateways/inMemoryApartmentsGateway";
import {configureReduxStore} from "../../store/reduxStore";
import {CoreLogicState} from "../coreLogicState";

describe('Apartments retrieval', () => {

    let store: Store<CoreLogicState>;
    let apartmentsGateway: InMemoryApartmentsGateway;

    beforeEach(() => {
        apartmentsGateway = new InMemoryApartmentsGateway();
        store = configureReduxStore({apartmentsGateway});
    });

    describe('No apartment available', () => {

        it('should retrieve no apartment', () => {
            retrieveApartments();
            feedWithSomeApartments();
            expectGlobalState({
                apartments: {
                    data: [],
                    loading: false
                }
            });

        });

        describe('Some apartments available', () => {

            it('should retrieve them', () => {
                retrieveApartments();
                feedWithSomeApartments(apartment1, apartment2);
                expectGlobalState({
                    apartments: {
                        data: [apartment1, apartment2],
                        loading: false
                    }
                })
            });

            it('should track the retrieval process', () => {
                retrieveApartments();
                expectGlobalState({
                    apartments: {
                        data: [],
                        loading: true
                    }
                });
            });

        });

        const retrieveApartments = () => store.dispatch({type: 'RETRIEVE_APARTMENTS'});
        const feedWithSomeApartments = (...apartments: string[]) =>
            apartmentsGateway.apartments$.next(apartments);
        const expectGlobalState = expected => expect(store.getState()).toEqual(expected);
        const apartment1 = "46 avenue de l'Opéra 75009 Paris";
        const apartment2 = "3 cité Ferembach 75017 Paris";

    });

});