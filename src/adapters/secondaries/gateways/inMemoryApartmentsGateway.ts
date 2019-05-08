import {BehaviorSubject, Observable, Subject} from "rxjs";
import {ApartmentsGateway} from "../../../corelogic/gateways/apartmentsGateway";
import {filter} from "rxjs/operators";

export class InMemoryApartmentsGateway implements ApartmentsGateway {

    private _apartments$: Subject<string[] | undefined> = new BehaviorSubject(undefined);

    retrieve(): Observable<string[]> {
        return this._apartments$.pipe(filter(Boolean)) as Observable<string[]>;
    }

    get apartments$(): Subject<string[] | undefined> {
        return this._apartments$;
    }
}