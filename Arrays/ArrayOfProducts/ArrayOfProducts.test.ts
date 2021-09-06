import {
  arrayOfProducts,
  arrayOfProductsSecond,
  arrayOfProductsThird,
} from "./ArrayOfProducts";
describe("test return type", () => {
  test("should return array", () => {
    expect(Array.isArray(arrayOfProducts([]))).toBe(true);
    expect(Array.isArray(arrayOfProducts([2, 3, 4, 5]))).toBe(true);
  });

  test("should return same length as input array", () => {
    expect(arrayOfProducts([5, 1, 4, 2]).length).toBe(4);
  });
});

describe("test return value", () => {
  test.each([
    {
      array: [5, 1, 4, 2],
      expected: [8, 40, 10, 20],
    },
    {
      array: [1, 8, 6, 2, 4],
      expected: [384, 48, 64, 192, 96],
    },
    {
      array: [-5, 2, -4, 14, -6],
      expected: [672, -1680, 840, -240, 560],
    },
    {
      array: [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      expected: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
  ])("test with $array", ({ array, expected }) => {
    expect(arrayOfProducts(array)).toEqual(expected);
    expect(arrayOfProductsSecond(array)).toEqual(expected);
    expect(arrayOfProductsThird(array)).toEqual(expected);
  });
});
