import { threeNumberSum } from "./ThreeNumberSum";
describe("test return type and length", () => {
  test("should return array", () => {
    expect(Array.isArray(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0))).toBe(
      true
    );
    expect(Array.isArray(threeNumberSum([12, 3], 0))).toBe(true);
  });

  test("should be empty array", () => {
    expect(threeNumberSum([12, 3], 0)).toHaveLength(0);
    expect(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0)).toHaveLength(3);
  });
});

describe("Validate return value", () => {
  test.each([
    {
      array: [12, 3, 1, 2, -6, 5, -8, 6],
      targetSum: 0,
      expected: [
        [-8, 2, 6],
        [-8, 3, 5],
        [-6, 1, 5],
      ],
    },
    {
      array: [1, 2, 3],
      targetSum: 6,
      expected: [[1, 2, 3]],
    },
    {
      array: [1, 2, 3],
      targetSum: 7,
      expected: [],
    },
    {
      array: [8, 10, -2, 49, 14],
      targetSum: 57,
      expected: [[-2, 10, 49]],
    },
  ])("test return value", ({ array, targetSum, expected }) => {
    expect(threeNumberSum(array, targetSum)).toEqual(expected);
  });
});
