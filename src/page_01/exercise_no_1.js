import { sum, makeNumberSequence, isMultiple } from "../utils";

function isMultipleOfThreeOrFive(n) {
  return isMultiple(n, 3) || isMultiple(n, 5);
}

export function calculateMultipleOfThreeAndFive(n) {
  const numbers = makeNumberSequence(n);
  return numbers.filter(isMultipleOfThreeOrFive).reduce(sum, 0);
}
