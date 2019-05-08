import * as React from "react";
import {Provider} from "react-redux";
import ApartmentsList from "./apartmentsList.component";

export const defineRootComponent = store =>
    (
        <Provider store={store}>
            <ApartmentsList/>
        </Provider>
    );