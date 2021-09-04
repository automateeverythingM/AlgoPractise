import {
  twoNumberSum,
  twoNumberSumHash,
  twoNumberSumPointers,
} from "./TwoNumberSum";

test("should return array", () => {
  //2FOR
  expect(Array.isArray(twoNumberSum([], 10))).toEqual(true);
  expect(Array.isArray(twoNumberSum([1, 2, 3, 4, 5, 6], 10))).toEqual(true);
  //HASH
  expect(Array.isArray(twoNumberSumHash([], 10))).toEqual(true);
  expect(Array.isArray(twoNumberSumHash([1, 2, 3, 4, 5, 6], 10))).toEqual(true);
  //POINTER
  expect(Array.isArray(twoNumberSumPointers([], 10))).toEqual(true);
  expect(Array.isArray(twoNumberSumPointers([1, 2, 3, 4, 5, 6], 10))).toEqual(
    true
  );
});

test("output array length should be 2", () => {
  //2FOR
  expect(twoNumberSum([1, 2, 3, 4, 5, 6], 10)).toHaveLength(2);
  //HASH
  expect(twoNumberSumHash([1, 2, 3, 4, 5, 6], 10)).toHaveLength(2);
  //POINTER
  expect(twoNumberSumPointers([1, 2, 3, 4, 5, 6], 10)).toHaveLength(2);
});

test("should return array ", () => {
  //2FOR
  expect(
    twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10).reduce((a, b) => a + b)
  ).toBe(10);

  expect(
    twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17).reduce((a, b) => a + b)
  ).toBe(17);

  expect(
    twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 16).reduce((a, b) => a + b)
  ).toBe(16);

  //HASH
  expect(
    twoNumberSumHash([1, 2, 3, 4, 5, 6, 7, 8, 9], 17).reduce((a, b) => a + b)
  ).toBe(17);
  expect(
    twoNumberSumHash([3, 5, -4, 8, 11, 1, -1, 6], 10).reduce((a, b) => a + b)
  ).toBe(10);

  expect(
    twoNumberSumHash([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 16).reduce(
      (a, b) => a + b
    )
  ).toBe(16);

  //POINTER
  expect(
    twoNumberSumPointers([1, 2, 3, 4, 5, 6, 7, 8, 9], 17).reduce(
      (a, b) => a + b
    )
  ).toBe(17);
  expect(
    twoNumberSumPointers([3, 5, -4, 8, 11, 1, -1, 6], 10).reduce(
      (a, b) => a + b
    )
  ).toBe(10);

  expect(
    twoNumberSumPointers([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 16).reduce(
      (a, b) => a + b
    )
  ).toBe(16);
});
