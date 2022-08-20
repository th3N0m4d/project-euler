/**
 * Largest prime factor
 */

import { isMultiple } from "../utils";

export function isPrime(n) {
  const { length } = findPrimeNumbers(n);

  return length === 2;
}

export function findPrimeNumbers(n) {
  const primeFactors = [];
  let factor = 1;

  while (factor <= n) {
    if (isMultiple(n, factor)) {
      primeFactors.push(factor);
    }

    factor++;
  }

  return primeFactors;
}

export function primeFactorization(n, i = 2) {
  // Guard clause to prevent infinite loop
  if (i > n) {
    return i;
  }

  if (n % i === 0) {
    return primeFactorization(n / i, i);
  } else {
    return primeFactorization(n, ++i);
  }
}
