export function makeNumberSequence(length) {
  return Array.from({ length }, (_, i) => i + 1);
}

export function sum(previous, current) {
  return previous + current;
}

export function isEven(n) {
  return n % 2 === 0;
}
