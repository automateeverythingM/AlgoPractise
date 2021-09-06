//* Difficulty: Easy
//! Name: Sorted Squared Array
//? Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares
//? of the original integers also sorted in ascending order.

export function sortedSquaredArray(array: number[]) {
  const squaredArray: number[] = [];

  for (const number of array) {
    squaredArray.push(number ** 2);
  }

  return squaredArray.sort((a, b) => a - b);
}

export function sortedSquaredArraySecond(array: number[]) {
  let left = 0;
  let right = array.length - 1;
  let squaredArray: number[] = [];
  while (left <= right) {
    const leftNum = Math.abs(array[left]);
    const rightNum = Math.abs(array[right]);

    if (leftNum > rightNum) {
      squaredArray.unshift(leftNum ** 2);
      left++;
    } else {
      squaredArray.unshift(rightNum ** 2);
      right--;
    }
  }

  return squaredArray;
}
