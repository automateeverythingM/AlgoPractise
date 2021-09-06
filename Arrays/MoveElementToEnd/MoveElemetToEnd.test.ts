import { moveElementToEnd } from "./MoveElementToEnd";
describe("test return type", () => {
  test("should return array same length", () => {
    expect(Array.isArray(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2))).toBe(
      true
    );
    expect(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2).length).toBe(8);
  });
});

describe("testing return value", () => {
  test.each([
    {
      array: [2, 1, 2, 2, 2, 3, 4, 2],
      toMove: 2,
      expected: [2, 2, 2, 2, 2],
    },
    {
      array: [],
      toMove: 3,
      expected: [],
    },
    {
      array: [1, 2, 4, 5, 6],
      toMove: 3,
      expected: [],
    },
    {
      array: [3, 3, 3, 3, 3],
      toMove: 3,
      expected: [3, 3, 3, 3, 3],
    },
    {
      array: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 5, 5, 5, 5, 5, 5],
      toMove: 5,
      expected: [5, 5, 5, 5, 5, 5],
    },
  ])("should move to element be at end of array", ({ array, toMove, expected }) => {
    const funcReturn = moveElementToEnd(array, toMove);
    let counter = 0;
    funcReturn.forEach((x) => {
      if (x === toMove) counter++;
    });

    const endArray = funcReturn.slice(array.length - counter);

    expect(endArray).toEqual(expected);
  });
});
