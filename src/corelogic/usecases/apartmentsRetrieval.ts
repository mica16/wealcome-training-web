import {ActionsObservable, ofType, StateObservable} from "redux-observable";
import {map, switchMap} from "rxjs/operators";
import {CoreLogicState} from "../coreLogicState";
import {ApartmentsGateway} from "../gateways/apartmentsGateway";
import * as actionCreators from "../usecases/actionCreators";

export const retrieveApartments = (action$: ActionsObservable<any>,
                                   state$: StateObservable<CoreLogicState>,
                                   {apartmentsGateway}: { apartmentsGateway: ApartmentsGateway }) =>
    action$.pipe(
        ofType(actionCreators.RETRIEVE_APARTMENTS),
        switchMap(() =>
            apartmentsGateway.retrieve()
                .pipe(
                    map(actionCreators.Actions.apartmentsRetrieved)
                )
        )
    );