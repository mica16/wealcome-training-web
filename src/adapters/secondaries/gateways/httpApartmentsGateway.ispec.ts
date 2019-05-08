import {HttpApartmentsGateway} from "./httpApartmentsGateway";

describe('Http Apartments gateway', () => {

    it('should retrieve real data', done => {
        new HttpApartmentsGateway().retrieve()
            .subscribe(apartments => {
                expect(apartments)
                    .toEqual(["53 avenue des Champs-Elysées 75008 Paris"]);
                done();
            });
    });

});