import * as React from "react";
import {Provider} from "react-redux";
import App from "./app.component";

export const defineRootComponent = store =>
    (
        <Provider store={store}>
            <App/>
        </Provider>
    );