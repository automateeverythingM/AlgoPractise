import { smallestDifference } from "./SmallestDifference";
test("should return array", () => {
  expect(
    Array.isArray(
      smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17])
    )
  ).toBe(true);
});

test.each([
  [
    [-1, 5, 10, 20, 28, 3],
    [26, 134, 135, 15, 17],
    [28, 26],
  ],
  [
    [-1, 5, 10, 20, 3],
    [26, 134, 135, 15, 17],
    [20, 17],
  ],
  [
    [10, 0, 20, 25],
    [1005, 1006, 1014, 1032, 1031],
    [25, 1005],
  ],
  [
    [10, 1000],
    [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530],
    [1000, 1014],
  ],
  [
    [10, 20, 30],
    [50, 20, 10],
    [10, 10],
  ],
])("test for return result ", (arrayOne, arrayTwo, expected) => {
  expect(smallestDifference(arrayOne, arrayTwo)).toEqual(expected);
});

test("number from first array should be at first position", () => {
  expect(
    smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17])[0]
  ).toBe(28);
});
