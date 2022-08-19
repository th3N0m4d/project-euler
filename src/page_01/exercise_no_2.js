import { isEven, makeNumberSequence, sum } from "../utils";

export function fibonacci(n) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

export function fibonacciList(n) {
  const numberSequence = makeNumberSequence(n);

  return numberSequence.map(fibonacci);
}

export function calculateEvenFibonacciNumbers(n) {
  const numberSequence = fibonacciList(n);

  return numberSequence.filter(isEven).reduce(sum, 0);
}
