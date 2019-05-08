import {configureReduxStore} from "../../../store/reduxStore";
import {InMemoryApartmentsGateway} from "../../secondaries/gateways/inMemoryApartmentsGateway";
import {Provider} from "react-redux";
import {render} from "react-dom";
import * as React from "react";
import {defineRootComponent} from "./rootComponentDefinition";
import {HttpApartmentsGateway} from "../../secondaries/gateways/httpApartmentsGateway";

const inMemoryApartmentsGateway = new InMemoryApartmentsGateway();
inMemoryApartmentsGateway.apartments$.next(["46 avenue de l'Opéra 75009 Paris"]);

const inMemoryDependencies = {
    apartmentsGateway: inMemoryApartmentsGateway
};

const httpApartmentsGateway = new HttpApartmentsGateway();

const externalDependencies = {
    apartmentsGateway: httpApartmentsGateway
};

const renderRootComponent = store =>
    render(defineRootComponent(store), document.getElementById("root"));


const launch = () => {
    const store = configureReduxStore(process.env.INMEMORY === "true" ?
        inMemoryDependencies : externalDependencies);
    renderRootComponent(store);
};

launch();