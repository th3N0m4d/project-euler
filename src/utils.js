export function makeNumberSequence(length) {
  return Array.from({ length: length - 1 }, (_, i) => i + 1);
}

export function sum(previous, current) {
  return previous + current;
}
