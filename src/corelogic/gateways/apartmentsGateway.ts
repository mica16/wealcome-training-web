import {Observable} from "rxjs";

export interface ApartmentsGateway {
    retrieve(): Observable<string[]>
}