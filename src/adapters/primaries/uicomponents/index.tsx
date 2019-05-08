import {configureReduxStore} from "../../../store/reduxStore";
import {Provider} from "react-redux";
import {render} from "react-dom";
import * as React from "react";
import {defineRootComponent} from "./rootComponentDefinition";
import dependenciesConfigurator from "./dependenciesConfigurator";

const renderRootComponent = store =>
    render(defineRootComponent(store), document.getElementById("root"));


const launch = () => {
    const store = configureReduxStore(dependenciesConfigurator);
    renderRootComponent(store);
};

launch();