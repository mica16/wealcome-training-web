import {primeFactors} from "./primeFactors";

describe('Prime factors', () => {

    it('should list prime factors ' +
        'of a number', () => {
        assertPrimeFactorsList(1)();
        assertPrimeFactorsList(2)(2);
        assertPrimeFactorsList(3)(3);
        assertPrimeFactorsList(4)(2, 2);
        assertPrimeFactorsList(6)(2, 3);
        assertPrimeFactorsList(8)(2, 2, 2);
        assertPrimeFactorsList(9)(3, 3);
        assertPrimeFactorsList(81)(3, 3, 3, 3);
        assertPrimeFactorsList(45)(3, 3, 5);
        assertPrimeFactorsList(48)(2, 2, 2, 2, 3);
    });

});




const assertPrimeFactorsList = n => (...expectedPrimes) =>
    expect(primeFactors(n))
        .toEqual(expectedPrimes);