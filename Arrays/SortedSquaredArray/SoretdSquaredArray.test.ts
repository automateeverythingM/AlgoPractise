import {
  sortedSquaredArray,
  sortedSquaredArraySecond,
} from "./SortedSquaredArray";

test("should return array", () => {
  expect(Array.isArray(sortedSquaredArray([-2, -1, 1, 3, 4]))).toBe(true);
  expect(Array.isArray(sortedSquaredArray([]))).toBe(true);
});

describe("Test return value, should return sorted array", () => {
  const testInput = [-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20];
  test("should", () => {
    expect(sortedSquaredArray(testInput)[0]).toBe(0);

    expect(sortedSquaredArray(testInput)[0]).toBeGreaterThanOrEqual(0);
    expect(
      sortedSquaredArray(testInput)[testInput.length - 1]
    ).toBeGreaterThanOrEqual(50 ** 2);
  });

  expect(sortedSquaredArray(testInput)).toEqual([
    0, 0, 1, 1, 1, 4, 4, 9, 169, 361, 400, 2500,
  ]);

  expect(sortedSquaredArray(testInput).reduce((a, b) => a + b)).toBe(3450);

  expect(sortedSquaredArray([-10])).toEqual([100]);

  expect(sortedSquaredArray([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toEqual([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
});

//Second solution
test("should return array", () => {
  expect(Array.isArray(sortedSquaredArraySecond([-2, -1, 1, 3, 4]))).toBe(true);
  expect(Array.isArray(sortedSquaredArraySecond([]))).toBe(true);
});

describe("Test return value, should return sorted array", () => {
  const testInput = [-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20];

  test("should", () => {
    expect(sortedSquaredArraySecond(testInput)[0]).toBe(0);

    expect(sortedSquaredArraySecond(testInput)[0]).toBeGreaterThanOrEqual(0);
    expect(
      sortedSquaredArraySecond(testInput)[testInput.length - 1]
    ).toBeGreaterThanOrEqual(50 ** 2);
  });

  expect(sortedSquaredArraySecond(testInput)).toEqual([
    0, 0, 1, 1, 1, 4, 4, 9, 169, 361, 400, 2500,
  ]);

  expect(sortedSquaredArraySecond(testInput).reduce((a, b) => a + b)).toBe(
    3450
  );

  expect(sortedSquaredArraySecond([-10])).toEqual([100]);

  expect(sortedSquaredArraySecond([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toEqual([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
});
