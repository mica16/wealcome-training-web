import {InMemoryApartmentsGateway} from "../../secondaries/gateways/inMemoryApartmentsGateway";
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

export default process.env.INMEMORY === "true" ? inMemoryDependencies : externalDependencies;