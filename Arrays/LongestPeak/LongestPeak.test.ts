import { longestPeak } from "./LongestPeak";

describe("return type", () => {
  test("should return type", () => {
    expect(typeof longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3])).toBe(
      "number"
    );
  });
});
