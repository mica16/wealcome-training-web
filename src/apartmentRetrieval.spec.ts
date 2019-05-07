import {Store} from "redux";
import {Observable, Subject} from "rxjs";

interface Apartment {
    address: string;
}

interface AppState {
    apartments: {
        data: Apartment[]
    }
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


describe('Apartement retrieval', () => {

    let store: Store<AppState>;

    describe('No apartement available', () => {

        it('should retrieve no apartement', () => {
            const apartmentsRetrievalGateway: InMemoryApartmentsRetrievalGateway = new InMemoryApartmentsRetrievalGateway();
            store.dispatch({type: 'APARTMENT_RETRIEVAL'});
            apartmentsRetrievalGateway.apartments$.next([]);
            expect(store.getState()).toEqual({
                apartments: {
                    data: []
                },
            });
        });

    });

});