export const primeFactors = n => {
    let primeFactors: number[] = [];
    for (let candidate = 2; n > 1; candidate++)
        for (; n % candidate === 0; n /= candidate)
            primeFactors.push(candidate);
    return primeFactors;
};