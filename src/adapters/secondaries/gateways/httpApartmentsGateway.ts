import {ApartmentsGateway} from "../../../corelogic/gateways/apartmentsGateway";
import {Observable, of} from "rxjs";

export class HttpApartmentsGateway implements ApartmentsGateway {

    retrieve(): Observable<string[]> {
        return of(["53 avenue des Champs-Elysées 75008 Paris"]);
    }

}