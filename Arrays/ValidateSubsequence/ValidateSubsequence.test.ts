import {
  ValidateSubsequence,
  ValidateSubsequenceSecond,
} from "./ValidateSubsequence";

test("should return boolean", () => {
  expect(typeof ValidateSubsequence([1], [2])).toBe("boolean");
  expect(typeof ValidateSubsequenceSecond([1], [2])).toBe("boolean");
});

test("should return true", () => {
  expect(
    ValidateSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])
  ).toBe(true);

  expect(
    ValidateSubsequenceSecond([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])
  ).toBe(true);

  expect(ValidateSubsequence([1, 1, 1, 1, 1], [1, 1, 1])).toBe(true);

  expect(ValidateSubsequenceSecond([1, 1, 1, 1, 1], [1, 1, 1])).toBe(true);

  expect(ValidateSubsequence([5, 1, 22, 25, 6], [25])).toBe(true);

  expect(ValidateSubsequenceSecond([5, 1, 22, 25, 6], [25])).toBe(true);
});

test("should return false", () => {
  expect(
    ValidateSubsequence(
      [5, 1, 22, 25, 6, -1, 8, 10],
      [5, 1, 22, 25, 6, -1, 8, 10, 12]
    )
  ).toBe(false);
  expect(
    ValidateSubsequenceSecond(
      [5, 1, 22, 25, 6, -1, 8, 10],
      [5, 1, 22, 25, 6, -1, 8, 10, 12]
    )
  ).toBe(false);

  expect(ValidateSubsequence([1, 1, 1, 1, 1], [1, 1, 1, 2])).toBe(false);

  expect(ValidateSubsequenceSecond([1, 1, 1, 1, 1], [1, 1, 1, 2])).toBe(false);

  expect(ValidateSubsequence([5, 1, 22, 25, 6], [26])).toBe(false);

  expect(ValidateSubsequenceSecond([5, 1, 22, 25, 6], [26])).toBe(false);
});
