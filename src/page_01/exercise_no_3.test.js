import { primeFactorization, isPrime } from "./exercise_no_3";

describe("Largest prime factor", () => {
  test.each`
    n               | expectedResult
    ${10}           | ${5}
    ${13195}        | ${29}
    ${600851475143} | ${6857}
  `("Find the largest prime factor of $n", ({ n, expectedResult }) => {
    const result = primeFactorization(n);

    expect(result).toBe(expectedResult);
  });

  test.each`
    n     | expectedResult
    ${1}  | ${false}
    ${2}  | ${true}
    ${3}  | ${true}
    ${4}  | ${false}
    ${10} | ${false}
    ${13} | ${true}
  `("isPrime should return $expectedResult for $n", ({ n, expectedResult }) => {
    expect(isPrime(n)).toBe(expectedResult);
  });
});
