import {
  calculateEvenFibonacciNumbers,
  fibonacci,
  fibonacciList,
} from "./exercise_no_2";

describe("Even Fibonacci numbers", () => {
  test.each`
    n     | expectedResult
    ${0}  | ${0}
    ${1}  | ${1}
    ${10} | ${55}
    ${33} | ${3524578}
  `("Calculate the Fibonacci sequence of $n", ({ n, expectedResult }) => {
    const result = fibonacci(n);

    expect(result).toBe(expectedResult);
  });

  test("Calculate the Fibonacci numbers of 10", () => {
    const sequence = fibonacciList(10);

    expect(sequence).toStrictEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });

  test("Calculate the even numbers of the Fibonacci sequence that are less that 4M", () => {
    const result = calculateEvenFibonacciNumbers(33);

    expect(result).toBe(4613732);
  });
});
