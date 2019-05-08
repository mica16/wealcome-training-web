import {ApartmentsGateway} from "../../../corelogic/gateways/apartmentsGateway";
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import {filter} from "rxjs/operators";

export class HttpApartmentsGateway implements ApartmentsGateway {

    private apartments$: Subject<string[] | undefined> = new BehaviorSubject(undefined);

    retrieve(): Observable<string[]> {
        this.apartments$.next(["53 avenue des Champs-Elysées 75008 Paris"]);
        return this.apartments$.pipe(filter(Boolean)) as Observable<string[]>;
    }




}