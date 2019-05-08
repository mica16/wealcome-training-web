import {Observable, Subject} from "rxjs";
import {ApartmentsGateway} from "../../../corelogic/gateways/apartmentsGateway";

export class InMemoryApartmentsGateway implements ApartmentsGateway {

    private _apartments$: Subject<string[]> = new Subject();

    retrieve(): Observable<string[]> {
        return this._apartments$;
    }

    get apartments$(): Subject<string[]> {
        return this._apartments$;
    }
}