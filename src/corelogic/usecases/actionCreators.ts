import {createAction} from "../../store/createAction";
import {ActionsUnion} from "../../store/actionsUnions";

export const RETRIEVE_APARTMENTS = 'RETRIEVE_APARTMENTS';
export const APARTMENTS_RETRIEVED = 'APARTMENTS_RETRIEVED';

export const Actions = {
    retrieveApartments: () => createAction(RETRIEVE_APARTMENTS),
    apartmentsRetrieved: (apartments: string[]) =>
        createAction(APARTMENTS_RETRIEVED, apartments)
};

export type Actions = ActionsUnion<typeof Actions>;