import { calculateMultipleOfThreeAndFive } from "./";

describe("Multiples of 3 or 5", () => {
  test.each`
    limit   | expectedResult
    ${10}   | ${23}
    ${1000} | ${233168}
  `(
    "Should output $expectedResult for numbers below $limit",
    ({ limit, expectedResult }) => {
      const result = calculateMultipleOfThreeAndFive(limit - 1);

      expect(result).toBe(expectedResult);
    }
  );
});
