import { sum, makeNumberSequence } from "../utils";

function isMultiple(a, b) {
  return a % b === 0;
}

function isMultipleOfThreeOrFive(n) {
  const a = 3;
  const b = 5;

  return isMultiple(n, a) || isMultiple(n, b);
}

export function calculateMultipleOfThreeAndFive(n) {
  const numbers = makeNumberSequence(n);
  return numbers.filter(isMultipleOfThreeOrFive).reduce(sum, 0);
}
