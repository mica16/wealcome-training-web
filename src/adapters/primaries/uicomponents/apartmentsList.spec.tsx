import {shallow, ShallowWrapper} from "enzyme";
import ApartmentsList, {getAllApartments} from "./apartmentsList.component";
import * as React from "react";
import {Provider} from "react-redux";
import {CoreLogicState} from "../../../corelogic/coreLogicState";
import {Store} from "redux";
import {InMemoryApartmentsGateway} from "../../secondaries/gateways/inMemoryApartmentsGateway";
import {configureReduxStore} from "../../../store/reduxStore";

describe('App component', () => {

    let store: Store<CoreLogicState>;
    let apartmentsGateway: InMemoryApartmentsGateway;

    beforeEach(() => {
        apartmentsGateway = new InMemoryApartmentsGateway();
        store = configureReduxStore({apartmentsGateway});
    });

    it('should display all available apartments', () => {
        apartmentsGateway.apartments$.next(["46 avenue de l'Opéra 75009 Paris"])
        const component: ShallowWrapper =
            shallow(<ApartmentsList store={store} />).dive();
        (component.instance() as any).componentDidMount();
        expect(getAllApartments(store.getState())).
        toEqual(["46 AVENUE DE L'OPÉRA 75009 PARIS"]);
    });

    it('should wait for display', () => {
        apartmentsGateway.apartments$.next(undefined);
        const component: ShallowWrapper =
            shallow(<ApartmentsList store={store} />).dive();
        (component.instance() as any).componentDidMount();
        expect(getAllApartments(store.getState())).
        toEqual([]);
        expect(store.getState().apartments.loading).toBeTruthy();
    });

});